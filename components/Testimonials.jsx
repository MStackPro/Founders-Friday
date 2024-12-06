'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/legacy/image";
import PaginationBtn from './PaginationBtn';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mr Belba Ngoy',
      message: 'Always a remarkable experience for my team and myself',
      image: '/avatar.png',
    },
    {
      name: 'Jane Doe',
      message: 'An incredible experience that exceeded expectations!',
      image: '/avatar.png',
    },
    {
      name: 'John Smith',
      message: 'A wonderful event for both my team and me!',
      image: '/avatar.png',
    },
    {
      name: 'John Smith',
      message: 'A wonderful event for both my team and me!',
      image: '/avatar.png',
    },
    {
      name: 'John Smith',
      message: 'A wonderful event for both my team and me!',
      image: '/avatar.png',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">What Do Our Attendees Have To Say?</h2>
          <p className="text-primaryLight">Well See For Yourself!</p>
        </div>
        <div className="testimonial-slider">
          <Swiper
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto rounded-full border border-primary mb-4 p-2"
                    width={100}
                    height={100}
                    priority
                  />
                  <h3 className="font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-primaryLight">{testimonial.message}</p>
                </div>
              </SwiperSlide>
            ))}
            <PaginationBtn />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
