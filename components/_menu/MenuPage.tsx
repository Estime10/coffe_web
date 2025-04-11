import { Separator } from "../_hero/Separator"
import { MenuItem } from "./MenuItem"

const MenuData = [
  {
    title: 'Espresso',
    description: 'Rich and bold shot of coffee.',
    image: '/assets/menu/coffee-1.png',
    price: 3.3,
  },
  {
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and a layer of foam.',
    image: '/assets/menu/coffee-2.png',
    price: 4.5,
  },
  {
    title: 'Latte',
    description: 'Espresso with steamed milk.',
    image: '/assets/menu/coffee-3.png',
    price: 4.2,
  },
  {
    title: 'Americano',
    description: 'Espresso with hot water.',
    image: '/assets/menu/coffee-5.png',
    price: 3.5,
  },
  {
    title: 'Mocha',
    description: 'Espresso with chocolate and steamed milk.',
    image: '/assets/menu/coffee-4.png',
    price: 5.4,
  },
  {
    title: 'Macchiato',
    description: 'Espresso with a dollop of foam.',
    image: '/assets/menu/coffee-3.png',
    price: 3.8,
  },
  {
    title: 'Flat White',
    description: 'Espresso with steamed milk.',
    image: '/assets/menu/coffee-1.png',
    price: 4.25,
  },
  {
    title: 'Iced Coffee',
    description: 'Chilled coffee over ice.',
    image: '/assets/menu/coffee-3.png',
    price: 3.75,
  },
  {
    title: 'Affogato',
    description: 'Espresso poured over vanilla ice cream.',
    image: '/assets/menu/coffee-5.png',
    price: 4.5,
  },
  {
    title: 'Irish Coffee',
    description: 'Espresso with hot water and a shot of whiskey.',
    image: '/assets/menu/coffee-2.png',
    price: 6.2,
  },
]

export const MenuPage = () => {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 md:mb-20 items-center justify-center">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="-mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center text-base md:text-xl max-w-[600px] mx-auto">
            <br />
            <span className="font-bold md:text-3xl text-2xl mb-4">What's your flavour?</span>
            <br />
            Choose your favorite coffee and enjoy your Coding session.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 md:gap-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 p-8 md:p-0">
          {MenuData.map((item, index) => {
            return (
              <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
              />
            )
          })}
        </div>
        <button className="btn">View Full Menu</button>
        </div>
      </div>
    </section>
  )
}
