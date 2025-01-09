"use client"
import HeroContent from "@/components/HeroContent";
import Image from "next/image";
import { redirect } from 'next/navigation'


export default function Home() {

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <div className="w-full flex justify-evenly items-center gap-4 h-[80vh] ">
          <button className="text-4xl" onClick={() => {
            redirect("/guest")
          }} >
            Use as Guest
          </button>
          <button className="text-4xl bg-blue-400 p-2 text-white rounded-2xl">
            Log In
          </button>
        </div>
        <HeroContent />
      </div>
    </main>
  )
}
