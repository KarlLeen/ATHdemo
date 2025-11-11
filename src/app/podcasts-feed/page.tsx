"use client";

import Image from "next/image";
import Link from "next/link";

export default function PodcastsFeedPage() {
  return (
    <div className="relative w-[1728px] bg-white overflow-visible" style={{ minHeight: '2000px' }} data-node-id="123:2507">
      {/* Vertical Divider Line */}
      <div className="absolute left-[68px] top-0 bottom-0 w-0 flex items-center justify-center z-10">
        <div className="h-full w-0 border-l border-[#e0e0e0]" style={{ height: '100vh' }}></div>
      </div>

      {/* Notification Icon */}
      <div className="fixed left-[25px] bottom-[76px] size-[18px] z-50" data-name="notification-02" data-node-id="123:2509">
        <Image src="/assets/Explore/notification-02.png" alt="Notification" width={18} height={18} className="object-contain" />
      </div>

      {/* Logo */}
      <div className="fixed left-[18px] top-[18px] z-50" data-node-id="123:2513">
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

      {/* Profile Avatar */}
      <div className="fixed left-[18px] bottom-[20px] size-[32px] z-50" data-node-id="123:2517">
        <Image src="/assets/Explore/Ellipse 19.png" alt="Profile" width={32} height={32} className="object-contain rounded-full" />
      </div>

      {/* Left Sidebar - positioned at viewport center */}
      <div className="fixed left-[25px] top-1/2 -translate-y-1/2 flex flex-col gap-[24px] items-start w-[24px] z-40" data-node-id="123:2518">
        <Link href="/explore" className="relative shrink-0 size-[24px]" data-name="dashboard-square-01" data-node-id="123:2519">
          <Image src="/assets/EchoesFeed/dashboard-square-01.png" alt="Dashboard" width={24} height={24} className="object-contain" />
        </Link>
        <div className="relative shrink-0 size-[24px]" data-name="navigation-05" data-node-id="123:2524">
          <Image src="/assets/EchoesFeed/navigation-05.png" alt="Navigation" width={24} height={24} className="object-contain" />
        </div>
        <Link href="/echoes-feed" className="relative shrink-0 size-[24px] cursor-pointer" data-name="copy-02" data-node-id="123:2528">
          <Image src="/assets/PodcastsFeed/copy-02.png" alt="Copy" width={24} height={24} className="object-contain" />
        </Link>
        <div className="relative shrink-0 size-[24px]" data-name="mic-01" data-node-id="123:2531">
          <Image src="/assets/PodcastsFeed/mic-01.png" alt="Mic" width={24} height={24} className="object-contain" />
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="image-01" data-node-id="123:2535">
          <Image src="/assets/EchoesFeed/image-01.png" alt="Image" width={24} height={24} className="object-contain" />
        </div>
      </div>

      {/* Page Title */}
      <p className="absolute left-[128px] top-[41px] text-[40px] font-semibold text-black" data-node-id="123:2539">
        Podcasts
      </p>

      {/* Main Podcast Card 1 */}
      <div className="absolute left-[128px] top-[113px] w-[834px] h-[415px] rounded-[8px] overflow-hidden" data-node-id="123:2540">
        <Image src="/assets/PodcastsFeed/Rectangle 208.png" alt="Podcast" fill className="object-cover rounded-[8px]" />
        <div className="absolute left-[505px] top-[281px] size-[80px]">
          <Image src="/assets/PodcastsFeed/Group 1171277234.png" alt="Play" width={80} height={80} className="object-contain" />
        </div>
      </div>

      {/* Stats for Card 1 */}
      <div className="absolute left-[128px] top-[544px] flex gap-[20px] items-center">
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/copy-02.png" alt="Copy" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">215</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/play.png" alt="Play" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">12.5K</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/brush.png" alt="Brush" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">80</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/sale-tag-02.png" alt="Sale" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">$3.9K</p>
        </div>
      </div>

      {/* Podcast Title 1 */}
      <p className="absolute left-[128px] top-[580px] text-[32px] font-bold text-[#141b34] tracking-[-0.32px]" data-node-id="123:2583">
        DeFi and Decentralization
      </p>

      {/* Duration 1 */}
      <p className="absolute right-[407px] top-[596px] text-[16px] font-medium text-[#141b34] opacity-40" data-node-id="123:2585">
        23:02
      </p>

      {/* Description 1 */}
      <p className="absolute left-[128px] top-[630px] text-[16px] font-medium text-[#141b34] tracking-[-0.16px]" data-node-id="123:2587">
        Exploring the potential of decentralized finance and its impact.
      </p>

      {/* Publisher & Date 1 */}
      <div className="absolute left-[128px] top-[661px] flex gap-[6px] items-center text-[16px] font-medium text-[#141b34] opacity-40 tracking-[-0.16px]" data-node-id="123:2589">
        <p>Coin Bureau</p>
        <p>•</p>
        <p>Yesterday</p>
      </div>

      {/* Main Podcast Card 2 */}
      <div className="absolute left-[128px] top-[760px] w-[834px] h-[415px] rounded-[8px] overflow-hidden" data-node-id="123:2541">
        <Image src="/assets/PodcastsFeed/Rectangle 208.png" alt="Podcast" fill className="object-cover rounded-[8px]" />
      </div>

      {/* Stats for Card 2 */}
      <div className="absolute left-[128px] top-[1191px] flex gap-[20px] items-center">
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/copy-02.png" alt="Copy" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">215</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/play.png" alt="Play" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">12.5K</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/brush.png" alt="Brush" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">80</p>
        </div>
        <div className="flex gap-[6px] items-center">
          <Image src="/assets/PodcastsFeed/sale-tag-02.png" alt="Sale" width={20} height={20} className="object-contain" />
          <p className="text-[14px] font-bold text-black">$3.9K</p>
        </div>
      </div>

      {/* Podcast Title 2 */}
      <p className="absolute left-[128px] top-[1227px] text-[32px] font-bold text-[#141b34] tracking-[-0.32px]" data-node-id="123:2584">
        DeFi and Decentralization
      </p>

      {/* Duration 2 */}
      <p className="absolute right-[407px] top-[1243px] text-[16px] font-medium text-[#141b34] opacity-40" data-node-id="123:2586">
        23:02
      </p>

      {/* Description 2 */}
      <p className="absolute left-[128px] top-[1277px] text-[16px] font-medium text-[#141b34] tracking-[-0.16px]" data-node-id="123:2588">
        Exploring the potential of decentralized finance and its impact.
      </p>

      {/* Publisher & Date 2 */}
      <div className="absolute left-[128px] top-[1308px] flex gap-[6px] items-center text-[16px] font-medium text-[#141b34] opacity-40 tracking-[-0.16px]" data-node-id="123:2593">
        <p>Coin Bureau</p>
        <p>•</p>
        <p>Yesterday</p>
      </div>

      {/* Player Controls */}
      <div className="absolute left-[128px] top-[1122px] w-[834px] h-[53px]">
        {/* Progress Bar Background */}
        <div className="absolute left-0 top-0 w-full h-[4px] bg-white opacity-50" data-node-id="123:2598"></div>
        {/* Progress Bar Fill */}
        <div className="absolute left-0 top-0 w-[377px] h-[4px] bg-[#006eff]" data-node-id="123:2599"></div>
        {/* Progress Dots */}
        <div className="absolute left-[235px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[288px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[301px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[502px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[578px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[702px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[722px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[806px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute left-[826px] top-[-1px] size-[6px]">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        {/* Player Controls */}
        <div className="absolute left-[173px] top-[14px] flex gap-[11px] items-center">
          <div className="size-[25px]">
            <Image src="/assets/PodcastsFeed/circle-arrow-move-up-left.png" alt="Previous" width={25} height={25} className="object-contain rotate-180" />
          </div>
          <p className="text-[16px] font-medium text-white tracking-[-0.16px]">12:53 / 23:02</p>
          <div className="size-[25px]">
            <Image src="/assets/PodcastsFeed/circle-arrow-move-up-right.png" alt="Next" width={25} height={25} className="object-contain" />
          </div>
        </div>
        {/* Pause/Play Indicators */}
        <div className="absolute left-[144px] top-[16px] flex gap-[5px]">
          <div className="w-[4px] h-[21px] bg-white"></div>
          <div className="w-[4px] h-[21px] bg-white"></div>
        </div>
      </div>

      {/* Echo Cards */}
      <div className="absolute left-[453px] top-[911px] w-[104px] h-[194px] rounded-[8px] overflow-hidden" data-node-id="123:2620">
        <Image src="/assets/PodcastsFeed/Rectangle 208.png" alt="Echo" fill className="object-cover rounded-[8px]" />
      </div>
      <div className="absolute left-[757px] top-[911px] w-[104px] h-[194px] rounded-[8px] overflow-hidden" data-node-id="123:2621">
        <Image src="/assets/PodcastsFeed/Rectangle 208.png" alt="Echo" fill className="object-cover rounded-[8px]" />
      </div>

      {/* Echo Buttons */}
      <div className="absolute left-[453px] top-[1059px] w-[104px] h-[20px] bg-transparent"></div>
      <div className="absolute left-[757px] top-[1059px] w-[104px] h-[20px] bg-transparent"></div>
      <div className="absolute left-[453px] top-[1079px] w-[104px] h-[26px] bg-transparent"></div>
      <div className="absolute left-[757px] top-[1079px] w-[104px] h-[26px] bg-transparent"></div>

      {/* Echo Text */}
      <p className="absolute left-[470px] top-[1084px] text-[12px] font-semibold text-white tracking-[-0.12px]">Create Echo</p>
      <p className="absolute left-[485px] top-[1063px] text-[10px] font-semibold text-white tracking-[-0.1px]">12:53:43</p>
      <p className="absolute left-[790px] top-[1084px] text-[12px] font-semibold text-white tracking-[-0.12px]">Play Echo</p>

      {/* Echo Avatars */}
      <div className="absolute left-[489px] top-[1123px] size-[32px]">
        <Image src="/assets/PodcastsFeed/image 3.png" alt="Avatar" width={32} height={32} className="object-cover rounded-full" />
      </div>
      <div className="absolute left-[794px] top-[1123px] size-[32px]">
        <Image src="/assets/PodcastsFeed/image 4.png" alt="Avatar" width={32} height={32} className="object-cover rounded-full" />
      </div>

      {/* Right Sidebar - Recommended Podcasts */}
      <p className="absolute right-[407px] top-[55px] text-[20px] font-semibold text-black" data-node-id="123:2632">
        Recommended Podcasts
      </p>

      {/* Recommended Podcast Cards */}
      <div className="absolute right-[131px] top-[111px] flex flex-col gap-[24px]">
        {/* Card 1 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2634">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail1.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">24:45</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/P1.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">Altcoin Insights: Uncovering Hidden Gems in the Crypto Market</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">Unchained Podcast</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:2646">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail2.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">3:03</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/PP2.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">The Future of Crypto: Predictions and Trends to Watch</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">Coin Bureau</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2660">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail3.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">54:48</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/PP3.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">Stablecoins Unveiled: Exploring the Role of Price-Pegged Cryptocurrencies</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">The Crypto Pod</p>
          </div>
        </div>
      </div>

      {/* Second Row of Recommended Podcasts */}
      <div className="absolute right-[131px] top-[926px] flex flex-col gap-[24px]">
        {/* Card 4 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Approved" data-node-id="123:2673">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail4.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">2:03</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/PP4.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">NFT Mania: Exploring the Art and Utility of Non-Fungible Tokens</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">The Breakdown</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Music" data-node-id="123:2685">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">10:13</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/PP3.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">Crypto Mining Explained: A Look at How Digital Currencies Are Created</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">Bankless</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative w-[276px] h-[241px] bg-white rounded-[8px] overflow-hidden" data-name="Card / Personal" data-node-id="123:2697">
          <div className="absolute top-0 left-0 right-0 h-[153px]">
            <Image src="/assets/PodcastsFeed/Card/Thumbnail1.png" alt="Thumbnail" fill className="object-cover" />
            <div className="absolute bottom-[1.81%] right-[1.81%] bg-[#030303] rounded-[1px] px-[4px] py-[1px]">
              <span className="text-[13px] font-medium text-white">7:11</span>
            </div>
          </div>
          <div className="absolute top-[165px] left-0 size-[36px]">
            <Image src="/assets/PodcastsFeed/Card/P1.png" alt="Avatar" width={36} height={36} className="object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 left-[18.12%] right-0 top-[153px] bg-white rounded-b-[8px] flex flex-col gap-[5px] pt-[24px] px-0 pb-[2.49%]">
            <p className="text-[14px] font-normal text-[#030303] leading-[20px] px-[12px]">Blockchain Basics: Understanding the Technology Behind Crypto</p>
            <p className="text-[14px] font-normal text-[#606060] px-[12px]">What Bitcoin Did</p>
          </div>
        </div>
      </div>
    </div>
  );
}

