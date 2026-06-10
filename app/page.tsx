import Image from "next/image";
import Header from "./_layouts/Header";
import Hero from "./_components/Hero";
import Offers from "./_components/Offers";
import ProductCard from "./_components/product-card";
import Collection from "./_components/Collection";
import TopBrands from "./_components/top-brands";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Offers/>
      <Collection/>
      <TopBrands/>
      <Products/>
    </div>
  );
}
