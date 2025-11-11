"use client";

import Image from "next/image";
import Link from "next/link";

export default function EchoesFeedPage() {
  return (
    <div className="relative w-[1728px] bg-white overflow-visible" style={{ minHeight: '1700px' }} data-node-id="123:2338">
      {/* Vertical Divider Line */}
      <div className="absolute left-[68px] top-0 bottom-0 w-0 flex items-center justify-center z-10">
        <div className="h-full w-0 border-l border-[#e0e0e0]" style={{ height: '100vh' }}></div>
      </div>

      {/* Notification Icon */}
      <div className="absolute left-[25px] top-[1023px] size-[18px] z-50" data-name="notification-02" data-node-id="123:2340">
        <Image src="/assets/Explore/notification-02.png" alt="Notification" width={18} height={18} className="object-contain" />
      </div>

      {/* Logo */}
      <div className="absolute left-[18px] top-[18px] z-50" data-node-id="123:2344">
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
      <div className="absolute left-[18px] top-[1065px] size-[32px] z-50" data-node-id="123:2348">
        <Image src="/assets/Explore/Ellipse 19.png" alt="Profile" width={32} height={32} className="object-contain rounded-full" />
      </div>

      {/* Left Sidebar - positioned at viewport center */}
      <div className="fixed left-[25px] top-1/2 -translate-y-1/2 flex flex-col gap-[24px] items-start w-[24px] z-40" data-node-id="123:2349">
        <Link href="/explore" className="relative shrink-0 size-[24px]" data-name="dashboard-square-01" data-node-id="123:2350">
          <Image src="/assets/EchoesFeed/dashboard-square-01.png" alt="Dashboard" width={24} height={24} className="object-contain" />
        </Link>
        <div className="relative shrink-0 size-[24px]" data-name="navigation-05" data-node-id="123:2355">
          <Image src="/assets/EchoesFeed/navigation-05.png" alt="Navigation" width={24} height={24} className="object-contain" />
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="sidebar3" data-node-id="123:2359">
          <Image src="/assets/EchoesFeed/sidebar3.jpg" alt="Sidebar" width={24} height={24} className="object-contain" />
        </div>
        <Link href="/podcasts-feed" className="relative shrink-0 size-[24px] cursor-pointer" data-name="mic-01" data-node-id="123:2363">
          <Image src="/assets/Explore/mic-01.svg" alt="Mic" width={24} height={24} className="object-contain" />
        </Link>
        <div className="relative shrink-0 size-[24px] cursor-pointer" data-name="image-01" data-node-id="123:2367">
          <Image src="/assets/EchoesFeed/image-01.png" alt="Image" width={24} height={24} className="object-contain" />
        </div>
      </div>

      {/* Right Sidebar - Suggest to follow */}
      <div className="absolute right-[48px] top-[55px] w-[359px]" data-node-id="123:2371">
        <p className="font-semibold text-[20px] text-black mb-[25px]" data-node-id="123:2371">
          Suggest to follow
        </p>

        {/* User 1: sarah.eth */}
        <div className="flex items-center justify-between mb-[36px]" data-node-id="123:2372">
          <div className="flex gap-[8px] items-center" data-node-id="123:2373">
            <div className="relative size-[48px] flex items-center justify-center" data-node-id="123:2374">
              <div className="absolute inset-0 rounded-full bg-[#00aaff] flex items-center justify-center">
                <p className="text-white text-[26px] font-semibold">E</p>
              </div>
            </div>
            <p className="font-semibold text-[18px] text-black" data-node-id="123:2377">
              sarah.eth
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:2378">
            <p className="font-semibold text-[16px] text-white">Follow</p>
          </button>
        </div>

        {/* User 2: xmill */}
        <div className="flex items-center justify-between mb-[36px]" data-node-id="123:2380">
          <div className="flex gap-[8px] items-center" data-node-id="123:2381">
            <div className="relative size-[48px]" data-node-id="123:2382">
              <Image src="/assets/Explore/xmill.png" alt="xmill" width={48} height={48} className="object-contain rounded-full" />
            </div>
            <p className="font-semibold text-[18px] text-black" data-node-id="123:2384">
              xmill
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:2385">
            <p className="font-semibold text-[16px] text-white">Follow</p>
          </button>
        </div>

        {/* User 3: matsuivjj */}
        <div className="flex items-center justify-between mb-[36px]" data-node-id="123:2387">
          <div className="flex gap-[8px] items-center" data-node-id="123:2388">
            <div className="relative size-[48px]" data-node-id="123:2389">
              <Image src="/assets/Explore/matsuivjj.png" alt="matsuivjj" width={48} height={48} className="object-contain rounded-full" />
            </div>
            <p className="font-semibold text-[18px] text-black" data-node-id="123:2391">
              matsuivjj
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:2392">
            <p className="font-semibold text-[16px] text-white">Follow</p>
          </button>
        </div>

        {/* User 4: crenomass */}
        <div className="flex items-center justify-between" data-node-id="123:2394">
          <div className="flex gap-[8px] items-center" data-node-id="123:2395">
            <div className="relative size-[48px]" data-node-id="123:2396">
              <Image src="/assets/Explore/crenomass.png" alt="crenomass" width={48} height={48} className="object-contain rounded-full" />
            </div>
            <p className="font-semibold text-[18px] text-black" data-node-id="123:2398">
              crenomass
            </p>
          </div>
          <button className="bg-[#00aaff] px-[18px] py-[10px] rounded-[24px]" data-node-id="123:2399">
            <p className="font-semibold text-[16px] text-white">Follow</p>
          </button>
        </div>
      </div>

      {/* Post 1 */}
      <div className="absolute left-[470px] top-[55px] w-[470px] bg-white rounded-[8px] flex flex-col" data-name="Post" data-node-id="123:2401">
        {/* Post Header */}
        <div className="flex items-center justify-between px-[8px] pr-[16px] py-[8px]" data-name="head-post" data-node-id="123:2402">
          <div className="flex gap-[8px] items-center" data-name="perfil" data-node-id="123:2403">
            <div className="relative size-[40px]" data-name="foto" data-node-id="123:2404">
              <Image src="/assets/EchoesFeed/People.Avatar.png" alt="Avatar" width={40} height={40} className="object-contain rounded-full" data-name="People.Avatar" data-node-id="123:2405" />
            </div>
            <p className="font-semibold text-[14px] text-neutral-800" data-node-id="123:2407">
              xmill
            </p>
          </div>
          <div className="h-[4px] w-[16px]" data-name="menu" data-node-id="123:2408">
            <Image src="/assets/EchoesFeed/Vector.png" alt="Menu" width={16} height={4} className="object-contain" />
          </div>
        </div>

        {/* Post Image */}
        <div className="relative h-[587.5px] w-[470px] overflow-hidden" data-name="Post-foto" data-node-id="123:2412">
          <Image src="/assets/EchoesFeed/img1.png" alt="Post" fill className="object-cover" data-node-id="123:2412" />
        </div>

        {/* Icons Section */}
        <div className="flex items-start justify-between px-[12px] py-[8px]" data-name="icons" data-node-id="123:2413">
          <div className="flex gap-[16px] items-center" data-name="icons" data-node-id="123:2414">
            <div className="h-[20.4px] w-[24px]" data-name="bt-like" data-node-id="123:2415">
              <Image src="/assets/EchoesFeed/bt-like.png" alt="Like" width={24} height={20} className="object-contain" />
            </div>
            <div className="h-[24px] w-[22.738px]" data-name="icon-comment" data-node-id="123:2416">
              <Image src="/assets/EchoesFeed/icon-comment.png" alt="Comment" width={23} height={24} className="object-contain" />
            </div>
            <div className="relative size-[22px]" data-name="Vector" data-node-id="123:2417">
              <Image src="/assets/EchoesFeed/Vector.png" alt="Share" width={22} height={22} className="object-contain" />
            </div>
          </div>
          <div className="h-[24px] w-[115px] flex items-center gap-[4px]" data-name="icons" data-node-id="123:2418">
            <p className="text-[#777777] text-[12px] font-medium">Original Video</p>
          </div>
        </div>

        {/* Post Content */}
        <div className="flex flex-col gap-[8px] px-0 py-0 pb-[8px]" data-name="post-content" data-node-id="123:2424">
          {/* Liked by */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-0" data-name="curtido por" data-node-id="123:2425">
            <div className="relative size-[24px]" data-name="foto" data-node-id="123:2426">
              <Image src="/assets/EchoesFeed/People.Avatar2.png" alt="Avatar" width={24} height={24} className="object-contain rounded-full" data-name="People.Avatar2" data-node-id="123:2427" />
            </div>
            <p className="text-[14px] text-neutral-800">Liked by</p>
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-neutral-800">and</p>
            <p className="text-[14px] text-neutral-800">others</p>
          </div>

          {/* Description */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-0" data-name="descricao" data-node-id="123:2432">
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-neutral-800">Is that 5K that you want?</p>
            <div className="h-[16px] w-[15.36px]">
              <span className="text-[16px]">😉</span>
            </div>
          </div>

          {/* View all comments */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-[4px]" data-name="comentários" data-node-id="123:2440">
            <p className="text-[#777777] text-[14px]">View all 45 comments</p>
          </div>

          {/* Comment 1 */}
          <div className="flex gap-[4px] items-center px-[12px] py-0" data-name="coment" data-node-id="123:2442">
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-[#385898]">@logan.reid</p>
          </div>

          {/* Comment 2 */}
          <div className="flex gap-[4px] items-center px-[12px] py-0" data-name="coment" data-node-id="123:2446">
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-[#385898]">@logan.reid</p>
            <p className="text-[14px] text-neutral-800">yes</p>
          </div>

          {/* Days ago */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-[8px]" data-name="dias" data-node-id="123:2451">
            <p className="text-[#777777] text-[10px]">2 DAYS AGO</p>
          </div>

          {/* Add comment */}
          <div className="flex items-center justify-between px-[12px] py-[8px]" data-name="comentar" data-node-id="123:2453">
            <button className="text-[#777777] text-[16px] font-medium">Add a comment...</button>
            <p className="text-[#1877f2] text-[16px] opacity-40">Post</p>
          </div>
        </div>
      </div>

      {/* Post 2 */}
      <div className="absolute left-[470px] top-[972.5px] w-[470px] bg-white rounded-[8px] flex flex-col" data-name="Post" data-node-id="123:2455">
        {/* Post Header */}
        <div className="flex items-center justify-between px-[8px] pr-[16px] py-[8px]" data-name="head-post" data-node-id="123:2456">
          <div className="flex gap-[8px] items-center" data-name="perfil" data-node-id="123:2457">
            <div className="relative size-[40px]" data-name="foto" data-node-id="123:2458">
              <Image src="/assets/EchoesFeed/People.Avatar2.png" alt="Avatar" width={40} height={40} className="object-contain rounded-full" data-name="People.Avatar2" data-node-id="123:2459" />
            </div>
            <p className="font-semibold text-[14px] text-neutral-800">Lacy</p>
          </div>
          <div className="h-[4px] w-[16px]" data-name="menu" data-node-id="123:2462">
            <Image src="/assets/EchoesFeed/Vector.png" alt="Menu" width={16} height={4} className="object-contain" />
          </div>
        </div>

        {/* Post Image */}
        <div className="relative h-[587.5px] w-[470px] overflow-hidden" data-name="Post-foto" data-node-id="123:2466">
          <Image src="/assets/EchoesFeed/img2.png" alt="Post" fill className="object-cover" data-node-id="123:2466" />
        </div>

        {/* Icons Section */}
        <div className="flex items-start justify-between px-[12px] py-[8px]" data-name="icons" data-node-id="123:2467">
          <div className="flex gap-[16px] items-center" data-name="icons" data-node-id="123:2468">
            <div className="h-[20.4px] w-[24px]" data-name="bt-like" data-node-id="123:2415">
              <Image src="/assets/EchoesFeed/bt-like.png" alt="Like" width={24} height={20} className="object-contain" />
            </div>
            <div className="h-[24px] w-[22.738px]" data-name="icon-comment" data-node-id="123:2416">
              <Image src="/assets/EchoesFeed/icon-comment.png" alt="Comment" width={23} height={24} className="object-contain" />
            </div>
            <div className="relative size-[22px]" data-name="Vector" data-node-id="123:2417">
              <Image src="/assets/EchoesFeed/Vector.png" alt="Share" width={22} height={22} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="flex flex-col gap-[8px] px-0 py-0 pb-[8px]" data-name="post-content" data-node-id="123:2472">
          {/* Liked by */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-0" data-name="curtido por" data-node-id="123:2473">
            <div className="relative size-[24px]" data-name="foto" data-node-id="123:2474">
              <Image src="/assets/EchoesFeed/People.Avatar2.png" alt="Avatar" width={24} height={24} className="object-contain rounded-full" data-name="People.Avatar" data-node-id="123:2475" />
            </div>
            <p className="text-[14px] text-neutral-800">Liked by</p>
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-neutral-800">and</p>
            <p className="text-[14px] text-neutral-800">others</p>
          </div>

          {/* Description */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-0" data-name="descricao" data-node-id="123:2480">
            <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
            <p className="text-[14px] text-neutral-800">Is that 5K that you want?</p>
            <div className="h-[16px] w-[15.36px]">
              <span className="text-[16px]">😉</span>
            </div>
          </div>

          {/* View all comments */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-[4px]" data-name="comentários" data-node-id="123:2488">
            <p className="text-[#777777] text-[14px]">View all 45 comments</p>
          </div>

          {/* Comment 1 */}
          <div className="flex items-center justify-between px-[12px] py-0" data-name="coment" data-node-id="123:2490">
            <div className="flex gap-[4px] items-center">
              <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
              <p className="text-[14px] text-[#385898]">@logan.reid</p>
            </div>
            <div className="h-[10.2px] w-[12px]">
              <Image src="/assets/EchoesFeed/bt-like.png" alt="Like" width={12} height={10} className="object-contain" />
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex items-center justify-between px-[12px] py-0" data-name="coment" data-node-id="123:2495">
            <div className="flex gap-[4px] items-center">
              <p className="font-semibold text-[14px] text-neutral-800">jordan.miller</p>
              <p className="text-[14px] text-[#385898]">@logan.reid</p>
              <p className="text-[14px] text-neutral-800">yes</p>
            </div>
            <div className="h-[10.2px] w-[12px]">
              <Image src="/assets/EchoesFeed/bt-like.png" alt="Like" width={12} height={10} className="object-contain" />
            </div>
          </div>

          {/* Days ago */}
          <div className="flex gap-[4px] items-center justify-center px-[12px] py-[8px]" data-name="dias" data-node-id="123:2501">
            <p className="text-[#777777] text-[10px]">2 DAYS AGO</p>
            <p className="text-[12px] text-neutral-800">See translation</p>
          </div>

          {/* Add comment */}
          <div className="flex items-center justify-between px-[12px] py-[8px]" data-name="comentar" data-node-id="123:2504">
            <div className="flex items-center gap-[8px]">
              <button className="text-[#777777] text-[16px]">Add a comment...</button>
            </div>
            <p className="text-[#1877f2] text-[16px] opacity-40">Post</p>
          </div>
        </div>
      </div>
    </div>
  );
}

