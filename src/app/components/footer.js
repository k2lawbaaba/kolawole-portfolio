import Link from "next/link";
import React from "react";

const Footer = () => {
  let date = new Date();
  return (
    <div className="w-full   bg-slate-950 text-white  dark:border-t-slate-700 dark:border-t-[0.1px]  dark:bg-black dark:text-gray-300 h-full">
      <p className="text-[14px] font-shantell  py-10 sm:p-10 lg:px-16 xl:px-20 mx-auto max-w-[1280px] w-full">
        © Copyright {date.getFullYear()}. <span className="">Designed by </span>
        <Link href="#home" className="underline underline-offset-2 font-serif">
          Abiodun Michael
        </Link>
      </p>
    </div>
  );
};

export default Footer;
