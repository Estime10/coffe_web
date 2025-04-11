import Image from "next/image";

export const Badge = ({containerStyles}: {containerStyles: string}) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" alt="badge" fill className="object-contain" />
    </div>
  )
}
