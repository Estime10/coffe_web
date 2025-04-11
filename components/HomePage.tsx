'use client'
import { useEffect } from "react";
import { AboutPage } from "./_about/AboutPage";
import { ExplorerPage } from "./_explorer/ExplorerPage";
import { HeroSection } from "./_hero/HeroSection";
import { MenuPage } from "./_menu/MenuPage";


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
      {/* temporary div */}
      <div className="h-[1000px]"></div>

    </div>
  );
};
