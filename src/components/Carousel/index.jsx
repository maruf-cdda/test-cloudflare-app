"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Card from "../Card";

const data = [
  {
    name: "Abul Hasem",
    position: "CEO & Founder",
    img: "/assets/person.png",
    facebook: "",
    instgram: "",
    twitter: "",
  },
  {
    name: "maruf hassan",
    position: "FRONTEND TEAM LEADER",
    img: "/assets/teams/Apu.png",
    facebook: "",
    instgram: "",
    twitter: "",
  },
  {
    name: "iMRAN HOSSAIN",
    position: "BACKEND TEAM LEADER",
    img: "/assets/teams/Eshak.png",
    facebook: "",
    instgram: "",
    twitter: "",
  },
  {
    name: "MIZANUR RAHMAN",
    position: "SENIOUR SOFTWARE ENGINEER",
    img: "/assets/teams/Lijon.png",
    facebook: "",
    instgram: "",
    twitter: "",
  },
  {
    name: "YEASIR ARAFAT",
    position: "SENIOUR DEVELOPER",
    img: "/assets/person.png",
    facebook: "",
    instgram: "",
    twitter: "",
  },
];
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // autoplay: true,
    // centerMode: true,
    autoplaySpeed: 2000,
    speed: 1500,
    className: " pb-10",
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto  gap-4 flex  ">
      <div className="xl:w-[90%] w-full">
        <Slider {...settings}>
          {data?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </Slider>
      </div>
      <div></div>
    </div>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "-5%",
        top: "86%",
        background: "#E6E6E6",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        left: "107%",
        top: "86%",
        background: "#E6E6E6",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        boxShadow:
          "0px 2px 4px -1px rgba(37, 37, 37, 0.06), 0px 4px 6px -1px rgba(37, 37, 37, 0.10)",
      }}
      onClick={onClick}
    ></button>
  );
}
export default Carousel;
