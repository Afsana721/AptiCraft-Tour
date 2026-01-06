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
    <section className="space-y-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold">{data.title}</h2>

      {/* Media placeholders (image / video after title) */}
      {data.media?.heroImage && (
        <img src={data.media.heroImage} alt="approach visual" className="w-full rounded-lg" />
      )}
      {data.media?.video && (
        <video src={data.media.video} controls className="w-full rounded-lg" />
      )}

      {/* Overview */}
      <div className="space-y-3">
        <p>{data.overview?.description}</p>
        <p className="text-neutral-600">{data.overview?.technicalContext}</p>
      </div>

      {/* Software categories */}
      {data.softwareCategories && (
        <div className="space-y-4">
          {Object.entries(data.softwareCategories).map(([key, item]) => (
            <div key={key} className="border-l pl-4">
              <h3 className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
              <p>{item.description}</p>
              {item.components && (
                <ul className="list-disc ml-5">
                  {item.components.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              )}
              {item.tools && (
                <ul className="list-disc ml-5">
                  {item.tools.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Roles */}
      {data.rolesInDevelopment && (
        <div className="space-y-2">
          <h3 className="font-medium">Roles in Development</h3>
          <p>{data.rolesInDevelopment.description}</p>
          <p className="text-neutral-600">{data.rolesInDevelopment.note}</p>
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
