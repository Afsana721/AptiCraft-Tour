import { Geist, Geist_Mono } from "next/font/google";

// Fonts already handled by Next.js font loader

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind already enabled via Next setup */}

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Three.js */}
        <script
          src="https://unpkg.com/three@0.158.0/build/three.min.js"
          defer
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#060606] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
