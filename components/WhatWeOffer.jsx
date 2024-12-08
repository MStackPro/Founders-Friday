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
    <section className="container py-8" aria-labelledby="what-we-offer-heading">
      <header className="text-center mb-8">
        <h2 id="what-we-offer-heading" className="text-3xl font-bold">
          What We Offer
        </h2>
      </header>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col xl:flex-row justify-between xl:items-center border-b pb-4"
            aria-labelledby={`feature-title-${index}`}
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></span>
              <h3 id={`feature-title-${index}`} className="font-semibold text-black">
                {feature.title}
              </h3>
            </div>

            <Accordion type="single" collapsible className="flex-[1.4] text-primaryLight">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-start">
                  {feature.description}
                </AccordionTrigger>
                <AccordionContent>{feature.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        ))}
      </div>
    </section>
  );
}
