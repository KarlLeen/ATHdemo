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
            {/* Rectangle 22 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 22.png"
                alt="Gallery 1"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 23 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 23.png"
                alt="Gallery 2"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 24 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 24.png"
                alt="Gallery 3"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 25 - Text Card with sarah.eth */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity bg-gradient-to-br from-[#0066ff] via-[#004fff] to-[#0033ff] flex items-center justify-center">
              <p className="text-white text-2xl font-semibold opacity-20">sarah.eth</p>
            </div>
            {/* Rectangle 26 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 26.png"
                alt="Gallery 5"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 27 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 27.png"
                alt="Gallery 6"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 28 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 28.png"
                alt="Gallery 7"
                fill
                className="object-cover"
              />
            </div>
            {/* Rectangle 29 */}
            <div className="relative aspect-square rounded-2xl overflow-hidden opacity-20 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/Rectangle 29.png"
                alt="Gallery 8"
                fill
                className="object-cover"
              />
            </div>
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

