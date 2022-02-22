import React from 'react';
import { StyledFilterContainer, StyledH3, StyledH4, FlexSpaceBetween, StyledLabel, StyledCheckbox } from '../utils/StyledComponents/Styled';
import { useCategories } from '../utils/hooks/useCategories';


export default function DesktopSidebar({toggleCategory}) {

  const  categoriesFromApi  = useCategories();
  const categories = categoriesFromApi.data.results ? categoriesFromApi.data.results : [];

  return (
    <StyledFilterContainer>
        <StyledH3>Filter By</StyledH3>
        <StyledH4>Categories</StyledH4>
        {categories.map((category) => {
          return (
            <FlexSpaceBetween key={category.id}>
              <StyledCheckbox id="input" type="checkbox" onClick={()=> {toggleCategory(category.id)}} value={category.data.name} />
              <StyledLabel htmlFor="input">{category.data.name}</StyledLabel>
            </FlexSpaceBetween>
          )
        })}
      </StyledFilterContainer>
  )
}
