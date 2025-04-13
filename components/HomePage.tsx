'use client'
import { useEffect } from "react";
import { AboutPage } from "./_about/AboutPage";
import { ExplorerPage } from "./_explorer/ExplorerPage";
import { HeroSection } from "./_hero/HeroSection";
import { MenuPage } from "./_menu/MenuPage";
import { TestimonialPage } from "./_testimonial/TestimonialPage";
import { OpeningHours } from "./Opening/OpeningHours";


export const HomePage = () => {
  useEffect(() => {
    const locomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default
      new locomotiveScroll();
    }
    locomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <HeroSection />
      <ExplorerPage />
      <AboutPage />
      <MenuPage />
      <OpeningHours />
      <TestimonialPage />
    </div>
  );
};
