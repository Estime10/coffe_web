

import { IoMdQuote } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const TestimonialsData = [
  {
    name: 'Alice Johnson',
    text: 'The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.',
    profession: 'Graphic Designer',
  },
  {
    name: 'Michael Lee',
    text: "I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
    profession: 'Software Engineer',
  },
  {
    name: 'Emily Chen',
    text: 'The atmosphere here is so cozy and welcoming. The coffee is great, and the staff is always attentive. I always leave feeling refreshed and energized.',
    profession: 'Marketing Manager',
  },
]

export const TestimonialPage = () => {
  return (
    <section id="testimonial" className="h-[60vh] md:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className='h-[400px]'>
          {TestimonialsData.map((testimonial, index) => {
            return (
              <SwiperSlide key={index} className='w-full h-full'>
                <div className='flex justify-center h-full md:pt-14'>
                <div className="max-w-[60%] text-[#100e0e]">
                  <IoMdQuote className="text-4xl md:text-5xl text-[#100e0e] mb-12 mx-auto" />
                <p className="text-xl md:text-2xl text-center mb-8">{testimonial.text}</p>
              <div className='text-center'>
                <p className="text-lg md:text-xl text-[#100e0e]/80 mb-2 font-bold">{testimonial.name}</p>
                <p className="text-sm ttext-[#100e0e]/80 font-semibold">- {testimonial.profession} -</p>
              </div>
              </div>
              </div>
            </SwiperSlide>
          )
          })}
        </Swiper>
      </div>
    </section>
  )
}
