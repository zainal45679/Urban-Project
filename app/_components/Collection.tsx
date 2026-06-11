import React from "react";
import Image from "next/image";
import img1 from "../../public/images/c1.png";
import img2 from "../../public/images/c2.png";
import BoxArrow from "@/svgs/Box-Arrow";

const Collection = () => {
  return (
    <div className="flex flex-col bg-[#ECEEF0] clamp-[py,4,12.5] clamp-[px,2,15]">
      <div className="clamp-[text,23px,50px] max-md:text-center items-start font-bold text-black clamp-[pb,2,13]">
        EXPLORE COLLECTIONS
      </div>
      <div className="flex max-md:flex-col">
        <div className="relative md:h-110 lg:h-160 h-60 md:w-[50%]">
          <Image
            src={img1}
            alt="logo"
            fill
            className="object-cover object-[20%_80%]  md:rounded-l-3xl max-md:rounded-t-xl"
          />
          <div className="absolute lg:top-10 top-3 lg:left-10 left-3 font-semibold clamp-[text,15px,20px] text-black z-10">FOR MEN</div>
          <div className="flex max-md:gap-2 items-center md:justify-between justify-start absolute lg:bottom-10 bottom-3 lg:left-10 left-3 w-[90%]">
            <div className="clamp-[text,15px,35px] lg:font-bold">VIEW COLLECTION</div>
            <div>
              <BoxArrow className="rotate-90 lg:h-15 md:h-8 h-4" />
            </div>
          </div>
        </div>
        <div className="relative md:h-110 lg:h-160 h-60 md:w-[50%]">
          <Image
            src={img2}
            alt="logo"
            fill
            className="object-cover object-[80%_20%]  md:rounded-r-3xl max-md:rounded-b-xl"
          />
          <div className="absolute lg:top-10 top-3 lg:left-10 left-3 font-semibold clamp-[text,15px,20px] text-black z-10">FOR WOMEN</div>
          <div className="flex max-md:gap-2 items-center md:justify-between justify-end absolute lg:bottom-10 bottom-3 lg:left-10 left-3 w-[90%]">
            <div className="clamp-[text,15px,35px] text-shadow-black lg:font-bold">
              VIEW COLLECTION
            </div>
            <div>
              <BoxArrow className="rotate-90 lg:h-15 md:h-8 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
