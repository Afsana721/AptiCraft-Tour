// SERVER ROUTE – reads approach.json and exposes it as an API
// Purpose: provide structured content for Contents.jsx (single source of truth)

import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  // Resolve path to public/approach.json
  const filePath = path.join(process.cwd(), "public", "approach.json");

  // Read and parse JSON (server-side only)
  const raw = await readFile(filePath, "utf-8");
  const json = JSON.parse(raw);

  // Return JSON as-is (no sections, no fallback)
  return Response.json(json);
}
