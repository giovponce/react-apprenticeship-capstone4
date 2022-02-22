import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { ImgForCategories, StyledH1, StyledH3 } from "../utils/StyledComponents/Styled";
import { useCategories } from '../utils/hooks/useCategories';


export default function SwiperCategories() {

  const  categoriesFromApi  = useCategories();
  const slides = categoriesFromApi.data.results ? categoriesFromApi.data.results : [];

  return (
    <>
      <StyledH1>Categories</StyledH1>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          670: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          984: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          2050: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.id} virtualIndex={index}>
            <StyledH3>{slideContent.data.name}</StyledH3>
            <ImgForCategories src={slideContent.data.main_image.url}></ImgForCategories>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
