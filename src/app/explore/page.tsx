"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <div className="relative w-[1728px] bg-white overflow-visible" style={{ minHeight: '1120px' }} data-node-id="123:2889">
      {/* Left Sidebar */}
      <div className="absolute left-[25px] top-[calc(50%+0.5px)] -translate-y-1/2 flex flex-col gap-[24px] items-start w-[24px]" data-node-id="123:3055">
        <div className="relative shrink-0 size-[24px]" data-name="dashboard-square-01" data-node-id="123:3056">
          <Image src="/assets/Explore/dashboard-square-01.png" alt="Dashboard" width={24} height={24} className="object-contain" />
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="navigation-05" data-node-id="123:3061">
          <Image src="/assets/Explore/navigation-05.png" alt="Navigation" width={24} height={24} className="object-contain" />
        </div>
        <Link href="/echoes-feed" className="relative shrink-0 size-[24px] cursor-pointer" data-name="copy-02" data-node-id="123:3065">
          <Image src="/assets/Explore/copy-02.png" alt="Copy" width={24} height={24} className="object-contain" />
        </Link>
        <Link href="/podcasts-feed" className="relative shrink-0 size-[24px] cursor-pointer" data-name="mic-01" data-node-id="123:3068">
          <Image src="/assets/Explore/mic-01.svg" alt="Mic" width={24} height={24} className="object-contain" />
        </Link>
        <div className="relative shrink-0 size-[24px]" data-name="image-01" data-node-id="123:3072">
          <Image src="/assets/Explore/image-01.png" alt="Image" width={24} height={24} className="object-contain" />
        </div>
      </div>

      {/* Vertical Divider Line */}
      <div className="absolute left-[68px] top-0 bottom-0 w-0 flex items-center justify-center" data-node-id="123:3045">
        <div className="h-full w-0 border-l border-[#e0e0e0]" style={{ height: '100vh' }}></div>
      </div>

      {/* Logo */}
      <div className="absolute left-[18px] top-[18px]" data-node-id="123:3050">
        <Link href="/">
          <Image
            src="/assets/Explore/Group 1171277146.png"
            alt="Athena X"
            width={45}
            height={9}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Notification Icon - Fixed position */}
      <div className="absolute left-[25px] top-[1023px] size-[18px] z-50" data-name="notification-02" data-node-id="123:3046">
        <Image src="/assets/Explore/notification-02.png" alt="Notification" width={18} height={18} className="object-contain" />
      </div>

      {/* Profile Avatar - Fixed position */}
      <div className="absolute left-[18px] top-[1065px] size-[32px] z-50" data-node-id="123:3054">
        <Image src="/assets/Explore/Ellipse 19.png" alt="Profile" width={32} height={32} className="object-contain rounded-full" />
      </div>

      {/* Title */}
      <h1 className="absolute left-[128px] top-[41px] text-[40px] font-semibold text-black whitespace-pre" data-node-id="123:3076">
        Explore
      </h1>

      {/* Search Button */}
      <div className="absolute left-[284px] top-[43px] bg-[#00aaff] rounded-[24px] size-[44px] flex items-center justify-center" data-node-id="123:3085">
        <span className="text-white text-[16px]">🔍</span>
      </div>

      {/* Tabs */}
      <div className="absolute left-[128px] top-[113px] flex gap-[20px] items-center" data-node-id="123:3078">
        <div className="bg-[#00aaff] px-[12px] py-[8px] rounded-[24px]" data-node-id="123:3079">
          <span className="text-[16px] font-semibold text-white whitespace-pre">Podcasts</span>
        </div>
        <div className="flex gap-[32px] text-[#141b34] text-[16px] font-semibold" data-node-id="123:3081">
          <span className="cursor-pointer hover:opacity-80" data-node-id="123:3082">Gallery</span>
          <span className="cursor-pointer hover:opacity-80" data-node-id="123:3083">Battles</span>
          <span className="cursor-pointer hover:opacity-80" data-node-id="123:3084">Creators</span>
        </div>
      </div>

      {/* Content Cards Grid */}
      <div className="absolute left-[128px] top-[187px] flex flex-col gap-[46px]" data-name="Cards" data-node-id="123:2890">
        {/* Row 1 */}
        <div className="flex gap-[23px] items-start" data-name="#1" data-node-id="123:2967">
          {/* Card 1 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2968">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail1.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">24:45</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP1.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Altcoin Insights: Uncovering Hidden Gems in the Crypto Market</p>
              <p className="text-[14px] font-normal text-[#606060]">Unchained Podcast</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:2980">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail2.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">3:03</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP2.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.9%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">The Future of Crypto: Predictions and Trends to Watch</p>
              <p className="text-[14px] font-normal text-[#606060]">Coin Bureau</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2994">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail3.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.99%] right-[1.99%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">54:48</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP3.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Stablecoins Unveiled: Exploring the Role of Price-Pegged Cryptocurrencies</p>
              <p className="text-[14px] font-normal text-[#606060]">The Crypto Pod</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[23px] items-start" data-name="#2" data-node-id="123:2930">
          {/* Card 1 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:2931">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail4.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">2:03</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP4.svg" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">NFT Mania: Exploring the Art and Utility of Non-Fungible Tokens</p>
              <p className="text-[14px] font-normal text-[#606060]">The Breakdown</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2944">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail5.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[3.26%] right-[3.26%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">10:13</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP5.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Crypto Mining Explained: A Look at How Digital Currencies Are Created</p>
              <p className="text-[14px] font-normal text-[#606060]">Bankless</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2957">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail6.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[3.26%] right-[3.26%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">7:11</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP6.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Blockchain Basics: Understanding the Technology Behind Crypto</p>
              <p className="text-[14px] font-normal text-[#606060]">What Bitcoin Did</p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex gap-[23px] items-start" data-name="#3" data-node-id="123:2930">
          {/* Card 1 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:2892">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail7.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">2:33</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP7.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Ethereum's Evolution: A Deep Dive into the Merge</p>
              <p className="text-[14px] font-normal text-[#606060]">Bitcoin Audible</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Music" data-node-id="123:2906">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail8.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">15:10</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP8.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-[1.09%] top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Investing in Crypto: Strategies for Building a Digital Portfolio</p>
              <p className="text-[14px] font-normal text-[#606060]">The Pomp Podcast</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2918">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail9.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[3.26%] right-[3.26%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">1:00</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP9.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">DeFi Demystified: Navigating the World of Decentralized Finance</p>
              <p className="text-[14px] font-normal text-[#606060]">Crypto Island</p>
            </div>
          </div>
        </div>

        {/* Row 4 - Missing row */}
        <div className="flex gap-[23px] items-start" data-name="#4" data-node-id="123:3006">
          {/* Card 1 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:3007">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail7.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">2:33</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP1.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Ethereum's Evolution: A Deep Dive into the Merge</p>
              <p className="text-[14px] font-normal text-[#606060]">TED Talks</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Music" data-node-id="123:3021">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail8.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">15:10</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP2.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-[1.09%] top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">Investing in Crypto: Strategies for Building a Digital Portfolio</p>
              <p className="text-[14px] font-normal text-[#606060]">Red Hot Chili Peppers</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[241px] w-[276px] relative bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:3033">
            {/* Thumbnail - Top half only */}
            <div className="absolute top-0 left-0 right-0 h-[153px] rounded-t-[8px] overflow-hidden">
              <Image src="/assets/Explore/Card/Thumbnail9.png" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute bottom-[3.26%] right-[3.26%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
                <span className="text-[13px] font-medium text-white">1:00</span>
              </div>
            </div>
            {/* Avatar - Positioned at thumbnail bottom */}
            <div className="absolute top-[165px] left-0 w-[36px] h-[36px] rounded-full overflow-hidden z-30">
              <Image src="/assets/Explore/Card/PP3.png" alt="Avatar" width={36} height={36} className="object-cover" />
            </div>
            {/* Text Content - White background - Start from thumbnail bottom, with space for avatar */}
            <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%] z-10">
              <p className="text-[14px] font-normal text-[#030303] leading-[20px]">DeFi Demystified: Navigating the World of Decentralized Finance</p>
              <p className="text-[14px] font-normal text-[#606060]">Smash Mouth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Suggest to follow */}
      <div className="absolute left-[1321px] top-[100px] flex flex-col gap-[32px]" data-node-id="123:3087">
        <h2 className="text-[20px] font-semibold text-black whitespace-pre" data-node-id="123:3077">
          Suggest to follow
        </h2>

        {/* User 1 */}
        <div className="flex items-center justify-between w-[359px]" data-node-id="123:3087">
          <div className="flex gap-[8px] items-center" data-node-id="123:3088">
            <div className="size-[48px] rounded-full overflow-hidden" data-name="sarah" data-node-id="123:3090">
              <Image src="/assets/Explore/Group 1171277146.png" alt="sarah.eth" width={48} height={48} className="object-cover" />
            </div>
            <p className="text-[18px] font-semibold text-black whitespace-pre" data-node-id="123:3092">
              sarah.eth
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:3093">
            <span className="text-[16px] font-semibold text-white whitespace-pre">Follow</span>
          </button>
        </div>

        {/* User 2 */}
        <div className="flex items-center justify-between w-[359px]" data-node-id="123:3095">
          <div className="flex gap-[8px] items-center" data-node-id="123:3096">
            <div className="size-[48px] rounded-full overflow-hidden" data-name="xmill" data-node-id="123:3098">
              <Image src="/assets/Explore/xmill.png" alt="xmill" width={48} height={48} className="object-cover" />
            </div>
            <p className="text-[18px] font-semibold text-black whitespace-pre" data-node-id="123:3099">
              xmill
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:3100">
            <span className="text-[16px] font-semibold text-white whitespace-pre">Follow</span>
          </button>
        </div>

        {/* User 3 */}
        <div className="flex items-center justify-between w-[359px]" data-node-id="123:3102">
          <div className="flex gap-[8px] items-center" data-node-id="123:3103">
            <div className="size-[48px] rounded-full overflow-hidden" data-name="matsuivjj" data-node-id="123:3105">
              <Image src="/assets/Explore/matsuivjj.png" alt="matsuivjj" width={48} height={48} className="object-cover" />
            </div>
            <p className="text-[18px] font-semibold text-black whitespace-pre" data-node-id="123:3106">
              matsuivjj
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:3107">
            <span className="text-[16px] font-semibold text-white whitespace-pre">Follow</span>
          </button>
        </div>

        {/* User 4 */}
        <div className="flex items-center justify-between w-[359px]" data-node-id="123:3109">
          <div className="flex gap-[8px] items-center" data-node-id="123:3110">
            <div className="size-[48px] rounded-full overflow-hidden" data-name="crenomass" data-node-id="123:3112">
              <Image src="/assets/Explore/crenomass.png" alt="crenomass" width={48} height={48} className="object-cover" />
            </div>
            <p className="text-[18px] font-semibold text-black whitespace-pre" data-node-id="123:3113">
              crenomass
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:3114">
            <span className="text-[16px] font-semibold text-white whitespace-pre">Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
}

