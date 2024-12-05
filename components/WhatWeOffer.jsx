import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    title: "Monthly Meetups",
    description:
      "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
  },
  {
    title: "Diverse Network",
    description:
      "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
  },
  {
    title: "Knowledge Sharing",
    description:
      "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
  },
  {
    title: "Collaboration Opportunities",
    description:
      "Find potential co-founders, mentors, or partners for your next big venture.",
  },
  {
    title: "Community Support",
    description:
      "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
  },
];

export default function WhatWeOffer() {
  return (
    <div className="container py-16">
      <h2 className="text-3xl text-center font-bold mb-8">What We Offer</h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row justify-between xl:items-center border-b pb-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h3 className="font-semibold text-black">{feature.title}</h3>
            </div>

            <Accordion type="single" collapsible className="flex-[1.4] text-primaryLight">
                <AccordionItem value="item-1">
                <AccordionTrigger className="text-start">{feature.description}</AccordionTrigger>
                    <AccordionContent>
                        {feature.description}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
