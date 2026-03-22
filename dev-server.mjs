// ── LOCAL API DEV SERVER ──────────────────────────────────────────────────────
// Lightweight Node.js HTTP server that serves Vercel-style serverless functions
// from the /api directory. Used during local development so the Vite dev server
// (port 5173) can proxy /api/* requests here (port 3000).
//
// Usage:
//   node dev-server.mjs          — starts the API server on port 3000
//   npm run dev:api              — same thing via package.json script
//   npm run dev:full             — starts both Vite + this API server concurrently
//
// Each API file (e.g. api/db.js) must export a default async function(req, res).
// This server dynamically imports the matching handler and invokes it with
// Express-compatible req/res objects.
//
// NOTE: Admin SDK operations (admin-delete) require FIREBASE_CLIENT_EMAIL and
// FIREBASE_PRIVATE_KEY env vars. Basic CRUD operations work without them
// because authenticated requests use the client's Firebase ID token directly.

import http from "http";
import { pathToFileURL } from "url";
import { join, resolve } from "path";
import { existsSync } from "fs";

// Port the API server listens on — must match the Vite proxy target in vite.config.js
const PORT = 3000;

// Resolve the project root directory (where this script lives)
const ROOT = resolve(".");

/**
 * parseBody — reads the full request body and parses it as JSON.
 * Returns an empty object if the body is empty or not valid JSON,
 * so handlers don't need to guard against parse errors.
 */
function parseBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

/**
 * createMockRes — wraps a raw Node.js http.ServerResponse with the
 * Express-style .status().json() chain that Vercel serverless handlers expect.
 * Also adds .setHeader() compatibility.
 */
function createMockRes(rawRes) {
  const mock = {
    _statusCode: 200,
    _headers: {},

    // Set a response header (called by CORS setup in handlers)
    setHeader(key, value) {
      mock._headers[key] = value;
      return mock;
    },

    // Set the HTTP status code; returns `this` for chaining: res.status(200).json(...)
    status(code) {
      mock._statusCode = code;
      return mock;
    },

    // Send a JSON response body and finalize the response
    json(body) {
      mock._headers["Content-Type"] = "application/json";
      rawRes.writeHead(mock._statusCode, mock._headers);
      rawRes.end(JSON.stringify(body));
    },

    // End the response without a body (used for OPTIONS preflight)
    end() {
      rawRes.writeHead(mock._statusCode, mock._headers);
      rawRes.end();
    },
  };
  return mock;
}

// ── HTTP server ──────────────────────────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  // Extract the route path, stripping query string if present
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  // Only serve /api/* routes — reject everything else
  if (!pathname.startsWith("/api/")) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  // Map URL path to the corresponding file in the api/ directory
  // e.g. /api/db → api/db.js, /api/import-recipe → api/import-recipe.js
  const routeName = pathname.replace("/api/", "");
  const handlerPath = join(ROOT, "api", `${routeName}.js`);

  // Check the handler file exists before trying to import it
  if (!existsSync(handlerPath)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: `No handler found for /api/${routeName}` }));
    return;
  }

  try {
    // Parse the request body (JSON) before passing to the handler
    const body = await parseBody(req);

    // Dynamically import the serverless function module.
    // The cache-busting query param isn't needed because Node caches ESM imports
    // by URL — but this matches how Vercel loads handlers on cold starts.
    const handlerModule = await import(pathToFileURL(handlerPath).href);
    const handler = handlerModule.default;

    if (typeof handler !== "function") {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: `Handler /api/${routeName} has no default export` }));
      return;
    }

    // Attach the parsed body to the request object (Express/Vercel convention)
    req.body = body;

    // Create an Express-compatible response wrapper and invoke the handler
    const mockRes = createMockRes(res);
    await handler(req, mockRes);
  } catch (err) {
    console.error(`[dev-server] Error in /api/${routeName}:`, err);
    // Don't crash the server on handler errors — return 500 to the client
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err.message }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`\n  API dev server running at http://localhost:${PORT}`);
  console.log(`  Vite proxy target is configured to forward /api/* here.\n`);
});
