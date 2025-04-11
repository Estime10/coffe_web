import Link from "next/link"

const Links = [
  {href: "/", name: "Home"},
  {href: "/", name: "Explore"},
  {href: "/", name: "About"},
  {href: "/", name: "Menu"},
  {href: "/", name: "Contact"},
]

export const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-cormorant text-4xl uppercase items-center justify-center">
      {Links.map((link, index) => (
          <Link href={link.href}
          key={index}
          className="flex overflow-hidden hover:text-[#F5F5F5] transition-all duration-300"
          >{link.name}</Link>
      ))}
    </ul>
  )
}
