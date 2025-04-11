import Image from "next/image";

export const Separator = ({bg = '#F5F5F5'}: {bg?: string}) => {

  const imgSrc =
  bg === "accent"
  ? "/assets/separator-accent.svg"
  : "/assets/separator-white.svg"

  return (
    <div className='relative w-[168px] h-[26px]'>
      <Image src={imgSrc} alt="separator" fill className="object-contain" />
    </div>
  )
}
