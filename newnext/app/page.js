import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-[#060606] font-sans text-white">
      <div className="mt-[100px] max-w-6xl rounded-2xl  p-10 
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

          <div className="mt-[8px] mb-[8px] text-[18px] md:text-[20px] italic text-[#E8D7B8] tracking-wide"
            style={{ textShadow: "0 0 4px rgba(212,175,55,0.2)" }}>
            Dynasties, Rulers, and Key Events
          </div>

          <div className="mt-4 mx-auto w-[60%] h-[1px]"
            style={{
              borderBottom: "0.5px solid rgba(212,175,55,0.35)",
              boxShadow: "0 0 4px rgba(212,175,55,0.25)"
            }}>
          </div>
        </div>

        <div className="bg-[#000000] mt-[10px] flex justify-center gap-[8px] px-[8px] py-[8px] text-[24px] text-[#893F45] hover:text-[#CFB53B]
          border-[2px] border-[#343434]/40 px-[4px] py-[4x] hover:border-[#00401A]/50 rounded-full ">
          <span className="rounded-full border-[2px] border-[#FCF75E]/40 px-[4px] py-[4x] hover:border-[#FFFFE0]/80">History</span>
          <span className="rounded-full border-[2px] border-[#FCF75E]/40  px-[4px] py-[4x] hover:border-[#FFFFE0]/80 ">Culture</span>
          <span className="rounded-full border-[2px] border-[#FCF75E]/40  px-[4px] py-[4x] ">Timeline</span>
        </div>



        {/* BOOK SECTION (PLACED UNDER CARD, NOT SIDE) */}
        <section className="mt-[40px] w-[1200px] px-[10px]">
          {/* INITIAL BOOK-LAYOUT SECTION (STATIC, EMPTY DATA) */}
          <div className="flex flex-col md:flex-row gap-8 h-[800px] mt-[20px] ">

            {/* LEFT : IMAGE PLACEHOLDER */}
            <div className="flex-1 min-h-[260px] rounded-xl border border-[#CFB53B]/20 bg-[#060606] flex items-center justify-center text-[#555D50]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-b7xC1u4bcIQNK-2uu1W66L0h7Rg-Xv0Jg&s"
                alt="South Asian history"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* RIGHT : INFO PLACEHOLDER */}
            <div className="flex-1 text-left">
              <h3 className="text-[28px] font-serif text-[#F3E4C6] mb-3"
                style={{ textShadow: "0 0 4px rgba(212,175,55,0.25)" }}>
                Title Placeholder
              </h3>
              <p className="text-[18px] text-[#E8D7B8] leading-relaxed">
                Description text will come here from the server. This box will later animate like a page turn on scroll or click.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}

