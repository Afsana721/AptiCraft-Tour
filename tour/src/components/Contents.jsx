"use client";

import { useEffect, useState } from "react";

// Loads data from server after page signals intent
// Page controls *when* this component becomes active

export default function Contents({ active }) {
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null); // State to hold any API error

  useEffect(() => {
    if (!active) return;

    const controller = new AbortController();

    // Load data ONLY from server (route.js)
    async function loadContent() {
      try {
        const res = await fetch("/api", { signal: controller.signal, cache: "no-store" });
        if (!res.ok) throw new Error(`API error ${res.status}`);
        const data = await res.json();
        setPayload(data);
      } catch (e) {
        setError(e.message);
      }
    }

    loadContent();

    return () => controller.abort();
  }, [active]);

  // Display error message if the API call failed
  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center text-red-500 bg-neutral-900 rounded-xl m-10">
        <h2 className="text-2xl font-bold mb-4">Data Loading Error</h2>
        <p className="text-lg">{error}</p>
        <p className="text-sm mt-2 text-red-300">
          *If this is a "not found" error, ensure 'approach.json' is in your top-level 'public' directory.*
        </p>
      </div>
    );
  }

  if (!payload) return null; // Still loading or active=false

  // Render one UI based on server response
  if (payload.type === "approach") return <ApproachUI data={payload.data} />;
  if (payload.type === "examples") return <ExamplesUI data={payload.data} />;
  if (payload.type === "requirements") return <RequirementsUI data={payload.data} />;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center text-yellow-500">
      <p>Error: Unknown payload type received from API.</p>
    </div>
  );
}

// -------- UI blocks (separate layouts) --------
function ApproachUI({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-16 text-neutral-200 bg-neutral-900 rounded-xl m-10 shadow-2xl">
      {/* Title */}
      <header className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-white">{data.title}</h2>
        <div className="w-16 h-1 bg-neutral-600" />
      </header>

      {/* Media */}
      {(data.media?.heroImage || data.media?.video) && (
        <div className="space-y-6">
          {data.media?.heroImage && (
            // Using placeholder image URL since external images are not guaranteed
            <img
              src={`https://placehold.co/900x450/333333/ffffff?text=Image+Placeholder:+${encodeURIComponent(data.title)}`}
              alt="approach visual placeholder"
              className="w-full rounded-xl border border-neutral-800"
            />
          )}
          {data.media?.video && (
            <div className="bg-neutral-800 p-8 rounded-xl text-center">
                <p>Video Placeholder: {data.media.video}</p>
            </div>
          )}
        </div>
      )}

      {/* Overview */}
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg leading-relaxed">{data.overview?.description}</p>
        <p className="text-sm leading-relaxed text-neutral-400">{data.overview?.technicalContext}</p>
      </div>

      {/* Software categories */}
      {data.softwareCategories && (
        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(data.softwareCategories).map(([key, item]) => (
            <div key={key} className="space-y-3 border-l-4 border-amber-600 pl-6 bg-neutral-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-500 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              <p className="leading-relaxed text-neutral-300">{item.description}</p>
              {(item.components || item.tools) && (
                <ul className="list-disc ml-5 space-y-1 text-neutral-400">
                  {(item.components || item.tools || []).map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Roles */}
      {data.rolesInDevelopment && (
        <div className="max-w-3xl space-y-3 pt-6 border-t border-neutral-700">
          <h3 className="text-xl font-semibold text-white">Roles in Development</h3>
          <p className="leading-relaxed text-neutral-300">{data.rolesInDevelopment.description}</p>
          <p className="text-sm text-neutral-400">{data.rolesInDevelopment.note}</p>
        </div>
      )}
    </section>
  );
}

function ExamplesUI({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 bg-neutral-900 rounded-xl m-10">
      <h2 className="text-4xl text-white font-bold">{data.title}</h2>
      <p className="text-neutral-300 mt-4">Example content goes here.</p>
    </section>
  );
}

function RequirementsUI({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 bg-neutral-900 rounded-xl m-10">
      <h2 className="text-4xl text-white font-bold">{data.title}</h2>
      <p className="text-neutral-300 mt-4">Requirements content goes here.</p>
    </section>
  );
}