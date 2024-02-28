"use client";
import Image from "next/image";
import { useState } from "react";
import { close, menu } from "@/public/assets";
import { navLinks } from "@components/constants";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="sm:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain p-2 bg-gray-gradient"
          width={40}
          height={40}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={nav.href}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 justify-start">
        <ul className="list-none sm:flex hidden items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={nav.href}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <Image
          src={"/assets/logo-no-background.svg"}
          alt="StarForge logo"
          width={150}
          height={150}
        />
      </div>
    </nav>
  );
};

export default Navbar;
