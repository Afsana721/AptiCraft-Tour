"use client";

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
        className="absolute z-10 flex items-center gap-7 top-[98px] right-[180px]"
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
          // FIX: Replaced Link component with standard <a> tag
          <a
            key={label}
            href={label === "Home" ? "#" : `/${label.toLowerCase()}`}
            style={{
              // FIX: Changed to white for better contrast
              color: "#ffffff", 
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
        className="absolute z-10 m-0 text-5xl font-light text-white tracking-[-0.05em] top-[30%] right-[10%]"
        style={{
          position: "absolute",
          top: "25%",
          right: "45%",
          zIndex: 10,
          margin: 0,
          fontSize: 54,
          fontWeight: 300,
          // FIX: Changed to white for better contrast
          color: "#ffffff", 
          letterSpacing: "-0.08em",
          textShadow: "0 0 8px rgba(0,0,0,0.8)",
        }}
      >
        AptiCraft
      </h1>

      {/* Sidebar Section */}
      <section
        className="absolute z-10 w-[420px] px-[26px] py-[28px] rounded-[18px] font-inter top-[18%] left-8 bg-transparent"
        style={{
          position: "absolute",
          top: "18%",
          left: 32,
          zIndex: 10,
          width: 420,
          padding: "28px 26px",
          borderRadius: 18,
          fontFamily: "Inter, Segoe UI, system-ui, sans-serif",
        }}
      >
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
              }}
            >
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
          left: "50%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 672,
          zIndex: 20,
          pointerEvents: "auto",
        }} >
        <div 
          className="px-8 py-6 mx-auto"
          style={{ marginTop: 380 }} >
          
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
    </div>
  );
}