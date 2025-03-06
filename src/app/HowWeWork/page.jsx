"use client";
import React, { useEffect, useRef } from "react";
import Stairs from "@/Animations/Stairs";
import HowWeWorkHeader from "@/Components/HowWeWorkHeader/page";
import HowWeWorkTimeline from "@/Components/HowWeWorkTimeline/page";
import HowWeWorkText from "@/Components/HowWeWorkText/page";
import TextRevel from "@/Animations/TextRevel/page";
// import ServicesCards from "@/Components/ServicesCards/page";
import Services_Slider from "@/Components/Service_Slider/page";
import AboutUs_ourDesign from "@/Components/AboutUs_ourDesign/page";
import KnowAboutUsHeaderOne from "@/Components/KnowAboutUsHeaderOne/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const phrase =
    "Get your home designed in the comfort of your home without any hassle. Our team of excellent designers will guide you in designing your home exactly the way you want.";

  return (
    <>
      <Stairs />
      <KnowAboutUsHeaderOne />
      <HowWeWorkHeader />
      <HowWeWorkTimeline />
      <TextRevel phrase={phrase} />
      <AboutUs_ourDesign />
      {/* <ServicesCards /> */}
      <Services_Slider />
      <HowWeWorkText  />
    </>
  );
};

export default Page;
