import React from "react";
import Accordion from "../Accordion";
import NewAccordion from "../Accordion/NewAccordion";
import Image from "next/image";

const OurInfo = () => {
  return (
    <div className="container mx-auto px-4 flex items-start justify-between gap-2 flex-col lg:flex-row py-5 md:py-10 lg:py-20">
      {/* left side  */}
      <div className="">
        <div className="flex lg:w-[532px] pr-6 flex-col items-start gap-4">
          <h2 className="title relative">
            What We do?
            {/*info title  underline  */}
            <Image
              className="info__title__underline absolute "
              src="/assets/line.svg"
              alt=""
              width={500}
              height={500}
            />
          </h2>
          <p className="content ">
            At Cdda, we build mission-critical software systems using the power
            of Digital, Data, Cloud & AI – that help organizations adapt to the
            changing IT landscape and surpass the competition.
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="lg:w-[632px] ">
        {/* right side */}

        {/* accordion  */}
        <Accordion
          data={[
            {
              id: "accordion-1",
              title: "Digital Product Engineering",
              content:
                "With a decade of Product Engineering experience, we help organizations across the product lifecycle bringing expertise on full-stack, cloud platforms, pre-configured tools, and scalable architectures.",
            },
            {
              id: "accordion-2",
              title: "Data",
              content:
                "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
            },
            {
              id: "accordion-3",
              title: "Cloud",
              content:
                "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
            },
            {
              id: "accordion-4",
              title: "Machine Learning",
              content:
                "Absolutely, our expertise extends to providing bespoke software development services tailored to your specific industry requirements. With a focus on innovation, we craft solutions that optimize your processes, enhance efficiency, and align with your unique business objectives. Our dedicated team is committed to delivering cutting-edge technology that ensures a seamless integration of customized software for the sustained success of your business.",
            },
          ]}
        />

        {/* <NewAccordion /> */}
      </div>
    </div>
  );
};

export default OurInfo;
