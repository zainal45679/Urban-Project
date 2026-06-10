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
    <div className="w-79 bg-white rounded-3xl">
      <div className={"p-2 flex flex-col gap-1"}>
        <div
          className={
            type === "product"
              ? "bg-gray-100 rounded-2xl flex items-center min-h-80 justify-center relative group "
              : "relative group "
          }
        >
          <Image
            src={image}
            alt="product"
            width={300}
            height={200}
            className={
              type === "product"
                ? "object-contain p-2"
                : "object-contain rounded-2xl"
            }
          />
          <div className="bg-white rounded-full absolute bottom-3 left-23 text-xs text-black py-1 px-3 opacity-0 group-hover:opacity-100 duration-300">
            <div className="flex gap-2">
              <Eye className="h-4"/>
              <div>View Product</div>
            </div>
          </div>
          {type == "product" && (
            <div className="bg-[#CC0033] px-4 py-2 w-fit rounded-br-2xl rounded-tl-2xl text-sm font-semibold absolute top-0 left-0">
              Sale
            </div>
          )}
        </div>

        <div className="text-gray-500 font-semibold pt-3">{name}</div>
        <div className="text-black font-semibold pb-2">{model}</div>
      </div>

      <div className="flex justify-center items-center bg-[#393939] rounded-b-3xl">
        <div className="text-white font-semibold text-xl p-3">
          {type == "product" ? offerPrice : price}
        </div>
        <div className="text-xs line-through">{type === "product" && price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
