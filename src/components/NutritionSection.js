import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function NutritionSection() {
  return (
    <section className="nutrition-section">
      {/* Heading */}
      <h2 className="nutrition-heading">
        Daily Dose of <span>Nutrition</span>
      </h2>
      <p className="nutrition-text">
      Milky Mist is dedicated to spreading the daily dose of nutrition - all day, every day. From being the initial ingredient to delivering the finishing touch, we make sure our products add the nutritional value you deserve.
With our range of 400+ SKU's, we’re committed to making India, a healthy India.
      </p>
       <Link to="/products">
      <button className="nutrition-btn">View all products</button>
      </Link>
<br></br><br></br>
      {/* Moving Products */}
      <div className="nutrition-products max-w-7xl mx-auto mt-10">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide><img src="/images/p1.JPG" alt="Product 1" /></SwiperSlide>
          <SwiperSlide><img src="/images/p2.JPG" alt="Product 2" /></SwiperSlide>
          <SwiperSlide><img src="/images/p3.JPG" alt="Product 3" /></SwiperSlide>
          <SwiperSlide><img src="/images/p4.JPG" alt="Product 4" /></SwiperSlide>
          <SwiperSlide><img src="/images/p5.JPG" alt="Product 5" /></SwiperSlide>
          <SwiperSlide><img src="/images/p6.JPG" alt="Product 6" /></SwiperSlide>
          <SwiperSlide><img src="/images/p7.JPG" alt="Product 7" /></SwiperSlide>
          <SwiperSlide><img src="/images/p8.JPG" alt="Product 8" /></SwiperSlide>
          <SwiperSlide><img src="/images/p9.JPG" alt="Product 9" /></SwiperSlide>
          <SwiperSlide><img src="/images/p10.JPG" alt="Product 10" /></SwiperSlide>
          <SwiperSlide><img src="/images/p11.JPG" alt="Product 11" /></SwiperSlide>
          <SwiperSlide><img src="/images/p12.JPG" alt="Product 12" /></SwiperSlide>
          <SwiperSlide><img src="/images/p13.JPG" alt="Product 13" /></SwiperSlide>
          <SwiperSlide><img src="/images/p14.JPG" alt="Product 14" /></SwiperSlide>
          <SwiperSlide><img src="/images/p15.JPG" alt="Product 15" /></SwiperSlide>
          <SwiperSlide><img src="/images/p16.JPG" alt="Product 16" /></SwiperSlide>
          <SwiperSlide><img src="/images/p17.JPG" alt="Product 17" /></SwiperSlide>
          <SwiperSlide><img src="/images/p18.JPG" alt="Product 18" /></SwiperSlide>
          <SwiperSlide><img src="/images/p19.JPG" alt="Product 19" /></SwiperSlide>
          <SwiperSlide><img src="/images/p20.JPG" alt="Product 20" /></SwiperSlide>
          <SwiperSlide><img src="/images/p21.JPG" alt="Product 21" /></SwiperSlide>
          <SwiperSlide><img src="/images/p22.JPG" alt="Product 22" /></SwiperSlide>
          <SwiperSlide><img src="/images/p23.JPG" alt="Product 23" /></SwiperSlide>
          <SwiperSlide><img src="/images/p24.JPG" alt="Product 24" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
