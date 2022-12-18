
import '../../styles/testimonials.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";
import avator01 from '../../assets/img/avatar01.png'
import avator02 from '../../assets/img/avatar02.png'

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">
            <h2 className='section__title'>Testimonials</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide-img-01">
                    <img src={avator01} alt="" />
                </div>
                <h4>Jesica Fernandest</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque unde ea debitis doloribus reprehenderit, eaque ratione assumenda adipisci deserunt tenetur non repellat libero vel ab dolorem mollitia. Corporis, id.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide-img-02">
                    <img src={avator02} alt="" />
                </div>
                <h4>Jesica Fernandest</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque unde ea debitis doloribus reprehenderit, eaque ratione assumenda adipisci deserunt tenetur non repellat libero vel ab dolorem mollitia. Corporis, id.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide-img-03">
                    <img src={avator01} alt="" />
                </div>
                <h4>Jesica Fernandest</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque unde ea debitis doloribus reprehenderit, eaque ratione assumenda adipisci deserunt tenetur non repellat libero vel ab dolorem mollitia. Corporis, id.</p>
            </div>
        </SwiperSlide>
 
      </Swiper>
        </div>
      </section>
    </>
  );
}
