'use client'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { Badge } from '../_hero/Bagde';
import { Separator } from '../_hero/Separator';

const AboutData = [
  {
    imgSrc: '/assets/about/photo-1.jpg',
    title: 'Our Journey',
    description: 'Founded in 2000, Coffee & Code started as a small café with a vision for exceptional coffee. Now a beloved brand, we\'re known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.',
  },
  {
    imgSrc: '/assets/about/photo-2.jpg',
    title: 'Our Promise',
    description: 'At Coffee & Code, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.',
  },
  {
    imgSrc: '/assets/about/photo-3.jpg',
    title: 'Our Team',
    description: 'At Coffee & Code, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.',
  }
]
export const AboutPage = () => {
  const scrollableSectionRef = useRef(null)
  const scrollTriggerRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      {translateX: 0},
      {
        translateX: '-200vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: 'top top',
          end: '1800vw top',
          scrub: 0.6,
          pin: true,
        }
      }
    )
    return () => {
      animation.kill()
    }
  }, [])
  return (

        <section id="about" className="overflow-hidden bg-[#100e0e]">
            <div ref={scrollTriggerRef}>
                <div ref={scrollableSectionRef} className='w-[300vw] h-screen relative flex'>
                    {AboutData.map((item, index) => {
                      return <div key={index} className='w-screen h-screen flex flex-col justify-center items-center relative'>
                          <div className='container mx-auto'>
                            <div className='flex gap-[30px] relative'>
                            {/* Text */}
                            <div className='flex-1 flex flex-col justify-center items-center'>
                              <Badge containerStyles='w-[180px] h-[180px]' />
                              <div className='max-w-[560px] text-center'>
                                <h2 className='h2 text-[#F5F5F5] mb-4'>
                                  <span className='mr-4'>{item.title.split(' ')[0]}</span>
                                  <span className='text-[#c7a17a]'>{item.title.split(' ')[1]}</span>
                                  </h2>
                                  <div className='flex justify-center items-center mb-8'>
                                    <Separator />
                                  </div>
                                  <p className='leading-relaxed mb-16 px-8 md:px-0 text-[#F5F5F5]'>
                                    {item.description}
                                  </p>
                                  {/* btn */}
                                  <div className='flex justify-center items-center'>
                                    <button className='btn btn-primary'>
                                      See More
                                    </button>
                                  </div>
                              </div>
                            </div>
                            {/* image */}
                              <div className='hidden md:flex flex-1 w-full h-[70vh] relative rounded-md overflow-hidden'>
                                <Image src={item.imgSrc} alt={item.title} fill className='object-cover' quality={100} priority/>
                              </div>
                            </div>
                          </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
  );
};
