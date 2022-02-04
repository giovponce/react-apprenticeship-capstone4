import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { ImgForSlider } from '../utils/StyledComponents/Styled';
import  banners  from '../mocks/en-us/featured-banners.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default function SwiperBanners () {
  
  const slides = banners.results;

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