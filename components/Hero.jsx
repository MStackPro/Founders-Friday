import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Image1 from "../public/Frame16.svg";
import ArrowIcon from "../public/Rightarrow.svg";

const collaborators = [
  { id: 1, image: "../public/Ellipse3.png", name: "Cafe one" },
  { id: 2, image: "../public/Ellipse1.png", name: "Cafe one" },
  { id: 3, image: "../public/Ellipse2.png", name: "Cafe one" },
  { id: 4, image: "../public/Ellipse4.png", name: "Cafe one" },
  { id: 5, image: "../public/Ellipse5.png", name: "Cafe one" },
];
export default function Hero() {
  return (
    <main className="container mt-24">
      <section className="py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <small>
              Join our premier monthly meetup for startup founders and tech
              visionaries
            </small>
            <h2 className="text-3xl font-bold text-purple-800">
              Connect, Collaborate, Innovate!
            </h2>
            <p className="mt-4">
              Every last Friday of the month, we bring together the brightest
              minds in our local tech ecosystem. Whether you&apos;re a seasoned
              entrepreneur or just starting your journey, Founder&apos;s Friday
              is your launchpad for new ideas, valuable connections, and
              game-changing opportunities.
            </p>
            <div className="flex flex-col w-fit">
              <Button
                variant="outline"
                className="mt-8 rounded-full text-[1.2rem] py-5 mb-2"
              >
                Register For Our Next Event
                <Image
                  src={ArrowIcon}
                  alt="arrow icon"
                  width={30}
                  height={30}
                />
              </Button>
              <small className="text-primaryLight">
                Join Us for our next meetup on the 26th of July 2024
              </small>
            </div>

            {/* Collaborators */}
            <figure>
              {/* {collaborators &&
                collaborators.map((item, id) => (
                  <Image
                    key={id}
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                ))} */}
            </figure>
          </div>

          {/* Image Content */}
          <figure className="relative">
            <Image src={Image1} alt="hero" width={300} />
          </figure>
        </div>
      </section>
    </main>
  );
}
