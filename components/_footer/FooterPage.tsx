import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Links = [
  {href: "/", name: "Home"},
  {href: "/", name: "Explore"},
  {href: "/", name: "About"},
  {href: "/", name: "Menu"},
  {href: "/", name: "Contact"},
]


export const FooterPage = () => {
    return (
        <footer id="contact" className="relative w-full min-h-[300px] md:min-h-[400px]">
          <div className="absolute w-full h-full bg-black/[0.8] z-10"></div>
            <Image src="/assets/footer/bg.png" alt="Footer" fill quality={100} className="object-cover" />
            <div className="container mx-auto relative z-20 py-8 md:py-12">
              <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
                  <div className="flex flex-col items-center justify-center">
                    <Link href="/" className="relative w-[250px] h-[120px] md:w-[320px] md:h-[150px] mx-auto">
                      <Image src="/assets/Coffe.svg" alt="Logo" fill quality={100} className="object-contain" />
                    </Link>
                  </div>
                <nav className="flex flex-col items-center justify-center gap-4 md:gap-8 md:flex-row">
                  {Links.map((link, index) => {
                    return (
                      <Link href={link.href} key={index} className="text-[#F5F5F5] text-base md:text-xl uppercase font-bold
                      md:hover:text-[#c7a17a] transition-all duration-300 tracking-wide">
                        {link.name}
                      </Link>
                    )
                  })}
                </nav>
                <ul className="flex text-[#F5F5F5]/[0.5] text-lg md:text-xl gap-4">
                  <Link href="/" className="w-[34px] h-[34px] border border-[#F5F5F5]/[0.5] flex items-center justify-center rounded-full md:hover:text-[#c7a17a] transition-all duration-300">
                    <FaYoutube />
                  </Link>
                  <Link href="/" className="w-[34px] h-[34px] border border-[#F5F5F5]/[0.5] flex items-center justify-center rounded-full md:hover:text-[#c7a17a] transition-all duration-300">
                    <FaFacebook />
                  </Link>
                  <Link href="/" className="w-[34px] h-[34px] border border-[#F5F5F5]/[0.5] flex items-center justify-center rounded-full md:hover:text-[#c7a17a] transition-all duration-300">
                    <FaInstagram />
                  </Link>
                </ul>
                <div className="w-full max-w-[90%] md:max-w-[80%] border-t border-[#F5F5F5]/[0.5] pt-6 mt-4">
                  <p className="text-center text-[#F5F5F5]/[0.5] text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Estime Vangu. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
        </footer>
    )
}
