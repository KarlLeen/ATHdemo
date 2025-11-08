import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-[42px] left-[567px] z-50" data-node-id="40:66">
      <div className="bg-[#020624] flex items-center gap-[28px] pl-[18px] pr-[16px] py-[15px] rounded-[56px] shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/Athenax logo.svg"
            alt="Athena Logo"
            width={120}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-white text-sm font-medium">
          <a href="#" className="hover:opacity-80 transition-opacity">Gallery</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Battles</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Mural</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Echo Timeline</a>
        </div>

        {/* Sign In Button */}
        <button className="bg-white text-[#010b43] px-3 py-1 rounded-[40px] text-sm font-semibold hover:opacity-90 transition-opacity">
          Sign In
        </button>
      </div>
    </nav>
  );
}

