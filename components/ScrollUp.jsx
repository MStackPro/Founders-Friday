"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollUp() {
  return (
    <main>
      <ScrollToTop
        className="flex justify-center items-center"
        style={{ backgroundColor: "black", width: "2.5rem", height: "2.5rem" }}
        smooth
        component={<IoIosArrowUp className="text-primary text-3xl" />}
      />
    </main>
  );
}
