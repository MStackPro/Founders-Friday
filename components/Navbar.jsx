"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoMdArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../public/logo.svg";

const navMenu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "#" },
  { id: 3, name: "Gallery", path: "#" },
  { id: 4, name: "Contact Us", path: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="top-0 h-20 w-full bg-background flex items-center fixed shadow-sm border-b border-primary/20 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={50} />
        </Link>

        <div className="hidden xl:flex items-center gap-12">
          <div className="flex gap-6">
            {navMenu.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={`${
                  link.path === pathname && "text-primary"
                } hover:text-primary transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="#">
            <Button variant="outline" className="rounded-xl">
              Register <IoMdArrowForward />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="xl:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseOutline /> : <CiMenuFries />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 right-4 shadow-lg rounded-lg p-4 transition-transform duration-300 bg-background ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } w-64 xl:hidden`}
          style={{ transformOrigin: "top right" }}
        >
          <div className="flex flex-col gap-4">
            {navMenu.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={`${
                  link.path === pathname && "text-primary"
                } hover:text-primary transition`}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="#" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="rounded-xl mt-4 w-full">
              Register <IoMdArrowForward />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
