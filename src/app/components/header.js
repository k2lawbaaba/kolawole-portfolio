"use client";
import Close from "@/icons/Close";
import Menu from "@/icons/Menu";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "./mobileHeader";
import React, { useState } from "react";
import DarkModeToggle from "./darkModeButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="home"
      className="bg-[#f2f6f6] px-8 pb-20 pt-8 gap-16 w-full  dark:bg-black dark:text-gray-300 dark:border-b-slate-800 dark:border-b-[0.1px]"
    >
      <div className="flex items-center justify-between sm:grid grid-cols-2 sm:text-[24px] sm:px-10 lg:px-16 xl:px-20 text-[16px] font-[500] w-full max-w-[1280px] mx-auto">
        <Link href="#" className="rounded-[100%] h-[40px]">
          <Image
            src="https://fip6wxdyr5vppwsv.public.blob.vercel-storage.com/myprofilephoto/abbeey-GzCSlN4kl93806UBcTWp680PmQRPP9.ico"
            alt="image"
            height={50}
            width={50}
            className="rounded-[100%]"
          />
        </Link>
        <div className="hidden sm:grid grid-cols-4 sm:pr-6">
          <Link
            href="#home"
            className="text-[24px]  text-[#191825]   dark:bg-black dark:text-white hover:text-[#11999E] hover:font-bold"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="text-[24px]  text-[#191825]   dark:bg-black dark:text-white hover:text-[#11999E] hover:font-bold"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-[24px]  text-[#191825]  dark:bg-black dark:text-white hover:text-[#11999E] hover:font-bold"
          >
            Contact
          </Link>
          <Link
            href="#about-me"
            className="text-[24px]  text-[#191825]  dark:bg-black dark:text-white hover:text-[#11999E] hover:font-bold"
          >
            About Me
          </Link>
        </div>

        <div className="fixed z-50 top-8 right-[max(calc(50%-640px),1rem)]">
          <DarkModeToggle />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden border relative cursor-pointer"
        >
          {open ? <Close /> : <Menu />}
        </div>

        {/* open the menu  */}
        {open && <MobileHeader setOpen={setOpen} />}
      </div>

      <div className="w-full max-w-[1280px] mx-auto sm:px-10 lg:px-16 xl:px-20">
        <Image
          id="top_cloud"
          src="/images/cloud.png"
          alt="cloud_img"
          height={100}
          width={100}
          className="relative sm:left-[580px] left-3 mb-[50px] top-[50px] animate-move "
        />
        <div className="mx-auto text-center py-3 text-[#315a5a] bg-whie  dark:bg-black dark:text-[#66BFBF]">
          <h1 className=" sm:text-[100px] text-[55px] font-[500] mx-auto mt-[30px] font-sacramento">
            I&apos;m Abiodun.
          </h1>

          <h2 className="sm:text-[2.5rem] text-[20px] mt-0 font-normal font-shantell">
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
