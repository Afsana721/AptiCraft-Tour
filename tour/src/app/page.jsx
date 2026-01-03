"use client";

import React from "react";

// FIX: Removed 'next/link' import to prevent compilation errors in this environment
// import Link from "next/link"; 

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }} className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        src="/115543-704906258_tiny.mp4"
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
        className="text-center"
        style={{
          position: "absolute",
          left: "60%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 672,
          zIndex: 20,
          pointerEvents: "auto",
        }} >
        <div 
          className="px-8 py-6 mx-auto"
          style={{}} >
          
          {/* FIX: Targeted changes for the requested line: Explicit white color and refined embossing shadow */}
          <p 
            className="uppercase tracking-widest mb-4 font-extrabold" 
            style={{ 
                // Explicitly set color to white and font size/weight using style
                color: "#FEFEFA",
                fontSize: "1.75rem", // Larger font size (like Tailwind's text-4xl)
                fontWeight: 400, // Extrabold weight
                // Refined shadow for a subtle, chiseled/embossed white effect
                 textShadow: "0 1px 1px rgba(235, 215, 36, 0.7), 0 -1px 1px rgba(230, 217, 217, 0.9)" 
            }} >
            Software & Web Empowering
          </p>
          
          <p className="text-2xl text-white mb-4 font-light" 
          style={{ color: "#FEFEFA", marginTop: "16px", fontSize: "18px", fontWeight: "200", textShadow: "0 0 5px rgba(36, 189, 161, 0.6)" }}>
            Software enables systems to manage data, memory, and operations beyond manual or written processes.
          </p>
          <p className="text-2xl text-white mb-4 font-light" style={{ color: "#FEFEFA", marginTop: "16px", fontSize: "18px", fontWeight: "200" }}>
            Software development defines how these systems are designed, built, secured, and maintained using modern technologies.
          </p>
          <p className="text-2xl text-white font-light" style={{ color: "#FEFEFA", marginTop: "16px", fontSize: "18px", fontWeight: "200"  }}>
            Web development delivers these capabilities over the internet, ensuring accessibility, reliability, and responsible use at scale.
          </p>
        </div>
      </section>

            {/* ===== Lazy-loaded Section AFTER video ===== */}
      <div style={{ marginTop: '160vh' }}>
        <LazyApproachSection />
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Lazy Approach Section
   - Appears only when user scrolls past video
   - Will later fetch JSON + images from server
--------------------------------------------------- */
function LazyApproachSection() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#fdf6f6ff',
        padding: '120px 60px',
        color: '#ffffff'
      }}
    >
      {!visible && (
        <div style={{ opacity: 0.4 }}>Scroll to load content…</div>
      )}

      {visible && (
        <div>
          {/* FIRST TOPIC: Our Approach (static test, JSON later) */}
          <h2 style={{ fontSize: 36, marginBottom: 24 }}>
            Our Approach
          </h2>

          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Image (from JSON later) */}
            <img
              src="/img.png"
              alt="Our Approach"
              style={{
                width: 420,
                maxWidth: '100%',
                borderRadius: 16,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
              }}
            />

            {/* Text content */}
            <p style={{ maxWidth: 520, lineHeight: 1.7, fontSize: 18 }}>
              This section loads only after the video when the user scrolls.
              Next step: replace this static content with server-driven JSON
              (title, description, images) fetched inside useEffect.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

