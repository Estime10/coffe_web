import Image from "next/image";
export const ExplorerPage = () => {
  return (
    <section className="py-12 md:py-0 md:h-[90vh] md:w-screen">
      <div className="px-10 md:px-12 mx-auto md:w-full md:h-full flex md:justify-center md:items-center">
        <div className="w-full flex flex-col md:flex-row gap-14 md:gap-20">
          <div className="flex-1 flex flex-col justify-around items-end text-center md:text-left gap-12 md:gap-0 max-w-[400px] mx-auto md:max-w-none md:mx-0">
            {/* Item 1 */}
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image src="/assets/explore/coffees/coffee-1.svg" alt="explorer" width={56} height={56} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Rich Expresso Blends</h3>
                <p className="max-w-[400px]">Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely coffee experience.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-right md:flex md:flex-col md:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image src="/assets/explore/coffees/coffee-2.svg" alt="explorer" width={56} height={56} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Classic Drip Coffee</h3>
                <p className="max-w-[400px]">Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.</p>
              </div>
            </div>
            </div>
          {/* Image */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
            <Image src="/assets/explore/coffeCode.png"
            alt="explorer"
            fill
            className="object-cover"
            quality={100}
            priority
            data-scroll
            data-scroll-speed="0.1"
            />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-around text-center md:text-left gap-12 md:gap-0 max-w-[400px] mx-auto md:max-w-none md:mx-0">
            {/* Item 3 */}
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-left md:flex md:flex-col md:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image src="/assets/explore/coffees/coffee-3.svg" alt="explorer" width={56} height={56} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Smooth Cold Brews</h3>
                <p className="max-w-[400px]">Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="relative flex items-start">
              <div className="md:max-w-[420px] md:text-left md:flex md:flex-col md:items-start">
                <div className="mb-6 flex justify-center items-center">
                  <Image src="/assets/explore/coffees/coffee-4.svg" alt="explorer" width={56} height={56} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Flavorful Latte Varieties</h3>
                <p className="max-w-[400px]">Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
