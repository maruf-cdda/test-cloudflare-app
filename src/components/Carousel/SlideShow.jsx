"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Slideshow = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i = 0;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (data?.length > 0) {
      if (data?.length > 1) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      } else {
        slides[0].style.display = "block";
        dots[0].className += " active";
      }
    }
  };

  // effect for changing slides
  useEffect(() => {
    // setSlideIndex(1);
    showSlides(1);
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > 3) {
          newIndex = 1;
        }
        showSlides(newIndex);
        return newIndex;
      });
    }, 7000); // Adjust the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container ">
        {data?.map((item, index) => (
          <div className="mySlides fade " key={index}>
            <Image
              src={item}
              width={1000}
              height={1000}
              alt="loading..."
              className="carousel__img rounded-[8px] object-cover "
              priority
            />
          </div>
        ))}
      </div>
      <div>
        {data?.length === 1 && (
          <div style={{ textAlign: "center" }} className="pt-4">
            <button className="dot" onClick={() => currentSlide(1)}></button>
          </div>
        )}
        {data?.length === 2 && (
          <div style={{ textAlign: "center" }} className="pt-4">
            <button className="dot" onClick={() => currentSlide(1)}></button>
            <button className="dot" onClick={() => currentSlide(2)}></button>
          </div>
        )}
        {data?.length > 2 && (
          <div style={{ textAlign: "center" }} className="pt-4">
            <button className="dot" onClick={() => currentSlide(1)}></button>
            <button className="dot" onClick={() => currentSlide(2)}></button>
            <button className="dot" onClick={() => currentSlide(3)}></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
