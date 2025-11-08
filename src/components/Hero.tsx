import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-[200px] pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#020d5a] mb-6 leading-tight">
            Where Audio Meets Art.
            <br />
            Where Creators Meet Sponsors.
          </h1>
          <p className="text-xl text-[#020d5a] mb-8 max-w-2xl mx-auto">
            Transform podcasts into visual experiences. Run brand battles. Build global audiences
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="bg-gradient-to-r from-[#000e54] to-[#00093a] text-white px-6 py-4 rounded-[48px] font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <Image src="/assets/Ellipse 1.svg" alt="" width={26} height={26} />
                <Image src="/assets/Ellipse 2.svg" alt="" width={26} height={26} />
                <Image src="/assets/Ellipse 3.svg" alt="" width={26} height={26} />
              </div>
              I&apos;m a Creator
            </button>
            <button className="bg-white text-[#01093c] px-6 py-4 rounded-[48px] font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <div className="flex items-center -space-x-2">
                <Image src="/assets/Icon.jpeg.svg" alt="" width={26} height={26} />
                <Image src="/assets/coinbase_icon.png.svg" alt="" width={26} height={26} />
                <Image src="/assets/coinbase_icon.png-1.svg" alt="" width={26} height={26} />
              </div>
              I&apos;m a Sponsor
            </button>
          </div>
        </div>

        {/* Podcast Card */}
        <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="flex items-start gap-4">
            <div className="relative w-[102px] h-[102px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/assets/Rectangle8.png"
                alt="Podcast thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/assets/image 3.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded"
                />
                <h3 className="text-lg font-semibold text-black">The Milk Road Show</h3>
              </div>
              <p className="text-sm text-black/70 mb-4">
                Your #1 podcast to turn your crypto curiosity into clarity. We discuss topics like: Blockchain Tech, Investing Strategies...
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Image src="/assets/play.svg" alt="" width={20} height={20} />
                  <span className="text-sm font-bold text-black">12.5K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/brush.svg" alt="" width={20} height={20} />
                  <span className="text-sm font-bold text-black">80</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/sale-tag-02.svg" alt="" width={20} height={20} />
                  <span className="text-sm font-bold text-black">$3.9K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/copy-02.svg" alt="" width={20} height={20} />
                  <span className="text-sm font-bold text-black">215</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="absolute top-[133px] left-[142px] w-[172px] h-[172px] rotate-[344deg] hidden lg:block">
          <Image
            src="/assets/Rectangle6.png"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-[212px] right-[1189px] w-[137px] h-[137px] rotate-[29deg] blur-[0.5px] hidden lg:block">
          <Image
            src="/assets/Rectangle7.png"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

