import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { ImgForSlider } from '../utils/StyledComponents/Styled';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default function SwiperBanners () {
  
  const  bannersFromApi  = useFeaturedBanners();
  const slides = bannersFromApi.data.results ? bannersFromApi.data.results : [];

  return (
    <>
    <Swiper 
      style={{height:"15em"}} 
      modules={[Autoplay, Pagination]} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30} 
      slidesPerView={1} 
      pagination={{
        clickable: true,
      }}
    >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index}>
            <ImgForSlider src={slideContent.data.main_image.url}></ImgForSlider>
          </SwiperSlide>
        ))}
    </Swiper>
    </>
  );
};