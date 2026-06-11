import React from "react";
import Image from "next/image";
import offer from "../../public/images/offer.png";
import ProductCard from "./product-card";
import img1 from "../../public/images/p1.png";
import img2 from "../../public/images/p2.png";
import img3 from "../../public/images/p3.png";
import img4 from "../../public/images/p4.png";

const products = [
  {
    image: img1,
    name: "John Jacobs",
    model: "Grey Full Rim Wayfarer",
    price: "748.00 AED",
    offererPrice: " 718.00 AED",
  },
  {
    image: img2,
    name: " John Jacobs",
    model: "Black Tortoise Full Rim",
    price: "748.00 AED",
    offererPrice: " 718.00 AED",
  },
  {
    image: img3,
    name: "Dolce and Gabbana",
    model: "Square Black Sunglasses",
    price: "248.00 AED",
    offererPrice: "225.00 AED",
  },
  {
    image: img4,
    name: "Ray-Ban",
    model: "Ray-Ban RB 4287 6018G",
    price: "748.00 AED",
    offererPrice: " 718.00 AED",
  },
];

const Offers = () => {
  return (
    <div className="flex flex-col items-center clamp-[py,2,12.5] clamp-[px,3,15]">
      <div className="relative w-full clamp-[h,20,50]">
        <Image
          src={offer}
          alt="offer"
          fill
          className="object-cover object-[28%_72%] md:rounded-3xl rounded-xl"
        />
        <div className="absolute inset-0 bg-[#CC0033] mix-blend-multiply md:rounded-3xl rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-between p-10">
          <h1 className="clamp-[text,20px,80px] font-extrabold text-white">
            BUY 1 GET 1 FREE
          </h1>

          <button className="bg-white text-[#CC0033] hover:bg-gray-100 font-semibold clamp-[px,2,5] clamp-[py,1,3] clamp-[text,10px,25px] md:rounded-2xl rounded-sm">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 clamp-[gap,2,6] max-lg:grid-cols-2 clamp-[mt,2,10] w-full justify-center">
        {products.map((item, i) => (
          <ProductCard
            type="product"
            id={i}
            key={i}
            image={item.image}
            name={item.name}
            model={item.model}
            offerPrice={item.offererPrice}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
