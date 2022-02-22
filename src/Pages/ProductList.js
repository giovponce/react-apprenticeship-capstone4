import React, { useState } from 'react';
import { StyledFlexCenteredContainer, BlockedStyledContainer } from '../utils/StyledComponents/Styled';
import Sidebar from '../Components/Sidebar';
import ProductGrid from '../Components/ProductsGrid';
import Pagination from '../Components/Pagination';

export default function ProductList() {

  const [categories, setCategories] = useState([]);
  const [mobileCategories, setMobileCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    if (categoryId === 'clear') {
      setCategories([]);
    }else if(!categories.includes(categoryId)){
      setCategories(categories => [...categories, categoryId]);
    }else{
      setCategories(categories => categories.filter(category => category !== categoryId));
    }
  }

  const toggleMobileCategory = (categoryId) => {
    if (categoryId === 'clear') {
      setMobileCategories([]);
    }else if(!mobileCategories.includes(categoryId)){
      setMobileCategories(categories => [...categories, categoryId]);
    }else{
      setMobileCategories(categories => categories.filter(category => category !== categoryId));
    }
  }

  return (
    <BlockedStyledContainer>
      <StyledFlexCenteredContainer>
        <Sidebar toggleCategory={toggleCategory} toggleMobileCategory={toggleMobileCategory}/>
        <ProductGrid featured={false} categories={categories} mobileCategories={mobileCategories}/>        
      </StyledFlexCenteredContainer>

      <StyledFlexCenteredContainer>
        <Pagination />
      </StyledFlexCenteredContainer>
    </BlockedStyledContainer>
  
  )
}
