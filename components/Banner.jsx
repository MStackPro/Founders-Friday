import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Button } from "./ui/button";
import Image from "next/image";
import BannerImage from "../public/banner.png";
import Logo from "../public/Logo2.svg";

export default function Banner() {
  return (
    <main className="mt-[1rem] h-[25rem] xl:h-[25rem] md:h-[15rem] overflow-hidden">
      <div className="w-full h-full relative grid place-items-center">
        <div className="absolute w-full">
          <Image src={BannerImage} alt="Banner" />
        </div>
        <div className="container relative xl:p-0 grid grid-cols-1 xl:grid-cols-2 space-x-60 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">
              Founders Friday is coming to <br />{" "}
              <span className="text-primary text-6xl">Kaduna</span>
            </h2>
            <p className="mb-6 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <Button variant="outline" className="px-10 rounded-full">
              Register <IoMdArrowForward />
            </Button>
          </div>
          <div className="hidden xl:block mx-auto">
            <Image src={Logo} alt="Logo" width={300} height={300} />
          </div>
        </div>
      </div>
    </main>
  );
}
