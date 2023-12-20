import Image from "next/image";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import ProductCard from "../Card/ProductCard";

const ContinuousSlider = () => {
  return (
    <Marquee gradient pauseOnHover className="rounded-md overflow-hidden ">
      <div className="flex gap-x-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Marquee>
  );
};

export default ContinuousSlider;
