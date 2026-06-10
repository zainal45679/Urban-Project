import React from "react";
import Image from "next/image";
import img1 from "../../public/images/c1.png";
import img2 from "../../public/images/c2.png";
import BoxArrow from "@/svgs/Box-Arrow";

const Collection = () => {
  return (
    <div className="flex flex-col bg-[#ECEEF0] py-13 px-15">
      <div className="text-5xl items-start font-bold text-black pb-13">
        EXPLORE COLLECTIONS
      </div>
      <div className="flex">
        <div className="relative h-160 w-[50%]">
          <Image
            src={img1}
            alt="logo"
            fill
            className="object-cover object-[20%_80%]  rounded-l-3xl"
          />
          <div className="absolute top-10 left-10 font-semibold text-xl text-black z-10">FOR MEN</div>
          <div className="flex items-center justify-between absolute bottom-10 left-10 w-[90%]">
            <div className="text-3xl  font-bold">VIEW COLLECTION</div>
            <div>
              <BoxArrow className="rotate-90 h-15" />
            </div>
          </div>
        </div>
        <div className="relative h-160 w-[50%]">
          <Image
            src={img2}
            alt="logo"
            fill
            className="object-cover object-[80%_20%]  rounded-r-3xl"
          />
          <div className="absolute top-10 left-10 font-semibold text-xl text-black z-10">FOR WOMEN</div>
          <div className="flex items-center justify-between absolute bottom-10 left-10 w-[90%]">
            <div className="text-3xl text-shadow-black font-bold">
              VIEW COLLECTION
            </div>
            <div>
              <BoxArrow className="rotate-90 h-15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
