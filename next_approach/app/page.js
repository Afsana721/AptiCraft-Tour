import Image from "next/image";

export default function Home() {
  return (
<div className="flex min-h-screen items-start justify-center bg-[#060606] font-sans text-white">
  <div className="mt-20 max-w-6xl rounded-2xl  p-10 
  text-center backdrop-blur-md shadow-2xl" style={{ marginTop: '200px' }}>
    <h1 className="text-5xl font-extrabold tracking-tight text-white">
      Welcome to AptiCraft Tour
    </h1>
    <p className="mt-20 text-lg text-gray-300 leading-relaxed" >
      A Timeline of South Asian History — Dynasties, Rulers, and Key Events
    </p>
    <div className="mt-8 flex justify-center gap-4 text-sm text-gray-400">
      <span className="rounded-full border border-white/20 px-4 py-2">History</span>
      <span className="rounded-full border border-white/20 px-4 py-2">Culture</span>
      <span className="rounded-full border border-white/20 px-4 py-2">Timeline</span>
    </div>
  </div>
</div>

  );
}
