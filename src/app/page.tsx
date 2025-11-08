import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="relative w-[1728px] h-[2692px] bg-white overflow-visible mx-auto" style={{ minHeight: '2692px' }}>
      {/* Background Group 1171277162 */}
      <Background />

      {/* Decorative Images */}
      <div className="absolute left-[142px] top-[179px] w-[172px] h-[172px] rotate-[344.461deg] z-10" data-node-id="40:39">
        <Image
          src="/assets/Rectangle 6.png"
          alt=""
          width={172}
          height={172}
          className="object-cover rounded-[8px]"
        />
      </div>
      <div className="absolute left-[1257px] top-[212px] w-[137px] h-[137px] rotate-[29.46deg] blur-[0.5px] z-10" data-node-id="40:40">
        <Image
          src="/assets/Rectangle 7.png"
          alt=""
          width={137}
          height={137}
          className="object-cover rounded-[8px]"
        />
      </div>
      <div className="absolute left-[1371px] top-[613px] w-[140px] h-[140px] rotate-[151.001deg] scale-y-[-1] blur-[2px] z-10" data-node-id="40:41">
        <Image
          src="/assets/Rectangle 8.png"
          alt=""
          width={140}
          height={140}
          className="object-cover rounded-[8px]"
        />
      </div>

      {/* Main content - above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Brands />
      </div>
    </div>
  );
}
