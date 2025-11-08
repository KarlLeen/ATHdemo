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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#020624] mb-4">
              🦄 For Brands & Sponsors
            </h2>
            <p className="text-lg text-black mb-6">
              Fund creative battles, set themes & prizes 🎁 and get authentic content
            </p>
            <button className="bg-[#1fc152] text-white px-6 py-3 rounded-[48px] font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity">
              Book a Demo
            </button>
            <p className="text-sm text-[#799cbc] mt-4">15 minute call will explain everything</p>
          </div>

          {/* Brand Logos */}
          <div className="flex items-center justify-center gap-8 flex-wrap mt-12">
            {brandLogos.map((brand, index) => (
              <div key={index} className="w-12 h-12 relative">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              "/assets/Rectangle22.png",
              "/assets/Rectangle23.png",
              "/assets/Rectangle24.png",
              "/assets/Rectangle26.png",
              "/assets/Rectangle27.png",
              "/assets/Rectungle28.png",
              "/assets/Rectangle29.png",
            ].map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Footer Logos */}
          <div className="flex items-center justify-center gap-12 mt-12 flex-wrap">
            <Image src="/assets/Group.svg" alt="" width={98} height={34} />
            <Image src="/assets/Group-1.svg" alt="" width={98} height={42} />
            <Image src="/assets/Group-2.svg" alt="" width={66} height={52} />
            <Image src="/assets/red_bull_logo.svg.svg" alt="Red Bull" width={209} height={33} />
            <Image src="/assets/g10.svg" alt="" width={44} height={44} />
            <Image src="/assets/epic_games_logo.svg.svg" alt="Epic Games" width={40} height={47} />
            <Image src="/assets/Vector.svg" alt="" width={98} height={52} />
          </div>
        </div>
      </div>
    </section>
  );
}

