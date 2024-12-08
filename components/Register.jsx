import Image from "next/legacy/image";
import React from "react";
import Video from "../public/register.png";
import { FaPlay } from "react-icons/fa6";
import { Button } from "./ui/button";
import { IoMdArrowForward } from "react-icons/io";


const RegisterCommunity = () => {
  const profileData = [
    { image: "/avatar.png", borderColor: "border-primary" },
    { image: "/avatar.png", borderColor: "border-[#2F6C62]" },
    { image: "/avatar.png", borderColor: "border-[#FF3B30]" },
    { image: "/avatar.png", borderColor: "border-[#007AFF]" },
    { image: "/avatar.png", borderColor: "border-[#FF3B30]" },
    { image: "/avatar.png", borderColor: "border-[#2F6C62]" },
    { image: "/avatar.png", borderColor: "border-[#FF9500]" },
  ];

  return (
    <section className="container py-16">
      {/* Header Section */}
      <header className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold">
          Register And Be Part of Our Community
        </h2>
        <p className="text-primaryLight mt-4">
          Join our community of over 1000+ founders, developers, and tech junkies in general.
          Be inspired by people who live to inspire!
        </p>
      </header>

      {/* Curved Line with Images */}
      <div className="mb-12">
        <div className="flex justify-center flex-wrap gap-4">
          {profileData.map((profile, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full p-1 ${profile.borderColor} border overflow-hidden`}
              style={{
                transform: `translateY(${index % 2 === 0 ? "-40px" : "20px"})`,
              }}
            >
              <Image
                src={profile.image}
                alt="Profile"
                className="object-cover"
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pb-20 pt-10">
        <Button variant="outline" className="rounded-full px-8">
          Register Now <IoMdArrowForward/>
        </Button>
      </div>

      {/* Video and Text Section */}
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Video Section */}
        <div className="relative">
          <Image
            src={Video}
            alt="Video Thumbnail"
            className="rounded-md shadow-lg"
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center">
              <FaPlay className="text-primary" />
            </div>
          </button>
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            At Founder&apos;s Friday, Every Friday Is a Learning Experience!
          </h3>
          <p className="text-primaryLight mb-6">
            Join us in our mission to transform ideas into impact and shape the future
            of Nigeria&apos;s startup landscape.
          </p>
          <Button className="rounded-full px-8">
            Register Now <IoMdArrowForward/>
          </Button>
        </div>
      </article>
    </section>
  );
};

export default RegisterCommunity;
