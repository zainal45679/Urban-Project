import React from "react";
import Image from "next/image";
import banner from "../../public/images/image 14.png";
import "../globals.css";
import Arrow from "@/svgs/Arrow";


const Hero = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" relative w-ful px-15">
        <Image
          src={banner}
          alt="logo"
          width={1350}
          height={200}
          className="object-contain relative"
        />
        <div className="bg-[#232321] w-fit p-5 text-[16px] font-bold absolute top-45 -left-6.5 rotate-270 rounded-b-2xl">
          Ray-ban cool collection
        </div>
        <div className="animate-pulse  absolute right-20 bottom-10">
            <Arrow className="text-white h-20"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
