"use client";

import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { useSwiper } from "swiper/react";
import { Button } from "./ui/button";

const PaginationBtn = (Pagination) => {
  const swiper = useSwiper();
  
  return (
    <div className="flex gap-8 justify-center mt-4">
      <div onClick={() => swiper.slidePrev()} className="bg-transparent p-5 cursor-pointer border border-primary rounded-full flex justify-center items-center">
        <IoArrowBack />
      </div>

      <div onClick={() => swiper.slideNext()} className="bg-transparent p-5 cursor-pointer border border-primary rounded-full flex justify-center items-center">
        <IoArrowForward />
      </div>
    </div>
  );
};

export default PaginationBtn;