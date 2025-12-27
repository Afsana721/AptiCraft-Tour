import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background: Marzipano demo as iframe */}
      <iframe
        src="https://www.marzipano.net/demos/hotspot-rect/"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 0,
          opacity: 0.9,
        }}
        allow="fullscreen"
      />

      {/* NAV (right + down) */}
      <nav
        style={{
          position: "absolute",
          top: 98,
          left: 250,
          zIndex: 10,
          display: "flex",
          gap: 22,
          alignItems: "center",
          padding: "14px 18px",
          borderRadius: 14,
          background: "rgba(175, 196, 236, 0.75)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        {["Home", "Register", "Login", "Room", "Logout"].map((label) => (
          <Link
            key={label}
            href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
            style={{
              color: "#630f0fff",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* TITLE (middle-right) */}
      <h1
        style={{
          position: "absolute",
          top: "32%",
          right: "10%",
          zIndex: 10,
          margin: 0,
          fontSize: 42,
          fontWeight: 900,
          color: "#f5f0abff",
          letterSpacing: "-0.01em",
          textShadow: "0 6px 18px rgba(82, 6, 6, 0.1)",
        }}
      >
        AptiCraft Tour
      </h1>
    </div>
  );
}
