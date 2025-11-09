import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none z-0" data-node-id="40:12">
      {/* Group 1171277150 - Background gradient elements (furthest back) */}
      <div 
        className="absolute h-[1345px] left-[-454.65px] top-[-66px] w-[2331.65px] z-[-1]"
        data-node-id="40:15"
      >
        <div className="relative w-full h-full opacity-60">
          <Image
            src="/assets/Group 1171277150.png"
            alt="Background gradient"
            width={2331}
            height={1345}
            className="object-contain"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Group 1171277162 - Main background with glass cards (behind main content) */}
      <div 
        className="absolute left-[-2px] top-[-4px] w-[1728px] h-[1027px] z-0"
        data-node-id="40:12"
      >
        <div className="relative w-full h-full opacity-60">
          <Image
            src="/assets/Group 1171277162.png"
            alt="Background"
            width={1728}
            height={1027}
            className="object-contain"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

