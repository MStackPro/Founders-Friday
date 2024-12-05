import React from "react";
import { Button } from "./ui/button";
import { IoMdArrowForward } from "react-icons/io";

const sponsorshipBenefits = [
  {
    title: "Networking Opportunities",
    description:
      "Connect with industry leaders, founders, and potential partners.",
    color: "bg-primary/40",
  },
  {
    title: "Community Impact",
    description: "Support the growth and development of the startup ecosystem.",
    color: "bg-primary/20",
  },
  {
    title: "Brand Association",
    description:
      "Align your brand with innovation and entrepreneurial success.",
    color: "bg-primary/20",
  },
  {
    title: "Visibility",
    description:
      "Gain exposure to a targeted audience of young professionals and entrepreneurs.",
    color: "bg-primary/40",
  },
];

export default function SponsorSection() {
  return (
    <main className="pt-40 mb-24 container">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-primary font-semibold">Sponsor The Next Friday</p>
        <h2 className="text-3xl mx-auto font-semibold mb-8 w-60">
          Why Sponsor Founders Friday?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
          {/* Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border mx-auto border-primary p-4 rounded-xl shadow-xl bg-white">
            {sponsorshipBenefits &&
              sponsorshipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-8 ${benefit.color} h-[13rem] w-[13rem] rounded-full shadow-md flex flex-col items-center justify-center border border-primary`}
                >
                  <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Form Section */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">How To Sponsor</h3>
            <i className="text-primaryLight">Ready to make an impact?</i>
            <p className="text-primaryLight mb-6">
              Fill out the form below or contact us at [contact email/phone
              number] to learn more about how you can sponsor the next Founders
              Friday
            </p>
            <form className="space-y-4">
              {/* Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label>
                    <strong>Name</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-primaryLight rounded-md"
                  />
                </div>
                <div>
                  <label>
                    <strong>Company</strong> (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name (optional)"
                    className="w-full p-3 border border-primaryLight rounded-md"
                  />
                </div>
              </div>
              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label>
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-primaryLight rounded-md"
                  />
                </div>
                <div>
                  <label>
                    <strong>Phone</strong>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-primaryLight rounded-md"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <Button className="px-10">
                Sponsor <IoMdArrowForward />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
