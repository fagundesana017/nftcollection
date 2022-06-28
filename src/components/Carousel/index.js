import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import {Container} from './CarouselElements';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';

export default function Carousel() {
 return (
   <Container>
     <Swiper
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        pagination={{
          type:'fraction',
        }}
        scrollbar={{
          draggable:true
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        effect={"cards"}
        grabCursor={true}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img2} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img3} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img4} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img5} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img6} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img7} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img8} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img9} alt='The Weirdos'/></SwiperSlide>
        <SwiperSlide><img src={img10} alt='The Weirdos'/></SwiperSlide>
      </Swiper>
   </Container>
 );
}