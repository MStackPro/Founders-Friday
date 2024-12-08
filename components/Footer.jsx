"use client"
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const socials = [
    {id: 1, name: "facebook", icon: <BsFacebook/>},
    {id: 2, name: "instagram", icon: <GrInstagram/>},
    {id: 3, name: "twitter", icon: <FaXTwitter/>},
]

const navMenu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "#" },
    { id: 3, name: "Gallery", path: "#" },
    { id: 4, name: "Contact Us", path: "#" },
  ];
export default function Footer() {
    const pathname = usePathname();
  return (
    <main className='container border-t border-primaryLight/30 py-6'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-6'>
            <ul className='flex gap-6'>
                { socials && socials.map((item, id) => (
                    <li key={id} className='bg-primary p-2 cursor-pointer text-[1.2rem] hover:bg-purple-500 transition-all duration-500 ease-in-out w-fit rounded-full text-white'>{item.icon}</li>
                ))}
            </ul>
            <div className="flex flex-row gap-6 items-center">
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
        </div>
    </main>
  )
}
