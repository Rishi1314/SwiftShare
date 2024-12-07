import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">

        <Hero/>
      </div>
</main>
  );
}
