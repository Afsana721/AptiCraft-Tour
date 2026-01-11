import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl p-2 text-center"> 
        <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to AptiCraft Tour!
        </h1> 
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          A Timeline of South Asian History: Dynasties, Rulers and Key Events. 
        </p>
      </div>
    </div>
  );
}
