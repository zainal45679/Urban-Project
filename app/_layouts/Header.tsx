"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/svgs/profile";
import Search from "@/svgs/Search";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="flex w-full gap-3 clamp-[px,0,15] clamp-[py,0,12.5] max-md:hidden">
        <div className="w-full flex items-center justify-between clamp-[p,0,8] bg-white rounded-[20px]">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="object-contain clamp-[h,5px,60px] w-fit"
            />
          </Link>
          <div>
            <div className="flex clamp-[gap,3,8] text-[#2E2E2E] clamp-[text,5px,20px] font-light cursor-pointer hover:text-gray-600">
              <div>Products</div>
              <div>Services</div>
              <div>Brands</div>
              <div>Awards</div>
              <div>About Us</div>
              <div>Stores</div>
            </div>
          </div>
          <div>
            <div className="flex items-center clamp-[gap,3,8]">
              <Search className="w-6 h-6 text-[#2E2E2E]" />
              <Profile className="w-6 h-6 text-[#2E2E2E]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-"></div>
    </>
  );
};

export default Header;
