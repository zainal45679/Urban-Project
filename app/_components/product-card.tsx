import React from "react";
import Image from "next/image";
import Eye from "@/svgs/Eye";

type products = {
  id: number;
  image: any;
  name: string;
  model: string;
  price: string;
  offerPrice?: any;
  type: string;
};

const ProductCard = ({
  id,
  image,
  name,
  model,
  price,
  offerPrice,
  type,
}: products) => {
  return (
    <div className="bg-white md:rounded-3xl rounded-xl">
      <div className={"p-2 flex flex-col gap-1"}>
        <div
          className={
            type === "product"
              ? "bg-gray-100 md:rounded-2xl rounded-lg flex items-center clamp-[h,40,80] justify-center relative group "
              : "relative group "
          }
        >
          <Image
            src={image}
            alt="product"
            className={
              type === "product"
                ? "object-contain p-2"
                : "object-contain md:rounded-2xl rounded-lg"
            }
          />
          <div className="bg-white rounded-full absolute bottom-3 left-23 text-xs text-black py-1 px-3 opacity-0 group-hover:opacity-100 duration-300">
            <div className="flex gap-2">
              <Eye className="h-4"/>
              <div>View Product</div>
            </div>
          </div>
          {type == "product" && (
            <div className="bg-[#CC0033] clamp-[px,2,4] clamp-[py,1,2] w-fit md:rounded-br-2xl rounded-br-lg md:rounded-tl-2xl rounded-tl-lg clamp-[text,10px,15px] font-semibold absolute top-0 left-0">
              Sale
            </div>
          )}
        </div>

        <div className="text-gray-500 font-semibold clamp-[pt,0,3] clamp-[text,10px,15px]">{name}</div>
        <div className="text-black font-semibold clamp-[pb,0,2] clamp-[text,10px,15px]">{model}</div>
      </div>

      <div className="flex justify-center items-center bg-[#393939] md:rounded-b-3xl rounded-b-xl">
        <div className="text-white font-semibold clamp-[text,13px,20px] clamp-[p,1,3]">
          {type == "product" ? offerPrice : price}
        </div>
        <div className="clamp-[text,9px,15px] line-through">{type === "product" && price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
