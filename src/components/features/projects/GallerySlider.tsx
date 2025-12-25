"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ReactNode } from "react";

const GallerySlider = ({ children }: { children: ReactNode[] }) => {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      className="my-slider"
      wrapperClass="!pb-0"
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      }}
      loop
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
