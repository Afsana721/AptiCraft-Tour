"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <iframe
        src="https://panoraven.com/en/embed/5yvHJSL8MJ"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 0,
          opacity: 0.9,
        }}
        allowFullScreen
      />

      <nav
        style={{
          position: "absolute",
          top: 98,
          right: 180,
          zIndex: 10,
          display: "flex",
          gap: 28,
          alignItems: "center",
        }}
      >
        {["Home", "Register", "Login", "Room", "Logout"].map((label) => (
          <Link
            key={label}
            href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
            style={{
              color: "#530606",
              textDecoration: "none",
              fontSize: 26,
              fontWeight: 300,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      <h1
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          zIndex: 10,
          margin: 0,
          fontSize: 44,
          fontWeight: 300,
          color: "#530909",
          letterSpacing: "-0.05em",
        }}
      >
        AptiCraft Tour
      </h1>

      <section
        style={{
          position: "absolute",
          top: "18%",
          left: 32,
          zIndex: 10,
          width: 420,
          padding: "28px 26px",
          borderRadius: 18,
          fontFamily: "Inter, Segoe UI, system-ui, sans-serif",
          background: "transparent",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 500, marginBottom: 22 }}>
          Software Development
        </div>

        
        {["Our Approach", "Example Application", "Requirements"].map((item) => (
          <div key={item} style={{ marginBottom: 18 }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 500,
                cursor: "pointer",
                paddingLeft: 8,
                borderLeft: "2px solid #530909",
              }}
            >
              {item}
            </div>
            <div style={{ marginTop: 8, paddingLeft: 12, display: "none" }} />
          </div>
        ))}
      </section>
    </div>
  );
}
