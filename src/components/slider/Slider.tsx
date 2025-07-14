// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import type { Slide } from "../../types/slide.interface";

import { MdArrowRightAlt } from "react-icons/md";
interface SliderProps {
  slideData: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slideData }) => {
  const [slides, setSlides] = useState<Slide[]>(slideData);

  const handleSlideChange = () => {
    setSlides((prevSlides) => {
      const [first, ...rest] = prevSlides;
      return [...rest, first];
    });
  };
  return (
    <>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-inner-card ml-2 mb-2 align-end">
              <div className="slide-inner-card-content flex flex-col py-2 px-2 ">
                <p className="m-0 font-weight-600"> {slide.title}</p>
                <h2 className="m-0 font-weight-500 fs-base">
                  {slide.subtitle}
                </h2>
              </div>
              <div className="slide-inner-card-cta flex align-center px-1">
                <MdArrowRightAlt />
              </div>
            </div>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
