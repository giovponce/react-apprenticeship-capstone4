import React from 'react';
import { BlockedStyledContainer } from '../utils/StyledComponents/Styled';
import SwiperBanners from '../Components/SwiperBanners';
import SwiperCategories from '../Components/SwiperCategories';
import ProductGrid from '../Components/ProductGrid';

export default function Home() {
  return (
  <BlockedStyledContainer>
    <SwiperBanners />
    <br/><br/><br/>
    <SwiperCategories />
    <br/><br/><br/>
    <ProductGrid />
  </BlockedStyledContainer>
  );
}
