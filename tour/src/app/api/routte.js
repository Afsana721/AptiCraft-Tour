import { NextResponse } from 'next/server';
// FIX: Switched to the absolute path alias (@/public) which is standard in Next.js 
// for module imports, resolving path dependency issues common with relative paths.
import staticData from '@/public/approach.json'; 

export async function GET() {
  console.log("[API] /api GET hit (using direct JSON import with absolute path)");
  
  // Verify the data was loaded correctly upon import
  if (!staticData || typeof staticData !== 'object' || Array.isArray(staticData)) {
    console.error("[API] Data failed to load via import. Check public/approach.json existence and validity.");
    return NextResponse.json(
      { error: "approach.json file failed to load. Please ensure it exists, is valid JSON, and not an array. Check next.config.js for path aliases if needed." },
      { status: 500 }
    );
  }
  
  // Send the pre-parsed static data to the client
  return NextResponse.json(staticData);
}