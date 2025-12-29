import Link from "next/link";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      <iframe
        src="https://app.cloudpano.com/tours/MMqLrAhy2oN?sceneId=tDK3oUsTeP"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          zIndex: 0,
          opacity: 0.9,
        }}
        allow="fullscreen" />

      
      <nav
        style={{
          position: "absolute",
          top: 98,
          right: 180,
          zIndex: 10,
          display: "flex",
          gap: 28,
          alignItems: "center",
          padding: "14px 18px",
          borderRadius: 14,
          // background: "rgba(175, 196, 236, 0.75)",
          // backdropFilter: "blur(6px)",
          // WebkitBackdropFilter: "blur(6px)",
        }}
      >
        {["Home", "Register", "Login", "Room", "Logout"].map((label) => (
          <Link
            key={label}
            href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
            style={{
              color: "#530606ff",
              textDecoration: "none",
              fontSize: 26,
              fontWeight: 200,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      
      <h1
        style={{
          position: "absolute",
          top: "32%",
          right: "10%",
          zIndex: 10,
          margin: 0,
          fontSize: 42,
          fontWeight: 200,
          color: "#530909ff",
          letterSpacing: "-0.09em",
          textShadow: "0 6px 18px rgba(226, 25, 11, 0.1)",
        }}
      >
        AptiCraft
      </h1>
<section
        style={{
          position: "absolute",
          top: "15%",
          left: 42,
          zIndex: 10,
          width: "380px",
          padding: "22px",
          // background: "rgba(215, 195, 255, 0.45)",
          borderRadius: 18,
          fontFamily: "Inter, Segoe UI, system-ui, sans-serif",
          color: "#13c9d6ff",
        }}
      >
        <div style={{ marginBottom: 18, fontSize: 28, fontWeight: 400 }}>
          Software Development
        </div>

        <div style={{ marginBottom: 16, fontSize: 22, lineHeight: 4.0 }}>
          Our Approach
        </div>

        <div style={{ marginBottom: 18, fontSize: 22, opacity: 0.9 }}>
          Example Development
        </div>
        <div style={{ marginBottom: 18, fontSize: 22, opacity: 0.9 }}>
          Scalable and efficient
        </div>
        <button
          style={{
            padding: "10px 18px",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            background: "#5a3fcf",
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
          }} >
          Explore
        </button>
      </section>
    </div>
  );
}
