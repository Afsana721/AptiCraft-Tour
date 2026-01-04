"use client";

import React from "react";

// FIX: Removed 'next/link' import to prevent compilation errors in this environment
// import Link from "next/link"; 

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }} className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        src="/create.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: "none",
          zIndex: 0,
           opacity: 0.7,
        }}
        className="absolute inset-0 w-full h-full object-cover z-0 " />

      {/* FIX: Dark Overlay for better text visibility (add a subtle black layer over the video) */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      ></div>

      {/* Navigation Bar */}
      <nav
        className="absolute z-10 flex items-center gap-7 top-[88px] right-[180px]"
        style={{
          position: "absolute",
          top: 88,
          right: 180,
          zIndex: 10,
          display: "flex",
          gap: 28,
          alignItems: "center",
        }}
      >
        {["Home", "Register", "Login", "Room", "Logout"].map((label) => (
          // FIX: Replaced Link component with standard <a> tag
          <a
            key={label}
            href={label === "Home" ? "#" : `/${label.toLowerCase()}`}
            style={{
              // FIX: Changed to white for better contrast
              color: "#E48400", 
              textDecoration: "none",
              fontSize: 26,
              fontWeight: 300,
              textShadow: "0 0 5px rgba(0,0,0,0.8)",
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Main Title - AptiCraft Tour */}
      <h1
        className="absolute z-10 m-0 text-5xl font-light text-white tracking-[-0.05em] top-[12%] right-[10%]"
        style={{
          position: "absolute",
          top: "12%",
          right: "45%",
          zIndex: 10,
          margin: 0,
          fontSize: 54,
          fontWeight: 300,
          // FIX: Changed to white for better contrast
          color: "#660000", 
          letterSpacing: "-0.09em",
          textShadow: "5 9 2px rgba(235, 227, 127, 0.7)",
        }} >
        AptiCraft
      </h1>

      {/* Sidebar Section */}
      <section
        className="absolute z-10 w-[420px] px-[26px] py-[28px] rounded-[18px] font-inter top-[5%] left-8 bg-transparent"
        style={{
          position: "absolute",
          top: "5%",
          left: 32,
          zIndex: 10,
          width: 420,
          padding: "28px 26px",
          borderRadius: 18,
          fontFamily: "Inter, Segoe UI, system-ui, sans-serif",
        }}>
        <div style={{ fontSize: 30, fontWeight: 500, marginBottom: 22, color: "#ffffff", textShadow: "0 0 4px rgba(0,0,0,0.6)" }}>
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
                borderLeft: "2px solid #ffffff", // FIX: Changed border color for contrast
                color: "#ffffff", // FIX: Changed text color for contrast
                textShadow: "0 0 4px rgba(0,0,0,0.6)",
              }} >
              {item}
            </div>
            <div style={{ marginTop: 8, paddingLeft: 12, display: "none" }} />
          </div>
        ))}
      </section>
      
            {/* Center Text Section (Below AptiCraft title) */}
      <section
        style={{
          position: "absolute",
          left: "50%",
          top: "28%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 720,
          zIndex: 20,
        }}
      >
        <div style={{ padding: "0 24px" }}>
          <p
            style={{
              color: "#FEFEFA",
              fontSize: "1.75rem",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: 18,
              textShadow:
                "0 1px 1px rgba(235,215,36,.7), 0 -1px 1px rgba(230,217,217,.9)",
            }}
          >
            Software & Web Empowering
          </p>

          <div style={{ textAlign: "left" }}>
            <p style={{ color: "#FEFEFA", fontSize: 18, fontWeight: 200, marginBottom: 14 }}>
              Software enables systems to manage data, memory, and operations beyond manual or written processes.
            </p>
            <p style={{ color: "#FEFEFA", fontSize: 18, fontWeight: 200, marginBottom: 14 }}>
              Software development defines how these systems are designed, built, secured, and maintained using modern technologies.
            </p>
            <p style={{ color: "#FEFEFA", fontSize: 18, fontWeight: 200 }}>
              Web development delivers these capabilities over the internet, ensuring accessibility, reliability, and responsible use at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Lazy-loaded Section AFTER video ===== */}
      {/* ===== Lazy-loaded Section AFTER video ===== */}
      <div style={{ marginTop: '130vh', position: 'relative', zIndex: 5 }}>
        <LazyApproachSection />
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Lazy Approach Section
   - Appears only after full video viewport
   - Clean, non-overlapping layout
--------------------------------------------------- */
function LazyApproachSection() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!visible) return;
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json.sections?.[0] || null))
      .catch(() => null);
  }, [visible]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '40px 20px 40px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {data && (
        <div style={{ maxWidth: 1100, width: '100%' }}>
          <h2
            style={{
              position: 'absolute',
              top: '8%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              color: '#ffffff',
              fontSize: 42,
              textAlign: 'center'
            }}
          >
            {data.title}
          </h2>

          <img
            src={data.image}
            alt={data.title}
            style={{
              width: '100%',
              height: 520,
              objectFit: 'cover',
              borderRadius: 18,
              marginBottom: 60
            }}
          />

          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            {data.topics.map((t, i) => (
              <p
                key={i}
                style={{
                  marginBottom: 32,
                  fontSize: 18,
                  lineHeight: 1.9,
                  color: '#232c22'
                }}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

