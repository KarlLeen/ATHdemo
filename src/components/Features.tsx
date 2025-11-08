import Image from "next/image";

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Musicians & Podcasters */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#020d5a] to-[#2a42ed] bg-clip-text text-transparent mb-6">
              Musicians & Podcasters
            </h2>
            <p className="text-base text-black mb-8">
              Your audio becomes a canvas. Fans create visual echoes as they listen
            </p>
            
            <div className="mb-6">
              <Image
                src="/assets/image 9.png"
                alt=""
                width={480}
                height={112}
                className="w-full h-auto rounded-lg mb-6"
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-[#1ed760] inline-flex items-center gap-2 px-3 py-2 rounded-[32px]">
                <Image src="/assets/Symbol.svg.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Spotify-ready</span>
              </div>
              <div className="bg-[#020624] inline-flex items-center gap-2 px-3 py-2 rounded-[32px] ml-2">
                <Image src="/assets/copy-02.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Visual echoes feed</span>
              </div>
              <div className="bg-[#020624] inline-flex items-center gap-2 px-3 py-2 rounded-[32px] ml-2">
                <Image src="/assets/brush.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Live art battles</span>
              </div>
            </div>

            <div className="bg-[#e7ecfd] rounded-2xl p-6 mb-4">
              <ol className="list-decimal list-inside space-y-2 text-base font-semibold text-black">
                <li>Upload your episode</li>
                <li>Artists create visual echoes</li>
              </ol>
              <p className="text-sm text-black/60 mt-4">
                Whether you create a podcast or a musician — upload your material to Athena platform and let visual artists use them
              </p>
            </div>
          </div>

          {/* Visual Artists */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#020d5a] to-[#2a42ed] bg-clip-text text-transparent mb-6">
              Visual Artists
            </h2>
            <p className="text-base text-black mb-8">
              Create for global audience. Build your portfolio with every echo
            </p>
            
            <div className="mb-6">
              <Image
                src="/assets/image 10.png"
                alt=""
                width={480}
                height={112}
                className="w-full h-auto rounded-lg mb-6"
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-[#020624] inline-flex items-center gap-2 px-3 py-2 rounded-[32px]">
                <Image src="/assets/dashboard-square-01.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Portfolio growth</span>
              </div>
              <div className="bg-[#020624] inline-flex items-center gap-2 px-3 py-2 rounded-[32px] ml-2">
                <Image src="/assets/repeat.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Remix-friendly</span>
              </div>
              <div className="bg-[#020624] inline-flex items-center gap-2 px-3 py-2 rounded-[32px] ml-2">
                <Image src="/assets/store-02.svg" alt="" width={14} height={14} />
                <span className="text-sm font-semibold text-white">Marketplace Sales</span>
              </div>
            </div>

            <div className="bg-[#e7ecfd] rounded-2xl p-6 mb-4">
              <ol className="list-decimal list-inside space-y-2 text-base font-semibold text-black">
                <li>Upload your episode</li>
                <li>Artists create visual echoes</li>
              </ol>
              <p className="text-sm text-black/60 mt-4">
                Whether you create a podcast or a musician — upload your material to Athena platform and let visual artists use them
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

