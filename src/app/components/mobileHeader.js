import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileHeader = ({ setOpen }) => {
  return (
    <div className="fixed w-screen z-50 top-24 left-2 bg-white flex flex-col items-center justify-center p-8 ">
      <div className="flex flex-col gap-6 text-[20px] font-medium">
        <Link
          href="#"
          className="hover:text-teal-500 transition"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:text-teal-500 transition"
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="hover:text-teal-500 transition"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
        <Link
          href="#about-me"
          className="hover:text-teal-500 transition"
          onClick={() => setOpen(false)}
        >
          About Me
        </Link>
      </div>

      <button
        id="moonLight"
        className="absolute top-4 right-6 text-gray-600 hover:text-teal-500"
        onClick={() => setOpen(false)} // Close menu
      >
        <i className="fa-solid fa-moon fa-2x"></i>
      </button>
    </div>
  );
};

export default MobileHeader;
