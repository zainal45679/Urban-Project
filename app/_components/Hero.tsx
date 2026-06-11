import React from "react";
import Image from "next/image";
import banner from "../../public/images/image 14.png";
import textimg from "../../public/images/yr.png"
import "../globals.css";
import Arrow from "@/svgs/Arrow";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full clamp-[px,0,15]">
        <div className="relative w-full max-md:h-100">
          <Image
            src={banner}
            alt="logo"
            className="object-cover max-md:object-[98%_2%] md:scale-100 max-md:h-100 max-md:rounded-b-xl w-full relative"
          />
          <div className="bg-[#232321] w-fit clamp-[p,2,5] clamp-[text,5px,18px] font-bold absolute top-1/2 left-0 origin-top-left -rotate-90 rounded-b-2xl max-md:hidden">
            Ray-ban cool collection
          </div>
          <Image src={textimg} alt="logo" className="absolute bottom-2 sm:hidden -right-2 h-45 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
