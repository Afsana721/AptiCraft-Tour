

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#060606] font-sans text-white">
      <div className="mt-40 max-w-6xl rounded-2xl  p-10 
        text-center backdrop-blur-md shadow-2xl" >
        <h1           className="text-[48px] font-bold tracking-tight text-[#000000] hover:text-[#3B3C36]"
          style={{
            textShadow: '0 0 0 #555D50, 1px 0 0 #555D50, -1px 0 0 #555D50, 0 1px 0 #555D50, 0 -1px 0 #555D50',
            paddingLeft: '1px'
          }}>
          Welcome to AptiCraft Tour
        </h1>
        <div className="mt-20 text-center">
          <div className="text-[32px] md:text-[38px] font-serif text-[#F3E4C6] tracking-wide"
            style={{ textShadow: "0 0 6px rgba(212,175,55,0.25)" }}>
            Timeline of South Asian History
          </div>

          <div className="mt-8 mb-8 text-[18px] md:text-[20px] italic text-[#E8D7B8] tracking-wide"
            style={{ textShadow: "0 0 4px rgba(212,175,55,0.2)" }}>
            Dynasties, Rulers, and Key Events
          </div>

          <div className="mt-4 mx-auto w-[60%] h-1"
            style={{
              borderBottom: "0.5px solid rgba(212,175,55,0.35)",
              boxShadow: "0 0 4px rgba(212,175,55,0.25)"
            }}>
          </div>
        </div>

        <div className="bg-[#000000] mt-10 flex justify-center gap-8 py-8 text-[24px] text-[#893F45] hover:text-[#CFB53B]
          border-2 border-[#343434]/40 hover:border-[#00401A]/50 rounded-full ">
          <span className="rounded-full border-2 border-[#FCF75E]/40 px-4 py-4 hover:border-[#FFFFE0]/80">History</span>
          <span className="rounded-full border-2 border-[#FCF75E]/40  px-4 py-4 hover:border-[#FFFFE0]/80 ">Culture</span>
          <span className="rounded-full border-2 border-[#FCF75E]/40  px-4 py-4 ">Timeline</span>
        </div>

        {/* BOOK SECTION (PLACED UNDER CARD, NOT SIDE) */}
        {/* BOOK SECTION */}
<section className="mt-20 w-full px-10">
  <div className="w-full h-105 rounded-xl border border-[#CFB53B]/20 bg-[#060606] overflow-hidden">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-b7xC1u4bcIQNK-2uu1W66L0h7Rg-Xv0Jg&s"
      alt="South Asian history"
      className="w-full h-full object-cover"
    />
  </div>
</section>
      </div>
    </div>

  );
}

