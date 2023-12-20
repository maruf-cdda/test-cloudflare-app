import React from "react";
import style from "./styles/carousel.module.css";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/css";
import Card from "../Card";
import sliderStyle from "./styles/slideshow.module.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Carousel = ({ arrowMode, responsiveItem, defaultArrow = false }) => {
  const path = usePathname();
  console.log(path);
  const data = [
    {
      name: "Abul Hasem",
      position: "CEO & Founder",
      img: "/assets/teams/2.png",
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
      img: "/assets/person.png",
      facebook: "",
      instgram: "",
      twitter: "",
    },
    {
      name: "MIZANUR RAHMAN",
      position: "SENIOUR SOFTWARE ENGINEER",
      img: "/assets/person.png",
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
  const v = Pagination;
  return (
    <div className="container mx-auto ">
      <div>
        {" "}
        <Swiper
          // spaceBetween={30}
          navigation={defaultArrow}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation, Autoplay]}
          className={style.swiperwrapper}
          speed={800}
          autoplay={false}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            744: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 6,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={style.slides}>
              <Card item={item} />
            </SwiperSlide>
          ))}
          <SwiperBtn style={style} arrowMode={arrowMode} path={path} />
        </Swiper>
      </div>
    </div>
  );
};
export default Carousel;

const SwiperBtn = ({ style, arrowMode, path }) => {
  const swiper = useSwiper();
  return (
    <div
      className={
        path == "/about-us" ? style.swiperaboutbtns : style.swipernavbtns
      }
    >
      <button
        className="btn1  lg:bg-[#E6E6E6] flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft className="text-stone-500" />
      </button>
      <button
        className="lg:bg-[#E6E6E6]  flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight className="text-stone-500" />
      </button>
    </div>
  );
};

const Slideshow = ({ data }) => {
  const v = Pagination;
  return (
    <div>
      {" "}
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: `swiper-pagination-bullet swiper-pagination-testClass ${style.btn}`,
        }}
        modules={[Pagination, Autoplay]}
        className={style.mySwipers}
        autoplay={true}
        speed={2000}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={style.slides}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
