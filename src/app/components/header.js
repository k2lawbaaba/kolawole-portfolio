"use client";
import Close from "@/icons/Close";
import Menu from "@/icons/Menu";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "./mobileHeader";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="bg-[#f2f6f6] p-8 pb-20 gap-16 sm:px-20 w-full">
      <div className="flex items-center justify-between sm:grid grid-cols-2 sm:text-[24px] text-[16px] font-[500] w-full">
        <Link href="#" className="rounded-[100%] h-[40px]">
          <Image
            src="/images/Abbeey.png"
            alt="image"
            height={50}
            width={50}
            className="rounded-[100%]"
          />
        </Link>
        <div className="hidden sm:grid grid-cols-4">
          <Link href="#home" className="test">
            Home
          </Link>
          <Link href="#projects" className="test">
            Projects
          </Link>
          <Link href="#contact" className="test">
            Contact
          </Link>
          <Link href="#about-me" className="test">
            About Me
          </Link>
        </div>

        {/* <button id="moonLight">
          <i className="fa-solid fa-moon fa-2x"></i>
        </button> */}
        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden border relative cursor-pointer"
        >
          {open ? <Close /> : <Menu />}
        </div>

          {/* open the menu  */}
        {open && <MobileHeader setOpen={setOpen} />}
      </div>
      <div className="">
        <Image
          id="top_cloud"
          src="/images/cloud.png"
          alt="cloud_img"
          height={100}
          width={100}
          className="relative sm:left-[580px] left-3 mb-[50px] top-[50px] animate-move "
        />
        <div className="mx-auto text-center py-3">
          <h1 className="text-[#315a5a] sm:text-[100px] text-[55px] font-[500] mx-auto mt-[30px] font-sacramento">
            I&apos;m Abiodun.
          </h1>

          <h2 className="sm:text-[2.5rem] text-[20px] mt-0 text-[#315a5a] font-normal font-shantell">
            a Programmer.
          </h2>
        </div>
        <Image
          id="bottom_cloud"
          src="/images/cloud.png"
          alt="cloud_img"
          height={100}
          width={100}
          className="relative left-[80px] mb-[50px] top-[50px] animate-reverseMove h-[20px] w-[60px] sm:w-[100px] sm:h-[30px]"
        />
        {/* <Image
          src="/images/mountain.png"
          alt="mountain_img"
          height={200}
          width={200}
        /> */}
      </div>
    </div>
  );
};

export default Header;
