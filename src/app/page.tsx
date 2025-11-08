import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[1167px] top-[753px] w-[3679.99px] h-[2661.11px] opacity-30">
          <Image
            src="/assets/Group.svg"
            alt=""
            fill
            className="object-contain rotate-180 scale-y-[-1]"
          />
        </div>
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Brands />
    </div>
  );
}
