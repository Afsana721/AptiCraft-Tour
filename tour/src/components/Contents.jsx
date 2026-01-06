"use client";

import { useEffect, useState } from "react";

// Contents owns UI + data, renders ONLY the matched UI set

export default function Contents() {
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContent() {
      try {
        const res = await fetch("/api", { signal: controller.signal });
        const data = await res.json();
        setPayload(data); // only one dataset enters state
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    }

    loadContent();
    return () => controller.abort();
  }, []);

  if (!payload) return null;

  // ---- intent-based UI routing (only ONE mounts) ----
  if (payload.type === "approach") return <ApproachUI data={payload.data} />;
  if (payload.type === "examples") return <ExamplesUI data={payload.data} />;
  if (payload.type === "requirements") return <RequirementsUI data={payload.data} />;

  return null;
}

// -------- UI blocks (separate layouts, same container) --------
function ApproachUI({ data }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-16 text-neutral-200">
      {/* Title */}
      <header className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-white">{data.title}</h2>
        <div className="w-16 h-1 bg-neutral-600" />
      </header>

      {/* Media */}
      {(data.media?.heroImage || data.media?.video) && (
        <div className="space-y-6">
          {data.media?.heroImage && (
            <img
              src={data.media.heroImage}
              alt="approach visual"
              className="w-full rounded-xl border border-neutral-800"
            />
          )}
          {data.media?.video && (
            <video
              src={data.media.video}
              controls
              className="w-full rounded-xl border border-neutral-800"
            />
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
        <div className="grid gap-10">
          {Object.entries(data.softwareCategories).map(([key, item]) => (
            <div key={key} className="space-y-3 border-l border-neutral-800 pl-6">
              <h3 className="text-xl font-semibold text-white capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              <p className="leading-relaxed">{item.description}</p>
              {item.components && (
                <ul className="list-disc ml-5 space-y-1 text-neutral-400">
                  {item.components.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              )}
              {item.tools && (
                <ul className="list-disc ml-5 space-y-1 text-neutral-400">
                  {item.tools.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Roles */}
      {data.rolesInDevelopment && (
        <div className="max-w-3xl space-y-3 pt-6 border-t border-neutral-800">
          <h3 className="text-xl font-semibold text-white">Roles in Development</h3>
          <p className="leading-relaxed">{data.rolesInDevelopment.description}</p>
          <p className="text-sm text-neutral-400">{data.rolesInDevelopment.note}</p>
        </div>
      )}
    </section>
  );
}

function ExamplesUI({ data }) {
  return (
    <section>
      <h2>{data.title}</h2>
    </section>
  );
}

function RequirementsUI({ data }) {
  return (
    <section>
      <h2>{data.title}</h2>
    </section>
  );
}
