"use client"
import HeroContent from "@/components/HeroContent";
import Image from "next/image";
import { redirect,useRouter  } from 'next/navigation'



export default function Home() {
  const router = useRouter()

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <div className="w-full flex justify-evenly items-center gap-4 h-[85vh] ">
          <button className="text-4xl hover:scale-125 hover:bg-blue-400 hover:text-white duration-200 text-blue-400 border-blue-400 border-solid border-2 p-3 rounded-xl font-semibold" onClick={() => {
            router.push("/guest")
          }} >
            Use as Guest
          </button>
          <button className="text-4xl hover:scale-125 bg-blue-400 p-3 font-semibold text-white rounded-2xl">
            Log In or Sign Up
          </button>
        </div>
        <HeroContent />
      </div>
    </main>
  )
}
