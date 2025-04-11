import Image from "next/image"
interface MenuItemProps {
  title: string
  description: string
  image: string
  price: number
}

export const MenuItem = ({ title, description, image, price }: MenuItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full overflow-hidden">
        <Image src={image} alt={title} fill quality={100} priority className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
          <div className="flex-1 border-b border-dashed border-[#000] opacity-50 mx-4"></div>
          <p className="text-sm md:text-base text-gray-500">{price.toFixed(2)}$</p>
        </div>
        <p className="text-sm md:text-base text-gray-500">{description}</p>
      </div>
    </div>
  )
}
