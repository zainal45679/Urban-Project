import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/svgs/profile";
import Search from "@/svgs/Search";

const Header = () => {
  return (
    <div className="px-15 py-12.5">
      <div className="w-full h-22 flex items-center justify-between px-8 py-8 bg-white rounded-[20px]">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>

        <div>
          <div className="flex gap-8 text-[#2E2E2E] text-sm font-light cursor-pointer hover:text-gray-600">
            <div>Products</div>
            <div>Services</div>
            <div>Brands</div>
            <div>Awards</div>
            <div>About Us</div>
            <div>Stores</div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-8">
            <Search className="w-6 h-6 text-[#2E2E2E]" />
            <Profile className="w-6 h-6 text-[#2E2E2E]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
