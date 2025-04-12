"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const Testing = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotProgress, setDotProgress] = useState(0);
  

  // Custom Arrow Component
  const CustomArrow = ({ className, style, onClick, direction, hide }) => {
    if (hide) return null; // Hide arrow if `hide` is true
  
    return (
      <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 ${
          direction === "left" ? "left-5" : "right-2"
        } bg-gray-900/80 text-red-600 p-2 rounded-full cursor-pointer hover:bg-gray-700`}
        onClick={onClick}
        style={{ ...style, display: "block" }}
      >
        {direction === "left" ? <FaChevronLeft size={40} /> : <FaChevronRight size={20} />}
      </div>
    );
  };
  // Define the duration for each slide (e.g., 3000ms)
  const slideDuration = 4000;
  // Interval for progress updates (in ms)
  const progressInterval = 30;
  // Calculate the increment percentage per interval
  const increment = (progressInterval / slideDuration) * 100;

  useEffect(() => {
    // Reset progress when currentIndex changes
    setDotProgress(0);
    const timer = setInterval(() => {
      setDotProgress((prev) => {
        if (prev + increment >= 100) {
          return 100;
        }
        return prev + increment;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [currentIndex, increment, progressInterval]);

  const settings = {
    dots: false,
      // nextArrow: <CustomArrow direction="right" hide={true} className={"text-[50px]"} />, // Show right arrow
      // prevArrow: <CustomArrow direction="left" hide={false} />,
    fade: true,
    infinite: true,
    autoplay: true,
    waitForAnimate: false,
    autoplaySpeed: slideDuration,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    
    },

  };
  // console.log(isActiveNow)
  return (
    <div className="flex items-center justify-center m-auto py-40 bg-black">
      <div className="w-[1.25rem] rounded-tl-[0.5rem] rounded-bl-[0.5rem] h-[260px] bg-gray-200 bg-opacity-80"></div>
      <div  className="w-[260px] h-[290px] bg-white rounded-[0.5rem] p-5 flex flex-col justify-between cursor-pointer">
        {/* Slider Section (Top) */}
        <div className="flex justify-start">
          <Slider {...settings} className="max-w-[230px] h-[120px]">
            {[
              { src: "/images/img4.jpg", text: "Reconstruction of Koton -Karfe – Abaji Road (Abuja bound)" },
              { src: "/images/img8.jpg", text: "Reconstruction of Koton-Karfe" },
              { src: "/images/img5.jpg", text: "Laspotech 200 seater capacity theatre Project" },
              { src: "/images/img4.jpg", text: " Construction of 2km dual carriageway Alpha Beach Road" },
              { src: "/images/img3.jpg", text: "14km Concrete lining of the Ajibola - Aboru river channel." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <Image
                  src={item.src}
                  height={10}
                  width={250}
                  alt="slider-image"
                  loading="lazy"
                  className="h-[120px] w-[230px] object-cover rounded-[0.5rem]"
                />
                <h3 className="text-left mt-4 ">
                  {item.text}
                </h3>
              </div>
            ))}
          </Slider>
        </div>

        {/* Bottom Section (Dots & Icon) */}
        <div className="flex items-center justify-between w-full mt-auto">
          {/* Dots */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, ind) => (
              <div
                key={ind}
                className={`relative flex items-center ${
                  currentIndex === ind ? "w-[70px]" : "w-2 rounded-full"
                } h-2`}
              >
                <div
                  className={`w-full h-2 rounded-full bg-gray-200`}
                ></div>
                {currentIndex === ind && (
                  <div
                    className="absolute bottom-0 left-0 h-2 bg-red-500 rounded-full"
                    style={{ width: `${dotProgress}%` }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Icon */}
          <div>
            <Image
              src={"/images/css.svg"}
              height={50}
              width={50}
              alt="icon"
              loading="lazy"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
{
  /* <div className="rounded-[0.5rem] border">
        </div> */
}
