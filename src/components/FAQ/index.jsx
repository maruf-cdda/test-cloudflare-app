import React, { useState } from "react";
import Accordion from "../Accordion";
import ProjectIdeaCard from "../Card/ProjectIdeaCard";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="pb-16 flex flex-col justify-center items-center py-4 md:py-7 lg:py-[7rem] self-stretch">
        <h3 className="uppertitle">Frequently Asked Questions</h3>
        <h1 className="title lg:mx-56 text-center relative">
          If you have anything else you want to ask, reach out to us.
          {/*FAQ title  underline  */}
          <Image
            className="FAQ__title__underline absolute "
            src="/assets/line.svg"
            alt=""
            width={500}
            height={500}
          />
        </h1>
      </div>

      {/* accordion */}
      <Accordion
        data={[
          {
            id: 11,
            title:
              "Do you offer custom software development services for my industry?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. ",
          },
          {
            id: 12,
            title: "What is your process for end-to-end software development?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 13,
            title: "How does your team augmentation process work?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 14,
            title: "Do you offer teams for mobile app development?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 15,
            title: "What is your preferred development methodology?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
          {
            id: 16,
            title: "Can you help me identify the core features for my MVP?",
            content:
              "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
          },
        ]}
      />

      {/* contact us card  */}
      <ProjectIdeaCard />
    </div>
  );
};

export default FAQ;
