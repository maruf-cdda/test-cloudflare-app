import React from "react";
import style from "./styles/carousel.module.css";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import "swiper/css";
import Card from "../Card";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperCarousel = ({
  arrowMode,
  responsiveItem,
  defaultArrow = false,
}) => {
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
    <div className="container mx-auto">
      <div>
        {" "}
        <Swiper
          spaceBetween={24}
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
          <SwiperBtn style={style} arrowMode={arrowMode} />
        </Swiper>
      </div>
    </div>
  );
};
export default SwiperCarousel;
const SwiperBtn = ({ style, arrowMode }) => {
  const swiper = useSwiper();
  return (
    <div className={style.swipernavbtns}>
      <button
        className="btn1 text-[#666666] lg:bg-[#E6E6E6] flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.97461 15.0583L2.91628 10L7.97461 4.94167"
            stroke="#666666"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.083 10L3.05801 10"
            stroke="#666666"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        className="lg:bg-[#E6E6E6] text-[#666666] flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.0254 4.94167L17.0837 10L12.0254 15.0583"
            stroke="#666666"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.91699 10H16.942"
            stroke="#666666"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
