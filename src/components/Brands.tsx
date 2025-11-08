import Image from "next/image";

export default function Brands() {
  const brandLogos = [
    { src: "/assets/coinbase_icon.png.svg", alt: "Coinbase" },
    { src: "/assets/opensea_icon.png.svg", alt: "OpenSea" },
    { src: "/assets/disney__icon.jpeg.svg", alt: "Disney" },
    { src: "/assets/crypto-logo-png.png.svg", alt: "Crypto" },
    { src: "/assets/Icon.png.svg", alt: "Icon" },
    { src: "/assets/Icon.jpeg.svg", alt: "Icon" },
  ];

  return (
    <section className="absolute left-[372px] top-[1814px] w-[984px] h-[255px] z-10 overflow-visible" data-node-id="40:184">
      {/* Rectangle 14 - Background */}
      <div className="absolute bg-white rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] w-[984px] h-[255px] left-0 top-0 z-0 overflow-visible" data-node-id="40:184">
        {/* Title */}
        <div className="absolute left-[355px] top-[24px] text-center z-10" data-node-id="40:189">
          <h2 className="text-[26px] font-semibold text-[#020624]">
            🦄 For Brands & Sponsors
          </h2>
        </div>
        
        {/* Description */}
        <p className="absolute left-[259px] top-[60px] text-[16px] text-black leading-[20px] tracking-[-0.16px] w-[449px] text-center z-10" data-node-id="40:205">
          Fund creative battles, set themes & prizes 🎁 and get authentic content
        </p>
        
        {/* Button - positioned according to Figma */}
        <div className="absolute left-[412px] top-[160px] z-10" data-node-id="40:201">
          <button className="bg-[#1fc152] text-white px-6 py-3 rounded-[48px] font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity">
            Book a Demo
          </button>
        </div>
        
        {/* Small text */}
        <p className="absolute left-[425px] top-[148px] text-[14px] text-[#799cbc] text-center z-10" data-node-id="40:203">
          15 minute call will explain everything
        </p>

        {/* image 10 - Financial graph card (top-right, overlapping) */}
        {/* According to design: top-right overlapping card, tilted clockwise, top-right extends beyond main card */}
        {/* Positioned in top-right area, extending beyond top and right edges */}
        {/* No icons on image 10 according to design */}
        <div className="absolute left-[700px] top-[-40px] w-[211px] h-[118px] z-10 rotate-[5deg] overflow-visible" data-node-id="40:186">
          <Image
            src="/assets/image 10.png"
            alt=""
            width={211}
            height={118}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* image 11 - Social media post card (bottom-left, overlapping) */}
        {/* According to design: bottom-left overlapping card, tilted counter-clockwise, bottom-left extends beyond main card */}
        {/* Positioned in bottom-left area, extending beyond bottom and left edges */}
        {/* Icons only on top of image 11 */}
        {/* Moved up slightly: from top-[150px] to top-[120px] */}
        <div className="absolute left-[-50px] top-[120px] w-[181px] h-[177px] z-10 rotate-[-5deg] overflow-visible" data-node-id="40:193">
          <div className="w-[206px] h-[216px]">
            <Image
              src="/assets/image 11.png"
              alt=""
              width={206}
              height={216}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          {/* Icons on image 11 - top-left and top-right corners only (no icons at bottom) */}
          {/* Blue 'C' icon (Coinbase-like) - top-left corner of image 11 */}
          <div className="absolute left-[10px] top-[10px] w-[30px] h-[30px] z-20 relative">
            <Image src="/assets/coinbase_icon.png.svg" alt="C" fill className="object-contain" />
          </div>
          {/* Orange fox head icon - top-right corner of image 11 */}
          <div className="absolute right-[10px] top-[10px] w-[30px] h-[30px] z-20 relative">
            <Image src="/assets/Icon.jpeg.svg" alt="Fox" fill className="object-contain" />
          </div>
        </div>

        {/* Standalone icons - positioned according to design */}
        {/* Facebook 'f' icon - above and to the right of fox head icon, near image 10 */}
        <div className="absolute left-[850px] top-[20px] w-[40px] h-[40px] z-20 relative" data-node-id="40:200">
          <Image src="/assets/Icon.jpeg.svg" alt="Facebook" fill className="object-contain" />
        </div>
        {/* Fox head icon - below Facebook icon, near image 10 */}
        <div className="absolute left-[850px] top-[60px] w-[40px] h-[40px] z-20 relative" data-node-id="40:201">
          <Image src="/assets/Icon.jpeg.svg" alt="Fox" fill className="object-contain" />
        </div>
        {/* Coinbase-like icon - above image 11, not below it */}
        <div className="absolute left-[20px] top-[80px] w-[40px] h-[40px] z-20 relative" data-node-id="40:202">
          <Image src="/assets/coinbase_icon.png.svg" alt="Coinbase" fill className="object-contain" />
        </div>
        {/* Fox head icon - below Coinbase icon, still above image 11 */}
        <div className="absolute left-[20px] top-[120px] w-[40px] h-[40px] z-20 relative" data-node-id="40:203">
          <Image src="/assets/Icon.jpeg.svg" alt="Fox" fill className="object-contain" />
        </div>
        {/* Fox head icon - left of "Book a Demo" button */}
        <div className="absolute left-[350px] top-[180px] w-[40px] h-[40px] z-20 relative" data-node-id="40:204">
          <Image src="/assets/Icon.jpeg.svg" alt="Fox" fill className="object-contain" />
        </div>

        {/* Gallery Grid - positioned absolutely relative to Rectangle 14 */}
        <div className="absolute left-0 top-[365px] grid grid-cols-4 gap-[16px] z-10">
          {/* Rectangle 22 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:230">
            <Image
              src="/assets/Rectangle 22.png"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 23 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:232">
            <Image
              src="/assets/Rectangle 23.png"
              alt="Gallery 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 24 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:234">
            <Image
              src="/assets/Rectangle 24.png"
              alt="Gallery 3"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 25 - Text Card with sarah.eth */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0066ff] via-[#004fff] to-[#0033ff] flex items-center justify-center" data-node-id="40:237">
            <p className="text-white text-2xl font-semibold opacity-20">sarah.eth</p>
          </div>
          {/* Rectangle 26 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:231">
            <Image
              src="/assets/Rectangle 26.png"
              alt="Gallery 5"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 27 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:233">
            <Image
              src="/assets/Rectangle 27.png"
              alt="Gallery 6"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 28 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:235">
            <Image
              src="/assets/Rectangle 28.png"
              alt="Gallery 7"
              fill
              className="object-cover"
            />
          </div>
          {/* Rectangle 29 */}
          <div className="relative w-[234px] h-[125px] rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity" data-node-id="40:236">
            <Image
              src="/assets/Rectangle 29.png"
              alt="Gallery 8"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Footer Logos - positioned absolutely relative to Rectangle 14 */}
        <div className="absolute left-0 top-[727px] flex items-center justify-center gap-12 z-10" data-node-id="40:245">
          <Image src="/assets/Group.svg" alt="" width={98} height={34} />
          <Image src="/assets/Group-1.svg" alt="" width={98} height={42} />
          <Image src="/assets/Group-2.svg" alt="" width={66} height={52} />
          <Image src="/assets/red_bull_logo.svg.svg" alt="Red Bull" width={209} height={33} />
          <Image src="/assets/g10.svg" alt="" width={44} height={44} />
          <Image src="/assets/epic_games_logo.svg.svg" alt="Epic Games" width={40} height={47} />
          <Image src="/assets/Vector.svg" alt="" width={98} height={52} />
        </div>
      </div>
    </section>
  );
}

