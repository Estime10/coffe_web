import { Badge } from "./Bagde";
import { Separator } from "./Separator";


export const HeroSection = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-[#F5F5F5]">
      {/* Overlay */}
      <div
        style={{ backgroundImage: 'url("/assets/hero/hero-overlay.png")' }}
        className="absolute z-10 w-full h-full bg-[#100e0e]/[0.85]">
      </div>
      {/* Video */}
        <video
        autoPlay
        muted
        loop={false}
        src="/assets/hero/video_barista.mp4"
        poster="/assets/hero/video_barista.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/hero/video_barista.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {/* Content */}
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center z-30 relative">
        {/* Text */}
        <div
        data-scroll
        data-scroll-speed="0.4"
        className="flex-1 flex flex-col items-center justify-center text-center md:pb-12 gap-10 h-full">
          {/* Badge and h1 */}
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden md:flex md:w-[180px] md:h-[180px]" />
            <h1 className="h1 text-[#F5F5F5]">
              <span className="text-[#c7a17a]">One Coffee</span> & Code
            </h1>
          </div>
          {/* Separator */}
          <Separator />
          <p className="lead font-light max-w-[350px] md:max-w-[500px] text-[#F5F5F5] text-xl md:text-3xl mb-6">
            Experience the best <span className="text-[#c7a17a] uppercase">coffee</span> in town. Pull off your laptop and <span className="text-[#c7a17a] uppercase">CODE</span>.
          </p>
          <button className="btn" onClick={() => {
            window.location.href = "#menu";
          }}>Our Menu</button>
        </div>
      </div>
    </section>
  )
}
