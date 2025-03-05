"use client";
import React, { useEffect } from "react";
import Stairs from "@/Animations/Stairs";
import TeamsPage from "@/Components/TPage/page";
import Ananya from "@/Components/Ananya/page";
import AnanyaTeam from "@/Components/AnanyaTeam/page";
const Page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Stairs />
      <Ananya />
      <AnanyaTeam />
      <TeamsPage />
    </>
  );
};

export default Page;
