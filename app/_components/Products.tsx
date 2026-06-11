import React from "react";
import Image from "next/image";
import ProductCard from "./product-card";
import img1 from "../../public/images/p1.png";
import img2 from "../../public/images/p2.png";
import img3 from "../../public/images/p3.png";
import img4 from "../../public/images/p4.png";
import img5 from "../../public/images/l1.png";
import img6 from "../../public/images/l2.png";
import img7 from "../../public/images/l3.png";
import img8 from "../../public/images/l4.png";

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

const lens = [
  {
    image: img5,
    name: "Amara",
    model: "AMARA Monthly Panther Eye Color",
    price: "150.00 AED",
  },
  {
    image: img6,
    name: " Amara",
    model: "AMARA Monthly Cream Brulee Color",
    price: "150.00 AED",
  },
  {
    image: img7,
    name: "Amara",
    model: "AMARA Monthly Gentel Gray Color",
    price: "150.00 AED",
  },
  {
    image: img8,
    name: "Amara",
    model: "AMARA Monthly Charcoal Gray Color",
    price: "150.00 AED",
  },
];

const Products = () => {
  return (
    <div>
      <div className="clamp-[py,4,12.5] clamp-[px,3,15] w-full">
        <div className="flex justify-between items-center  max-md:px-4">
          <div className="clamp-[text,28px,50px] items-start font-bold text-black">
            PRODUCTS
          </div>
          <div>
            <button className="bg-white text-[#CC0033] hover:bg-gray-100 font-semibold clamp-[px,2,5] clamp-[py,1,3] clamp-[text,13px,25px] md:rounded-2xl rounded-sm">
              VIEW ALL
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 clamp-[gap,2,6] max-lg:grid-cols-2 clamp-[mt,2,10] w-full justify-center">
          {products.map((item, i) => (
            <ProductCard
              id={i}
              key={i}
              type="product"
              image={item.image}
              name={item.name}
              model={item.model}
              offerPrice={item.offererPrice}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="clamp-[px,3,15] w-full">
        <div className="flex justify-between items-center max-md:px-4">
          <div className="clamp-[text,28px,50px] items-start font-bold text-black">LENS</div>
          <div>
            <button className="bg-white text-[#CC0033] hover:bg-gray-100 font-semibold clamp-[px,2,5] clamp-[py,1,3] clamp-[text,13px,25px] md:rounded-2xl rounded-sm">
              VIEW ALL
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 clamp-[gap,2,6] max-lg:grid-cols-2 clamp-[mt,2,10] w-full justify-center">
          {lens.map((item, i) => (
            <ProductCard
              type="lens"
              id={i}
              key={i}
              image={item.image}
              name={item.name}
              model={item.model}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
