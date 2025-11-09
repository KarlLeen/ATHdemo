import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero Content - Group 1171277151 */}
      <div className="absolute left-1/2 top-[433px] -translate-x-1/2 z-10" data-node-id="40:23">
        {/* Title */}
        <h1 className="absolute left-1/2 top-0 -translate-x-1/2 text-[36px] font-semibold text-[#020d5a] text-center leading-tight tracking-[-1.08px] whitespace-pre" data-node-id="40:24">
          Where Audio Meets Art.
          <br />
          Where Creators Meet Sponsors.
        </h1>
        
        {/* Subtitle */}
        <p className="absolute left-1/2 top-[96px] -translate-x-1/2 text-[20px] font-medium text-[#020d5a] text-center leading-[28px] tracking-[-0.4px] whitespace-pre" data-node-id="40:25">
          Transform podcasts into visual experiences.
          <br />
          Run brand battles. Build global audiences
        </p>

        {/* CTA Buttons - Group 1171277149 - Frame 3 and Frame 4 */}
        <div className="absolute left-1/2 top-[176px] -translate-x-1/2 flex items-center justify-center gap-[12px] z-10" data-node-id="40:26">
          {/* Frame 3 - I'm a Creator */}
          <button 
            className="flex items-center justify-center gap-[12px] pl-[16px] pr-[20px] py-[16px] rounded-[48px] text-white text-[20px] font-semibold leading-[28px] tracking-[-0.4px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity" 
            data-node-id="40:27"
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 215 60\\' xmlns=\\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(10.75 0 0 3 107.5 30)\\\'><stop stop-color=\\\'rgba(0,14,84,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,9,58,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}
          >
            <div className="flex items-center pl-0 pr-[10px] py-0" data-node-id="40:28">
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:29">
                <Image src="/assets/Ellipse 1.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:30">
                <Image src="/assets/Ellipse 2.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:31">
                <Image src="/assets/Ellipse 3.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
            </div>
            <span className="relative shrink-0 text-center text-nowrap whitespace-pre" data-node-id="40:32">I&apos;m a Creator</span>
          </button>
          
          {/* Frame 4 - I'm a Sponsor */}
          <button 
            className="bg-white flex items-center justify-center gap-[8px] pl-[16px] pr-[20px] py-[16px] rounded-[48px] text-[#01093c] text-[20px] font-semibold leading-[28px] tracking-[-0.4px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity" 
            data-node-id="40:33"
          >
            <div className="flex items-center pl-0 pr-[10px] py-0" data-node-id="40:34">
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:35">
                <Image src="/assets/Icon.jpeg.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:36">
                <Image src="/assets/coinbase_icon.png.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
              <div className="mr-[-10px] size-[26px] relative shrink-0" data-node-id="40:37">
                <Image src="/assets/coinbase_icon.png-1.svg" alt="" width={26} height={26} className="block max-w-none size-full" />
              </div>
            </div>
            <span className="relative shrink-0 text-center text-nowrap whitespace-pre" data-node-id="40:38">I&apos;m a Sponsor</span>
          </button>
        </div>
      </div>

      {/* Group 1171277163 - Mic Icon */}
      <div className="absolute left-[555px] top-[269px] w-[56px] h-[56px] z-10" data-node-id="40:80">
        <Image
          src="/assets/Group 1171277163.png"
          alt="Microphone icon"
          width={56}
          height={56}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Desktop Monitor Icon - 🖥️ */}
      <div className="absolute left-[1026px] top-[775px] w-[219px] h-[105px] z-10" data-node-id="40:163">
        <Image
          src="/assets/🖥️.png"
          alt="Desktop monitor icon"
          width={219}
          height={105}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Podcast Card - Group 1171277157 */}
      <div className="absolute left-[171px] top-[703px] w-[407px] h-[113px] z-10" data-node-id="40:42">
        {/* Glass card background */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[10px] rounded-[8px] border border-white/20" />
        
        {/* Rectangle 9 - Podcast thumbnail */}
        <div className="absolute left-0 top-0 w-[102px] h-[102px] rounded-[8px] overflow-hidden">
          <Image
            src="/assets/Rectangle 8.png"
            alt="Podcast thumbnail"
            width={102}
            height={102}
            className="object-cover rounded-[8px]"
          />
        </div>
        
        {/* image 3 */}
        <div className="absolute left-[71px] top-[67px] w-[32px] h-[32px]">
          <Image
            src="/assets/image 3.png"
            alt=""
            width={32}
            height={32}
            className="rounded"
          />
        </div>
        
        {/* The Milk Road Show */}
        <h3 className="absolute left-[120px] top-0 text-[16px] font-semibold text-black leading-[28px] tracking-[-0.16px]">The Milk Road Show</h3>
        
        {/* Description */}
        <p className="absolute left-[120px] top-[28px] text-[14px] text-black leading-normal tracking-[-0.14px] w-[284px]">
          Your #1 podcast to turn your crypto curiosity into clarity. We discuss topics like: Blockchain Tech, Investing Strategies...
        </p>
        
        {/* Statistics - Group 1171277156 (215) */}
        <div className="absolute left-[291px] top-[796px] flex items-center gap-2" data-node-id="40:47">
          <Image src="/assets/copy-02.svg" alt="" width={20} height={20} />
          <span className="text-[14px] font-bold text-black">215</span>
        </div>
        
        {/* Statistics - Group 1171277155 (12.5K) */}
        <div className="absolute left-[364px] top-[796px] flex items-center gap-2" data-node-id="40:62">
          <Image src="/assets/play.svg" alt="" width={20} height={20} />
          <span className="text-[14px] font-bold text-black">12.5K</span>
        </div>
        
        {/* Statistics - Group 1171277154 (80) */}
        <div className="absolute left-[446px] top-[796px] flex items-center gap-2" data-node-id="40:58">
          <Image src="/assets/brush.svg" alt="" width={20} height={20} />
          <span className="text-[14px] font-bold text-black">80</span>
        </div>
        
        {/* Statistics - Group 1171277153 ($3.9K) */}
        <div className="absolute left-[511px] top-[796px] flex items-center gap-2" data-node-id="40:52">
          <Image src="/assets/sale-tag-02.svg" alt="" width={20} height={20} />
          <span className="text-[14px] font-bold text-black">$3.9K</span>
        </div>
      </div>
    </>
  );
}
