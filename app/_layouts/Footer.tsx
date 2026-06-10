import React from "react";
import logo from "../../public/images/logo2.png";
import Image from "next/image";
import Facebook from "@/svgs/Facebook";
import Instagram from "@/svgs/Instagram";
import Twitter from "@/svgs/Twitter";

const Footer = () => {
  return (
    <div className="px-15 absolute w-full">
      <div className="flex justify-between items-center bg-[#B2181E] w-full rounded-t-[50] p-10 pb-20 relative -bottom-12 -z-10">
        <div className="text-7xl font-semibold text-white">
          THE EYEWEAR <br /> YOU NEED
        </div>
        <div>
          <Image
            src={logo}
            alt="logo"
            height={100}
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-[#393939] p-10 flex justify-between w-full rounded-t-[50] z-10 gap-10 pr-20">
        <div className="w-[40%] flex flex-col gap-3 ">
          <div className="text-4xl font-semibold">Order Online</div>
          <div className="text-lg font-medium">
            Find your perfect eyewear match at Emirates Optical Store's online
            platform. With a wide range of high-quality options from top brands,
            shopping for eyewear has never been easier. Shop now and elevate
            your style
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="text-2xl font-semibold">Categories</div>
          <div className="text-lg font-medium flex flex-col gap-3">
            <ul>SUNGLASSES</ul>
            <ul>FRAMES</ul>
            <ul>OPHTHALMIC LENS</ul>
            <ul>CONTACT LENS</ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="text-2xl font-semibold">Company</div>
          <div className="text-lg font-medium flex flex-col gap-3">
            <ul>About</ul>
            <ul>Contact</ul>
            <ul>Privacy Policy</ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="text-2xl font-semibold">Follow us</div>
          <div className="flex gap-3">
            <Facebook/>
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
