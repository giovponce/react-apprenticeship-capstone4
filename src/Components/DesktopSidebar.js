import React from 'react';
import { StyledFilterContainer, StyledH3, StyledH4, FlexSpaceBetween, StyledLabel, StyledCheckbox } from '../utils/StyledComponents/Styled';
import  categories  from '../mocks/en-us/product-categories.json'


export default function DesktopSidebar({toggleCategory}) {
  return (
    <StyledFilterContainer>
        <StyledH3>Filter By</StyledH3>
        <StyledH4>Categories</StyledH4>
        {categories.results.map((category) => {
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
