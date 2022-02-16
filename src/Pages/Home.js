import React from 'react';
import { BlockedStyledContainer, StyledH1 } from '../utils/StyledComponents/Styled';
import SwiperBanners from '../Components/SwiperBanners';
import SwiperCategories from '../Components/SwiperCategories';
import ProductsGrid from '../Components/ProductsGrid';

export default function Home() {
  return (
  <BlockedStyledContainer>
    <SwiperBanners />
    <br/><br/><br/>
    <SwiperCategories />
    <br/><br/><br/>
    <StyledH1>Featured Products</StyledH1>
    <ProductsGrid featured={true}/>
  </BlockedStyledContainer>
  );
}
