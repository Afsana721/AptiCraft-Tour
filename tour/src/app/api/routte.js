import { NextResponse } from "next/server";

// This file is now located at app/api/route.js, handling requests to /api
export async function GET(request) { 
  console.log("SERVER: API Route /api hit successfully.");
  
  // Read a query parameter from the URL to demonstrate handling the request object
  const { searchParams } = new URL(request.url);
  const requestedSection = searchParams.get('section') || 'DefaultSection';
  
  console.log(`SERVER: Client requested section: ${requestedSection}`);

  // The response now confirms which parameter the server received
  return NextResponse.json({
    type: "approach",
    data: {
      title: "Our Approach",

      media: {
        heroImage: true,
        video: null
      },

      overview: {
        description: "We follow a structured, user-first software development approach focused on clarity, performance, and maintainability.",
        technicalContext: `This object was dynamically requested for section '${requestedSection}'. The server successfully read the client's query parameter.`
      },

      softwareCategories: {
        frontend: {
          description: "User interfaces, accessibility, and client-side rendering.",
          tools: ["React", "Next.js", "Tailwind CSS"]
        },
        backend: {
          description: "Server logic, APIs, and data orchestration.",
          tools: ["Node.js", "Python", "PostgreSQL"]
        }
      },

      rolesInDevelopment: {
        description: "Planning, implementation, testing, and deployment handled collaboratively.",
        note: "Roles may overlap depending on project scope."
      }
    }
  });
}