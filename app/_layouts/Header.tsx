"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import logo2 from "../../public/images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/svgs/profile";
import Search from "@/svgs/Search";
import Hamburger from "@/svgs/Hamburger";
import Close from "@/svgs/Close";

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
      <div className="bg-[#B2181E] w-full h-15 flex items-center justify-between px-2 md:hidden ">
        <Image src={logo2} alt="logo" height={40} className="object-contain" />
        <Hamburger
          onClick={() => setMenu(true)}
          className="h-8 w-8 md:hidden text-gray-200"
        />
        <div
          className={`bg-white/70 fixed h-screen max-md:w-1/3 max-sm:w-[40%] z-50 top-0 right-0 
            transform transition-transform duration-300 ease-in-out
            ${menu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div>
            <Close
              onClick={() => setMenu(false)}
              className="h-8 m-2 absolute top-1 right-2 text-[#393939]"
            />
          </div>

          <div className="flex flex-col text-[#393939] px-7 py-15 text-xl gap-2">
            <Link onClick={() => setMenu(false)} href="/">
              Product
            </Link>
            <Link onClick={() => setMenu(false)} href="/">
              Services
            </Link>
            <Link onClick={() => setMenu(false)} href="/">
              Brands
            </Link>
            <Link onClick={() => setMenu(false)} href="/">
              Awards
            </Link>
            <Link onClick={() => setMenu(false)} href="/">
              About Us
            </Link>
            <Link onClick={() => setMenu(false)} href="/">
              Stores
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
