"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Choose your Role, 2: Basic Info, 3: Content Details
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  // Basic Info form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    portfolioUrl: "",
    twitter: "",
    tiktok: "",
    followersCount: "",
    primaryContentLanguage: "",
  });

  // Content Details form fields
  const [contentDetails, setContentDetails] = useState({
    artStyle: "",
    toolsUsed: "",
    availableHours: "",
    priceRange: "",
  });

  const handleContinue = () => {
    if (step === 1 && selectedRole) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Navigate to Explore page after completing onboarding
      router.push("/explore");
    }
  };


  const roles = [
    {
      id: "podcaster",
      name: "Podcaster/YouTuber",
      description: "I create audio/video content",
    },
    {
      id: "visual-artist",
      name: "Visual Artist",
      description: "I create digital/traditional art",
    },
    {
      id: "musician",
      name: "Musician",
      description: "I create music",
    },
    {
      id: "3d-designer",
      name: "3D/Motion Designer",
      description: "I create animations",
    },
  ];

  return (
    <>
      {/* Background - Fixed position to cover entire screen */}
      <div 
        className="fixed inset-0 z-0" 
        data-node-id="123:827"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
      >
        <img
          src="/assets/onboard background.png"
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      
      <div className="relative w-[1728px] min-h-screen bg-transparent overflow-hidden" data-node-id="123:815">

      {/* Step 1: Choose your Role */}
      {step === 1 && (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[885px] h-[530px] bg-white rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] z-10" data-node-id="123:831">
        {/* Group 1171277230 - Choose your Role Section */}
        <div className="relative w-full h-full" data-node-id="123:832">
          {/* Title */}
          <div className="absolute left-1/2 top-[56px] -translate-x-1/2" data-node-id="123:833">
            <h1 className="text-[24px] font-medium text-black leading-normal text-center whitespace-pre" data-node-id="123:833">
              Choose your Role
            </h1>
          </div>

          {/* Role Selection */}
          <div className="absolute left-1/2 top-[124px] -translate-x-1/2 flex flex-col items-start" data-node-id="123:834">
            {roles.map((role, index) => (
              <div
                key={role.id}
                className="flex items-center relative w-full cursor-pointer"
                onClick={() => setSelectedRole(role.id)}
                data-node-id={index === 0 ? "123:835" : index === 1 ? "123:842" : index === 2 ? "123:849" : "123:856"}
              >
                {/* Checkbox */}
                <div className="flex items-center justify-center w-[48px] h-[48px] p-[4px] shrink-0" data-name="Checkboxes" data-node-id={index === 0 ? "123:836" : index === 1 ? "123:843" : index === 2 ? "123:850" : "123:857"}>
                  <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full p-[11px] shrink-0" data-name="state-layer" data-node-id={index === 0 ? "123:837" : index === 1 ? "123:844" : index === 2 ? "123:851" : "123:858"}>
                    <div
                      className={`w-[18px] h-[18px] rounded-[2px] border-2 shrink-0 ${
                        selectedRole === role.id
                          ? "bg-[#00aaff] border-[#00aaff]"
                          : "border-[#cac4d0]"
                      } flex items-center justify-center`}
                      data-name="container"
                      data-node-id={index === 0 ? "123:838" : index === 1 ? "123:845" : index === 2 ? "123:852" : "123:859"}
                    >
                      {selectedRole === role.id && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Role Text */}
                <div className="flex items-center gap-[8px] text-[18px] font-medium text-black leading-normal whitespace-pre shrink-0" data-node-id={index === 0 ? "123:839" : index === 1 ? "123:846" : index === 2 ? "123:853" : "123:860"}>
                  <span className="shrink-0" data-node-id={index === 0 ? "123:840" : index === 1 ? "123:847" : index === 2 ? "123:854" : "123:861"}>
                    {role.name}
                  </span>
                  <span className="opacity-60 shrink-0" data-node-id={index === 0 ? "123:841" : index === 1 ? "123:848" : index === 2 ? "123:855" : "123:862"}>
                    "{role.description}"
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button - Between role list and progress bar */}
          <div className="absolute left-1/2 top-[340px] -translate-x-1/2 w-[466px] h-[64px]" data-node-id="123:863">
            <button
              onClick={handleContinue}
              className={`w-full h-full rounded-[16px] text-[16px] font-semibold text-white transition-opacity ${
                selectedRole ? "bg-[#00aaff] opacity-100 hover:opacity-90" : "bg-[#00aaff] opacity-40 cursor-not-allowed"
              }`}
              disabled={!selectedRole}
              data-node-id="123:864"
            >
              <span className="text-center leading-[18px] tracking-[-0.16px]" data-node-id="123:865">
                Continue
              </span>
            </button>
          </div>

          {/* Bottom Progress Bar - At the bottom of the card */}
          <div className="absolute left-1/2 bottom-[8px] -translate-x-1/2 w-[853px] h-[68px] z-10" data-node-id="123:866">
            {/* Background */}
            <div className="absolute inset-0 bg-[#ebebeb] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)]" data-node-id="123:867"></div>
            
            {/* Active Progress - Changes based on step */}
            <div className={`absolute left-0 top-0 h-[68px] bg-[#00aaff] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)] transition-all duration-300 ${
              Number(step) === 1 ? 'w-[168px]' : Number(step) === 2 ? 'w-[384px]' : 'w-[604px]'
            }`} data-node-id="123:868"></div>

            {/* Logo */}
            <div className="absolute left-[34px] top-1/2 -translate-y-1/2" data-name="AthenaX logo onboarding" data-node-id="123:869">
              <Image
                src="/assets/Login/Group 2.svg"
                alt="Athena X"
                width={99}
                height={20}
                className="object-contain"
              />
            </div>

            {/* Divider Lines */}
            <div className="absolute left-[168px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:875"></div>
            <div className="absolute left-[384px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:876"></div>
            <div className="absolute left-[604px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:877"></div>

            {/* Step Labels */}
            <div className={`absolute left-[176px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
              Number(step) === 1 ? 'text-white' : 'text-black'
            }`} data-node-id="123:881">
              Choose your Role
            </div>
            <div className={`absolute left-[392px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
              Number(step) === 2 ? 'text-white' : 'text-black'
            }`} data-node-id="123:882">
              Basic Info
            </div>
            <div className="absolute left-[612px] top-[19px] text-[12px] font-normal text-black leading-[18px] tracking-[-0.12px]" data-node-id="123:883">
              Content Details
            </div>

            {/* Progress Indicators (vertical lines) - Active step - Moved down to avoid text overlap */}
            <div className={`absolute left-[176px] top-[40px] flex gap-[8px]`}>
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 1 ? 'border-white' : 'border-black'}`} data-node-id={`123:${884 + i}`}></div>
              ))}
            </div>
            {/* Progress Indicators - Inactive steps - Moved down to avoid text overlap */}
            <div className={`absolute left-[392px] top-[40px] flex gap-[8px]`}>
              {[...Array(25)].map((_, i) => (
                <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 2 ? 'border-white' : 'border-black opacity-30'}`} data-node-id={`123:${909 + i}`}></div>
              ))}
            </div>
            <div className="absolute left-[612px] top-[40px] flex gap-[8px]">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-0 h-[10px] border-l border-black opacity-30" data-node-id={`123:${934 + i}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Step 2: Basic Info */}
      {step === 2 && (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[885px] h-[961px] bg-white rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] z-10" data-node-id="123:1301">
        {/* Title - Moved up to center between top and progress bar */}
        <div className="absolute left-1/2 top-[80px] -translate-x-1/2" data-node-id="123:1318">
          <h1 className="text-[24px] font-medium text-black leading-normal text-center whitespace-pre" data-node-id="123:1318">
            Basic Info
          </h1>
        </div>

        {/* Form Fields - Moved up */}
        <div className="absolute left-1/2 top-[140px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1302">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[220px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1304">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[300px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1306">
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[380px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1308">
          <input
            type="url"
            placeholder="Portfolio URL"
            value={formData.portfolioUrl}
            onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[460px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1310">
          <input
            type="text"
            placeholder="Twitter"
            value={formData.twitter}
            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[540px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1312">
          <input
            type="text"
            placeholder="TikTok"
            value={formData.tiktok}
            onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[620px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1314">
          <input
            type="text"
            placeholder="Followers Count"
            value={formData.followersCount}
            onChange={(e) => setFormData({ ...formData, followersCount: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        <div className="absolute left-1/2 top-[700px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1316">
          <input
            type="text"
            placeholder="Primary Content Language"
            value={formData.primaryContentLanguage}
            onChange={(e) => setFormData({ ...formData, primaryContentLanguage: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        {/* Continue Button */}
        <div className="absolute left-1/2 top-[780px] -translate-x-1/2 w-[466px] h-[64px]" data-node-id="123:1319">
          <button
            onClick={handleContinue}
            className="w-full h-full rounded-[16px] text-[16px] font-semibold text-white bg-[#00aaff] opacity-100 hover:opacity-90 transition-opacity"
            data-node-id="123:1320"
          >
            <span className="text-center leading-[18px] tracking-[-0.16px]">
              Continue
            </span>
          </button>
        </div>

        {/* Bottom Progress Bar - At the bottom of the card */}
        <div className="absolute left-1/2 bottom-[8px] -translate-x-1/2 w-[853px] h-[68px] z-10" data-node-id="123:866">
          {/* Background */}
          <div className="absolute inset-0 bg-[#ebebeb] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)]" data-node-id="123:867"></div>
          
          {/* Active Progress - Changes based on step */}
          <div className={`absolute left-0 top-0 h-[68px] bg-[#00aaff] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)] transition-all duration-300 ${
            Number(step) === 1 ? 'w-[168px]' : 'w-[384px]'
          }`} data-node-id="123:868"></div>

          {/* Logo */}
          <div className="absolute left-[34px] top-1/2 -translate-y-1/2" data-name="AthenaX logo onboarding" data-node-id="123:869">
            <Image
              src="/assets/Login/Group 2.svg"
              alt="Athena X"
              width={99}
              height={20}
              className="object-contain"
            />
          </div>

          {/* Divider Lines */}
          <div className="absolute left-[168px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:875"></div>
          <div className="absolute left-[384px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:876"></div>
          <div className="absolute left-[604px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:877"></div>

          {/* Step Labels */}
          <div className={`absolute left-[176px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 1 ? 'text-white' : 'text-black'
          }`} data-node-id="123:881">
            Choose your Role
          </div>
          <div className={`absolute left-[392px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 2 ? 'text-white' : 'text-black'
          }`} data-node-id="123:882">
            Basic Info
          </div>
          <div className={`absolute left-[612px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 3 ? 'text-white' : 'text-black'
          }`} data-node-id="123:883">
            Content Details
          </div>

          {/* Progress Indicators (vertical lines) - Active step - Moved down to avoid text overlap */}
          <div className={`absolute left-[176px] top-[40px] flex gap-[8px]`}>
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 1 ? 'border-white' : 'border-black'}`} data-node-id={`123:${884 + i}`}></div>
            ))}
          </div>
          {/* Progress Indicators - Inactive steps - Moved down to avoid text overlap */}
          <div className={`absolute left-[392px] top-[40px] flex gap-[8px]`}>
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 2 ? 'border-white' : 'border-black opacity-30'}`} data-node-id={`123:${909 + i}`}></div>
            ))}
          </div>
          <div className="absolute left-[612px] top-[40px] flex gap-[8px]">
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 3 ? 'border-white' : 'border-black opacity-30'}`} data-node-id={`123:${934 + i}`}></div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Step 3: Content Details */}
      {step === 3 && (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[885px] h-[657px] bg-white rounded-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)] z-10" data-node-id="123:1743">
        {/* Title - Moved up */}
        <div className="absolute left-1/2 top-[80px] -translate-x-1/2" data-node-id="123:1754">
          <h1 className="text-[24px] font-medium text-black leading-normal text-center whitespace-pre" data-node-id="123:1754">
            Content Details
          </h1>
        </div>

        {/* Art Style - Dropdown - Moved up */}
        <div className="absolute left-1/2 top-[140px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center justify-between" data-node-id="123:1751">
          <input
            type="text"
            placeholder="Art Style"
            value={contentDetails.artStyle}
            onChange={(e) => setContentDetails({ ...contentDetails, artStyle: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
          <span className="text-[#a5a5a5] text-[16px] shrink-0" data-node-id="123:1753">▼</span>
        </div>

        {/* Tools Used - Dropdown - Moved up */}
        <div className="absolute left-1/2 top-[220px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center justify-between" data-node-id="123:1744">
          <input
            type="text"
            placeholder="Tools Used"
            value={contentDetails.toolsUsed}
            onChange={(e) => setContentDetails({ ...contentDetails, toolsUsed: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
          <span className="text-[#a5a5a5] text-[16px] shrink-0" data-node-id="123:1746">▼</span>
        </div>

        {/* Available hours per week - Moved up */}
        <div className="absolute left-1/2 top-[300px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1747">
          <input
            type="text"
            placeholder="Available hours per week"
            value={contentDetails.availableHours}
            onChange={(e) => setContentDetails({ ...contentDetails, availableHours: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        {/* Price Range for Comissions - Moved up */}
        <div className="absolute left-1/2 top-[380px] -translate-x-1/2 w-[466px] h-[64px] border border-[#a5a5a5] rounded-[10px] px-[16px] py-[20px] flex items-center" data-node-id="123:1749">
          <input
            type="text"
            placeholder="Price Range for Comissions"
            value={contentDetails.priceRange}
            onChange={(e) => setContentDetails({ ...contentDetails, priceRange: e.target.value })}
            className="w-full h-full border-none outline-none text-[16px] font-semibold text-[#a5a5a5] placeholder:text-[#a5a5a5] bg-transparent"
          />
        </div>

        {/* Continue Button - Moved up */}
        <div className="absolute left-1/2 top-[460px] -translate-x-1/2 w-[466px] h-[64px]" data-node-id="123:1320">
          <button
            onClick={handleContinue}
            className="w-full h-full rounded-[16px] text-[16px] font-semibold text-white bg-[#00aaff] opacity-100 hover:opacity-90 transition-opacity"
            data-node-id="123:1320"
          >
            <span className="text-center leading-[18px] tracking-[-0.16px]">
              Continue
            </span>
          </button>
        </div>

        {/* Bottom Progress Bar - At the bottom of the card */}
        <div className="absolute left-1/2 bottom-[8px] -translate-x-1/2 w-[853px] h-[68px] z-10" data-node-id="123:1756">
          {/* Background */}
          <div className="absolute inset-0 bg-[#ebebeb] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)]" data-node-id="123:867"></div>
          
          {/* Active Progress - Changes based on step */}
          <div className={`absolute left-0 top-0 h-[68px] bg-[#00aaff] rounded-[8px] shadow-[0px_-4px_4px_0px_inset_rgba(255,255,255,0.25)] transition-all duration-300 ${
            Number(step) === 1 ? 'w-[168px]' : Number(step) === 2 ? 'w-[384px]' : 'w-[604px]'
          }`} data-node-id="123:1757"></div>

          {/* Logo */}
          <div className="absolute left-[34px] top-1/2 -translate-y-1/2" data-name="AthenaX logo onboarding" data-node-id="123:1758">
            <Image
              src="/assets/Login/Group 2.svg"
              alt="Athena X"
              width={99}
              height={20}
              className="object-contain"
            />
          </div>

          {/* Divider Lines */}
          <div className="absolute left-[168px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:875"></div>
          <div className="absolute left-[384px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:876"></div>
          <div className="absolute left-[604px] top-[20px] w-0 h-[36px] border-l border-[#cac4d0]" data-node-id="123:877"></div>

          {/* Step Labels */}
          <div className={`absolute left-[176px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 1 ? 'text-white' : 'text-black'
          }`} data-node-id="123:881">
            Choose your Role
          </div>
          <div className={`absolute left-[392px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 2 ? 'text-white' : 'text-black'
          }`} data-node-id="123:882">
            Basic Info
          </div>
          <div className={`absolute left-[612px] top-[19px] text-[12px] font-normal leading-[18px] tracking-[-0.12px] ${
            Number(step) === 3 ? 'text-white' : 'text-black'
          }`} data-node-id="123:883">
            Content Details
          </div>

          {/* Progress Indicators (vertical lines) - Active step - Moved down to avoid text overlap */}
          <div className={`absolute left-[176px] top-[40px] flex gap-[8px]`}>
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 1 ? 'border-white' : 'border-black'}`} data-node-id={`123:${884 + i}`}></div>
            ))}
          </div>
          {/* Progress Indicators - Inactive steps - Moved down to avoid text overlap */}
          <div className={`absolute left-[392px] top-[40px] flex gap-[8px]`}>
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 2 ? 'border-white' : 'border-black opacity-30'}`} data-node-id={`123:${909 + i}`}></div>
            ))}
          </div>
          <div className={`absolute left-[612px] top-[40px] flex gap-[8px]`}>
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`w-0 h-[10px] border-l ${Number(step) === 3 ? 'border-white' : 'border-black opacity-30'}`} data-node-id={`123:${934 + i}`}></div>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
    </>
  );
}

