import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m2.avif"
              alt="MilkyMist Banner 2"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m3.avif"
              alt="MilkyMist Banner 3"
              className="w-full rounded-lg shadow-lg"
            />


          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m4.avif"
              alt="MilkyMist Banner 4"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m6.avif"
              alt="MilkyMist Banner 6"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m7.avif"
              alt="MilkyMist Banner 7"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m8.avif"
              alt="MilkyMist Banner 8"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

        {/* Slide 10 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="/images/m10.avif"
              alt="MilkyMist Banner 10"
              className="w-full rounded-lg shadow-lg"
            />

          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

