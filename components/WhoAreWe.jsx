import Image from "next/legacy/image";
import React from "react";
import Image2 from "../public/IMG_2857.svg";
import { Button } from "./ui/button";
import { IoMdArrowForward } from "react-icons/io";
import { FaSackDollar } from "react-icons/fa6";

export default function WhoAreWe() {
  return (
    <main className="mt-24 container">
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <figure>
            <Image src={Image2} alt="Illustration of Who Are We" width={600} height={600} />
          </figure>

          {/* Content Section */}
          <article
            className="border-l-2 border-primary rounded-l-2xl pl-4 flex flex-col justify-between"
            aria-labelledby="who-are-we-heading"
          >
            <header>
              <h2 id="who-are-we-heading" className="text-2xl font-bold mb-4">
                Who Are We?
              </h2>
              <p className="text-primaryLight mb-6">
                Born from the vibrant startup ecosystem of Abuja, we recognized
                the need for a consistent, high-quality networking platform
                where founders, innovators, and tech enthusiasts could connect,
                share ideas, and foster collaboration.
              </p>
            </header>

            {/* Buttons */}
            <div className="flex items-center space-x-4">
              <Button className="rounded-full px-8">
                Register <IoMdArrowForward />
              </Button>
              <Button variant="outline" className="rounded-full px-8">
                Donate <FaSackDollar />
              </Button>
            </div>

            <footer>
              <strong className="mt-8 text-sm">
                Founder&apos;s Friday is more than just a meetup — it&apos;s a
                movement.
              </strong>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
