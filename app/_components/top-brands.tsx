"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../public/images/br1.jpg";
import img2 from "../../public/images/br2.png";
import img3 from "../../public/images/br3.png";
import img4 from "../../public/images/br4.png";
import BoxArrow from "@/svgs/Box-Arrow";
import BoxArrow2 from "@/svgs/Box-Arrow-2";

const TopBrands = () => {
  const brands = [
      { image: img1, name: "POLICE" },
      { image: img2, name: "GUCCI" },
      { image: img4, name: "PRADA" },
      { image: img3, name: "DOLCE & GABBANA" },
  ];

  const [index, setIndex] = useState(0);
  const [enableLeft, setEnableLeft] = useState(true)
  const [enableRight, setEnableRight] = useState(false)

  const handleNext = () => {
    if(index == 0){
      setIndex(1)
      setEnableLeft(false)
      setEnableRight(true)
    }
  };

  const handlePrev = () => {
    if(index == 1){
      setIndex(0)
      setEnableLeft(true)
      setEnableRight(false)
    }
  };


  return (
    <div className="flex flex-col bg-[#B2181E] clamp-[py,4,12.5] clamp-[px,2,15] md:pb-0">
      <div className="flex w-full justify-between items-center clamp-[pb,2,13] max-md:px-4">
        <div className="clamp-[text,28px,50px] items-start font-bold text-white">
          TOP BRANDS
        </div>
        <div className="flex items-center lg:gap-5 gap-2">
          <BoxArrow2
            className={enableLeft ? `lg:h-12 md:h-10 h-8 rotate-180 cursor-pointer text-gray-400/40` : `lg:h-12 md:h-10 h-8 rotate-180 cursor-pointer hover:text-[#393939]`}
            onClick={handlePrev}
          />
          <BoxArrow2 className={enableRight ? `lg:h-12 md:h-10 h-8 cursor-pointer text-gray-400/40` : `lg:h-12 md:h-10 h-8 cursor-pointer hover:text-[#393939]`} onClick={handleNext} />
        </div>
      </div>

      <div className="flex max-md:flex-col">
          <div className="relative md:h-110 lg:h-150 h-60 md:w-[50%]">
            <Image
              src={index == 0 ? brands[0].image : brands[2].image}
              alt={index == 0 ? brands[0].name : brands[2].name}
              fill
              className={`object-cover rotate-y-180 md:rounded-tr-3xl max-md:rounded-t-xl`}
            />
            <div className="flex items-center md:justify-between justify-end absolute lg:bottom-10 bottom-3 lg:left-10 left-3  w-[90%]">
              <div className="clamp-[text,15px,35px] lg:font-bold font-semibold text-white">{index == 0 ? brands[0].name : brands[2].name}</div>
              <BoxArrow className="rotate-90 lg:h-15 md:h-8 h-4" />
            </div>
          </div>
          <div className="relative md:h-110 lg:h-150 h-60 md:w-[50%]">
            <Image
              src={index == 0 ? brands[1].image : brands[3].image}
              alt={index == 0 ? brands[1].name : brands[3].name}
              fill
              className={`object-cover md:rounded-tr-3xl max-md:rounded-b-xl`}
            />
            <div className="flex items-center md:justify-between justify-end absolute lg:bottom-10 bottom-3 lg:left-10 left-3  w-[90%]">
              <div className="clamp-[text,15px,35px] lg:font-bold font-semibold text-white">{index == 0 ? brands[1].name : brands[3].name}</div>
              <BoxArrow className="rotate-90 lg:h-15 md:h-8 h-4" />
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default TopBrands;
