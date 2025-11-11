"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = () => {
    router.push("/onboarding");
  };

  return (
    <div className="relative w-[1728px] min-h-screen bg-white overflow-hidden" data-node-id="123:2157">
      {/* Left Section - Login Form */}
      <div className="absolute left-[214px] top-[215px] flex flex-col items-start justify-start w-[466px]" data-node-id="140:138">
        {/* Logo */}
        <div className="mb-[60px]" data-node-id="123:2169">
          <Link href="/">
            <Image
              src="/assets/Login/Group 2.svg"
              alt="Athena Logo"
              width={184}
              height={38}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Welcome Back Title */}
        <h1 className="text-[24px] font-medium text-black leading-normal mb-[45px]" data-node-id="123:2182">
          Welcome Back
        </h1>

        {/* Email Input */}
        <div className="w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center mb-[16px]" data-node-id="123:2175">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center justify-between mb-[28px]" data-node-id="123:2177">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer flex-shrink-0"
            data-node-id="123:2179"
          >
            <Image
              src="/assets/Login/view.svg"
              alt="Toggle password visibility"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Divider Line */}
        <div className="w-[466px] h-[0px] mb-[16px] -mt-[8px] flex items-center justify-center" data-node-id="123:2183">
          <div className="w-full h-[1px] bg-[#a5a5a5]"></div>
        </div>

        {/* Continue with Google */}
        <button onClick={handleSocialLogin} className="w-[466px] h-[64px] bg-white border border-[#c6c6c6] rounded-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mb-[16px]" data-node-id="123:2202">
          <Image
            src="/assets/Login/Google.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span className="text-[16px] font-semibold text-black">Continue with Google</span>
        </button>

        {/* Continue with Apple */}
        <button onClick={handleSocialLogin} className="w-[466px] h-[64px] bg-black rounded-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mb-[16px]" data-node-id="123:2184">
          <Image
            src="/assets/Login/Apple.svg"
            alt="Apple"
            width={23}
            height={23}
          />
          <span className="text-[16px] font-semibold text-white">Continue with Apple</span>
        </button>

        {/* Continue with Twitter */}
        <button onClick={handleSocialLogin} className="w-[466px] h-[64px] bg-[#598dff] rounded-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mb-[16px]" data-node-id="123:2198">
          <Image
            src="/assets/Login/Twitter.svg"
            alt="Twitter"
            width={24}
            height={24}
          />
          <span className="text-[16px] font-semibold text-white">Continue with Twitter</span>
        </button>

        {/* Continue with Discord */}
        <button onClick={handleSocialLogin} className="w-[466px] h-[64px] bg-[#6b62ed] rounded-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mb-[16px]" data-node-id="123:2188">
          <Image
            src="/assets/Login/Discord.svg"
            alt="Discord"
            width={19}
            height={19}
          />
          <span className="text-[16px] font-semibold text-white">Continue with Discord</span>
        </button>

        {/* Continue with Wallet */}
        <button onClick={handleSocialLogin} className="w-[466px] h-[64px] bg-[#1100ff] rounded-[16px] flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mb-[16px]" data-node-id="123:2192">
          <Image
            src="/assets/Login/wallet-04.svg"
            alt="Wallet"
            width={24}
            height={24}
          />
          <span className="text-[16px] font-semibold text-white">Continue with Wallet</span>
        </button>

        {/* Footer Links */}
        <div className="flex items-center gap-[16px] text-[14px] font-semibold text-black mt-auto" data-node-id="123:2219">
          <Link href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">Terms of use</Link>
        </div>
      </div>

      {/* Right Section - Decorative Background */}
      <div className="absolute left-[864px] top-[16px] right-0 h-[1085px] overflow-hidden" data-node-id="123:2222">
        {/* Background Image with Mask - with rounded corners and padding */}
        <div className="absolute inset-0 flex items-center justify-center p-[8px]" data-node-id="123:2223">
          <div 
            className="relative rounded-[24px] overflow-hidden"
            style={{ 
              width: '848px',
              height: '1085px',
              aspectRatio: '848/1085'
            }}
          >
            <Image
              src="/assets/Rectangle 33 - backgroud.png"
              alt="Background"
              fill
              className="object-cover"
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Central Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 px-8">
          <h2 className="text-[#020d5a] text-[36px] font-semibold leading-normal tracking-[-1.08px] whitespace-pre-line" data-node-id="123:2228">
            Where Audio Meets Art.{"\n"}Where Creators Meet  Sponsors.
          </h2>
        </div>

        {/* Floating Decorative Elements */}
        {/* Rectangle 6 - Rotated */}
        <div className="absolute left-[95px] top-[56px] w-[172px] h-[172px] rotate-[344.461deg] z-10" data-node-id="123:2229">
          <Image
            src="/assets/Rectangle 6.png"
            alt=""
            width={172}
            height={172}
            className="object-cover rounded-[8px]"
          />
        </div>

        {/* Rectangle 7 - Rotated */}
        <div className="absolute left-[366.96px] top-[759.87px] w-[114.694px] h-[114.694px] rotate-[7.653deg] blur-[0.5px] z-10" data-node-id="123:2230">
          <Image
            src="/assets/Rectangle 7.png"
            alt=""
            width={115}
            height={115}
            className="object-cover rounded-[8px]"
          />
        </div>

        {/* Rectangle 8 - Rotated */}
        <div className="absolute left-[648px] top-[869px] w-[102.83px] h-[102.83px] rotate-[151.001deg] scale-y-[-1] blur-[2px] z-10" data-node-id="123:2231">
          <Image
            src="/assets/Rectangle 8.png"
            alt=""
            width={103}
            height={103}
            className="object-cover rounded-[8px]"
          />
        </div>

        {/* Decorative Icons */}
        {/* 🎧 Headphones */}
        <div className="absolute left-[77.16px] top-[413.96px] w-[64.952px] h-[64.952px] rotate-[313.701deg] z-10" data-node-id="123:2240">
          <Image
            src="/assets/🎧.png"
            alt="Headphones"
            width={65}
            height={65}
            className="w-full h-full"
          />
        </div>

        {/* 🎹 Piano */}
        <div className="absolute left-[495.57px] top-[172px] z-10" data-node-id="123:2241">
          <span className="text-[51px] leading-normal">🎹</span>
        </div>

        {/* 🎙️ Microphone */}
        <div className="absolute left-[733.57px] top-[669px] z-10" data-node-id="123:2242">
          <span className="text-[51px] leading-normal">🎙️</span>
        </div>

        {/* 🎥 Camera */}
        <div className="absolute left-[608px] top-[321px] w-[52px] h-[52px] rotate-[327.836deg] z-10" data-node-id="123:2243">
          <Image
            src="/assets/🎥.png"
            alt="Camera"
            width={52}
            height={52}
            className="w-full h-full"
          />
        </div>

        {/* 📸 Camera with flash */}
        <div className="absolute left-[465.61px] top-[989.89px] z-10" data-node-id="123:2244">
          <span className="text-[67px] leading-normal">📸</span>
        </div>

        {/* 📱 Phone */}
        <div className="absolute left-[176.57px] top-[725px] z-10" data-node-id="123:2245">
          <span className="text-[51px] leading-normal">📱</span>
        </div>

        {/* 🖥️ Desktop Monitor */}
        <div className="absolute left-[66px] top-[996px] w-[69.296875px] h-[20px] rotate-[193.642deg] scale-y-[-1] z-10" data-node-id="123:2239">
          <span className="text-[70px] leading-normal">🖥️</span>
        </div>
      </div>
    </div>
  );
}

