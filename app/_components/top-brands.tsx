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
    <div className="flex flex-col bg-[#B2181E] py-13 px-15 pb-0">
      <div className="flex w-full justify-between items-center pb-13">
        <div className="text-5xl items-start font-bold text-white">
          TOP BRANDS
        </div>
        <div className="flex items-center gap-5">
          <BoxArrow2
            className={enableLeft ? `h-12 rotate-180 cursor-pointer text-gray-400/40` : `h-12 rotate-180 cursor-pointer hover:text-[#393939]`}
            onClick={handlePrev}
          />
          <BoxArrow2 className={enableRight ? `h-12 cursor-pointer text-gray-400/40` : `h-12 cursor-pointer hover:text-[#393939]`} onClick={handleNext} />
        </div>
      </div>

      <div className="flex">
          <div className="relative h-150 w-[50%]">
            <Image
              src={index == 0 ? brands[0].image : brands[2].image}
              alt={index == 0 ? brands[0].name : brands[2].name}
              fill
              className={`object-cover rotate-y-180 rounded-tr-3xl`}
            />
            <div className="flex items-center justify-between absolute bottom-10 left-10 w-[90%]">
              <div className="text-3xl font-bold text-white">{index == 0 ? brands[0].name : brands[2].name}</div>
              <BoxArrow className="rotate-90 h-15" />
            </div>
          </div>
          <div className="relative h-150 w-[50%]">
            <Image
              src={index == 0 ? brands[1].image : brands[3].image}
              alt={index == 0 ? brands[1].name : brands[3].name}
              fill
              className={`object-cover rounded-tr-3xl`}
            />
            <div className="flex items-center justify-between absolute bottom-10 left-10 w-[90%]">
              <div className="text-3xl font-bold text-white">{index == 0 ? brands[1].name : brands[3].name}</div>
              <BoxArrow className="rotate-90 h-15" />
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default TopBrands;
