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
    model: "Grey Full Rim Wayfarer Sunglasses",
    price: "748.00 AED",
    offererPrice: " 718.00 AED",
  },
  {
    image: img2,
    name: " John Jacobs",
    model: "Black Tortoise Full Rim Rectangle",
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
    <div className="flex flex-col items-center py-12.5 px-15">
      <div className="relative w-full h-50">
        <Image
          src={offer}
          alt="offer"
          fill
          className="object-cover object-[28%_72%] rounded-3xl"
        />
        <div className="absolute inset-0 bg-[#CC0033] mix-blend-multiply rounded-3xl" />
        <div className="absolute inset-0 flex items-center justify-between p-10">
          <h1 className="text-7xl font-extrabold text-white">
            BUY 1 GET 1 FREE
          </h1>

          <button className="bg-white text-[#CC0033] hover:bg-gray-100 font-semibold px-5 py-3 text-sm rounded-xl">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-4  mt-10 w-full justify-center">
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
