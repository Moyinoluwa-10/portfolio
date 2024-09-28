"use client";
import Card from "./card";
import { TESTIMONIALS } from "@/constants/home/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CSSProperties } from "react";

const Carousel = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={
          {
            "--swiper-pagination-color": "#1AFFA8",
            "--swiper-pagination-bullet-inactive-color": "#000000",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
            "--swiper-pagination-bullet-size": "12px",
          } as CSSProperties
        }
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={index} className="pb-20">
            <Card {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
