import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "./ui/button";
import Image from "next/image";
import BannerImage from "../public/banner.png";
import Logo from "../public/Logo2.svg";

export default function Banner() {
  return (
    <section
      className="mt-4 h-auto md:h-[25rem] overflow-hidden"
      aria-labelledby="banner-heading"
    >
      <div className="w-full h-full relative flex flex-col md:grid place-items-center">
        {/* Background Image */}
        <div className="absolute w-full h-full">
          <Image
            src={BannerImage}
            alt="Event Banner Background"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>

        {/* Content */}
        <div className="container relative flex flex-col md:grid md:grid-cols-2 items-center gap-6 p-4 md:gap-10">
          {/* Text Section */}
          <div className="text-white text-center md:text-left">
            <h2
              id="banner-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Founders Friday is coming to <br />
              <span className="text-primary text-4xl md:text-6xl">
                Kaduna
              </span>
            </h2>
            <p className="mb-6 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="outline" className="px-8 py-2 rounded-full">
                Register <IoMdArrowForward />
              </Button>
            </div>
          </div>

          {/* Logo Section */}
          <div className="hidden md:flex mx-auto">
            <Image src={Logo} alt="Event Logo" width={250} height={250} />
          </div>
        </div>
      </div>
    </section>
  );
}
