

// SERVER ROUTE – reads local data.json and exposes it as an API
// Purpose: provide structured content (Approach / Example / Requirements)

import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  // 1) Resolve path to public/data.json
  const filePath = path.join(process.cwd(), "public", "data.json");

  // 2) Read and parse JSON (server-side only)
  const raw = await readFile(filePath, "utf-8");
  const data = JSON.parse(raw);

  // 3) Pick what the UI needs first (Approach section)
  const approach = data.sections.find(s => s.id === "approach");

  // 4) Send clean JSON to client
  return Response.json({
    approach,          // used below video first
    allSections: data.sections // future navigation / left bar
  });
}

