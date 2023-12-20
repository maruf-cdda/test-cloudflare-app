import Image from "next/image";
import React, { useEffect, useState } from "react";
import Badge from "../Badge";
import { IoSparkles } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidStoreAlt } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiBriefcase } from "react-icons/pi";
import SlideShow from "../Carousel/SlideShow";
import { heroData } from "./heroData";

const getBadgePosition = (angle, radius) => {
  const centerX = 115; // Adjust as needed
  const centerY = 200; // Adjust as needed

  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  return { top: `${y}px`, left: `${x}px` };
};

const Hero = () => {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(120);
  const [angle3, setAngle3] = useState(240);

  // useEffect(() => {
  //   const updatePositions = () => {
  //     setAngle1((angle) => angle + 30); // Increase the angle for badge 1
  //     setAngle2((angle) => angle + 30); // Increase the angle for badge 2
  //     setAngle3((angle) => angle + 30); // Increase the angle for badge 3
  //   };

  //   const intervalId = setInterval(updatePositions, 5000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return (
    <div
      className="bg-[url('/assets/BG.svg')] bg-cover bg-center bg-no-repeat mt-12 "
      // style={{ backgroundImage: 'url("/assets/BG.svg")' }}
    >
      {/* hero section */}
      <div className="container mx-auto px-4 flex lg:flex-row justify-between flex-col md:justify-center gap-14 mb-14">
        {/* left side */}
        <div className=" flex flex-col items-start self-stretch  md:w-full lg:w-1/2 gap-4">
          {/* product badge  */}
          <div className="bg-primary-light flex items-center gap-2 text-sm font-medium rounded-2xl px-3 py-[6px] shadow-md">
            <span className="flex items-center gap-2 ">
              <IoSparkles className="text-[#2AA7DF]" />
              Meet Pyreactor
            </span>
            <span className="flex items-center ">
              <BsDot className="text-[#2AA7DF] h-6 w-6" />
              Our new CMS Software
            </span>
          </div>
          {/* hero title  */}
          <p className="text-primary-text-black text-left text-[30px] md:text-[60px] lg:text-[70px] font-semibold leading-[36px] md:leading-[72px] lg:leading-[87px]  relative">
            Resilient technology solutions{" "}
            <span className="text-[#2AA7DF]">
              for growth-focused businesses
            </span>
            {/*hero title  underline  */}
            <Image
              className="hero__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </p>
          {/* hero sut-title  */}
          <div className="bg-gradient-to-r from-[#e6f3fd] to-transparent flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 ">
            <p className="text-xs md:text-base lg:text-xl font-normal leading-4 md:leading-5 lg:leading-7 text-[#666]">
              We are trusted partners for realizing digital-at-the-core success
              strategies for businesses across the world and across industries.
            </p>
          </div>
          <button className="bg-primary-btn rounded-md flex items-center gap-2 px-6 py-3 shadow-md text-primary-btn-text">
            <span>Get Started</span>
            <FaArrowRight />
          </button>
        </div>
        {/* right side */}
        <div className="single__carousal md:w-full lg:w-1/2 lg:px-16 xl:px-36">
          {/* carousal */}
          <SlideShow data={heroData} />
        </div>
      </div>

      {/* footer section nav */}
      <div className="hero-footer ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="container mx-auto px-3 md:px-7 lg:px-16 flex justify-center items-center flex-wrap divide-gray-700 divide-x-2 text-[10px] font-medium  md:text-[14px] md:font-medium  lg:text-[20px] lg:font-semibold ">
            <span className="px-1 py-0.1 md:px-4 md:py-1">Extended Team</span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Custom Software Development
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Capability Burst To Meet Timeline
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">
              Accelerate Digital Innovation
            </span>
            <span className="px-1 py-0.1 md:px-4 md:py-1">Extended Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
