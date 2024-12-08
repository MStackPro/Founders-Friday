import Image from "next/legacy/image";
import React from "react";
import { Button } from "./ui/button";
import Image1 from "../public/Frame16.svg";
import Image2 from "../public/Frame17.png";
import Image3 from "../public/Frame20.svg";
import Image4 from "../public/Frame17-1.png";
import ArrowIcon from "../public/Rightarrow.svg";
import Logo from "../public/Ellipse2.png";
import { AiOutlineExport } from "react-icons/ai";

const collaborators = [
  { id: 1, image: "/Ellipse3.png", name: "Cafe one" },
  { id: 2, image: "/Ellipse1.png", name: "Cafe one" },
  { id: 3, image: "/Ellipse2.png", name: "MSwitch" },
  { id: 4, image: "/Ellipse4.png", name: "Bold Space" },
  { id: 5, image: "/Ellipse5.png", name: "Solana" },
];

export default function Hero() {
  return (
    <main className="container mt-24">
      <section className="py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <article>
            <header>
              <small>
                Join our premier monthly meetup for startup founders and tech
                visionaries
              </small>
              <h2 className="text-3xl font-bold text-purple-800">
                Connect, Collaborate, Innovate!
              </h2>
            </header>
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
            <section aria-label="Collaborators" className="mt-10">
              <figure className="flex items-center gap-6">
                {collaborators &&
                  collaborators.map((item, id) => (
                    <Image
                      key={id}
                      src={item.image}
                      alt={item.name}
                      width={45}
                      height={45}
                      className="border border-primaryLight rounded-full"
                    />
                  ))}
              </figure>
              <div className="flex items-center gap-2 mt-4">
                <p className="font-semibold">Become a collaborator today</p>
                <AiOutlineExport />
              </div>
            </section>
          </article>

          {/* Image Content */}
          <figure className="relative mx-auto xl:m-0">
            <Image src={Image1} alt="hero" width={300} height={300} />
          </figure>
          <figure className="absolute right-40 bottom-20 hidden xl:block">
            <Image src={Image2} alt="hero" width={300} height={300}/>
          </figure>
          <figure className="absolute right-[30rem] bottom-0 hidden xl:block">
            <Image src={Image3} alt="hero" width={200} height={200}/>
          </figure>
          <figure className="absolute right-[20rem] top-[35rem] hidden xl:block">
            <Image src={Image4} alt="hero" width={100} height={100}/>
          </figure>
        </div>
      </section>
    </main>
  );
}
