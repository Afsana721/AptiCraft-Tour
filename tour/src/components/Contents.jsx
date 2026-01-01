// components/Contents.jsx
// CLIENT COMPONENT – fetches data from API and sends it up to Home

"use client";

import { useEffect } from "react";

export default function Contents({ onSend }) {
  useEffect(() => {
    const controller = new AbortController();

    async function loadContent() {
      try {
        // 1) Call server API
        const res = await fetch("/api", { signal: controller.signal });
        const data = await res.json();

        // 2) Send data UP to Home (state owner)
        onSend(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Content fetch failed", err);
        }
      }
    }

    loadContent();

    // 3) Cleanup if user navigates away
    return () => controller.abort();
  }, [onSend]);

  // 4) This component does not render UI
  // Home decides where and how to show content
  return null;
}

// Notes:
// - Fetch happens once on mount
// - No rendering here (performance)
// - Data flows: API → Contents → Home
