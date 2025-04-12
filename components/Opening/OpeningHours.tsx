import Image from "next/image";
import { Badge } from "../_hero/Bagde";
import { Separator } from "../_hero/Separator";
export const OpeningHours = () => {
  return (
    <section className="flex bg-[#100e0e] h-[60vh] md:h-[80vh]">
      <div className="hidden relative md:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 bg-black/60 top-0"></div>
        <Image
          src="/assets/opening-hours/img.png"
          alt="Opening Hours"
          fill
          quality={100}
          className="object-cover" />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div className="flex-1 relative flex flex-col justify-center items-center">
        <Image
          src="/assets/opening-hours/bg.png"
          alt="Opening Hours"
          fill
          quality={100}
          className="object-cover" />
        <div className="w-full h-full absolute z-10 bg-black/[0.85] top-0"></div>
        <div className="z-20 flex flex-col justify-center items-center">
          <h2 className="text-white h2 font-bold mb-4">Opening Hours</h2>
          <Separator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] md:w-[470px] md:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              alt="Opening Hours"
              fill
              quality={100}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
