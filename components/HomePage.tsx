'use client'
import { useEffect } from "react";
import { ExplorerPage } from "./_explorer/ExplorerPage";
import { HeroSection } from "./_hero/HeroSection";


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
      {/* temporary div */}
      <div className="h-[1000px]"></div>

    </div>
  );
};
