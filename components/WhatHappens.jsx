import Image from "next/image";
import React from "react";
import Image1 from "../public/IMG_25013.png";
import Image2 from "../public/IMG_25192.png";
import { Button } from "./ui/button";
import { IoMdArrowForward } from "react-icons/io";


export default function WhatHappens() {
  return (
    <main className="container py-14">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 flex-1">
                <p className="text-primary font-semibold">Founders Friday</p>
                <h3 className="text-3xl font-semibold w-60">
                    What Happens At Founders Friday
                </h3>
                <p className="text-primaryLight my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <Button className="">
                    Learn More <IoMdArrowForward/>
                </Button>
            </div>
            <div className="w-full flex-1 relative flex justify-center">
                {/* Stacked Images  */}
                <Image
                    src={Image2}
                    alt="Image 1"
                    className="absolute w-[17rem] top-40 left-16 rounded-lg"
                />
                <Image
                    src={Image1}
                    alt="Image 2"
                    className="w-[17rem] rounded-lg"
                />
            </div>
        </div>
    </main>
  );
}