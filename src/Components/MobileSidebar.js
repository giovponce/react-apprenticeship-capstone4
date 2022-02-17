import React, { useState } from 'react';
import { StyledMobileFilterContainer, ChipMobileContent, ChipMobile, StyledMobileCheckbox, StyledMobileLabel } from '../utils/StyledComponents/Styled';
import  categories  from '../mocks/en-us/product-categories.json'
import { MdClose } from 'react-icons/md';


export default function MobileSidebar({toggleMobileCategory}) {

  const [categoriesSelection, setCategoriesSelection] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(categories.results.length).fill(false)
)

  const clear = () => {
    setCategoriesSelection(false);
    toggleCategory('clear');
  }

  const toggleCategorySelection = (categoryId, position) => {
    toggleMobileCategory(categoryId);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState)
  }


  return (
    <StyledMobileFilterContainer>
      {categoriesSelection ? (
        <>
          <div>
            {categories.results.map((category, index) => {
              return (
                <ChipMobile key={index} onClick={(e)=> {toggleCategorySelection(category.id, index)}}>
                  <ChipMobileContent>
                    <StyledMobileCheckbox id="input" type="checkbox" value={category.data.name} checked={checkedState[index]}/>
                    <StyledMobileLabel htmlFor="input">{category.data.name}</StyledMobileLabel>
                  </ChipMobileContent>
                </ChipMobile>
              )
            })}
            <ChipMobile onClick={clear}>
              <ChipMobileContent><MdClose/></ChipMobileContent>
            </ChipMobile>
          </div>
        </>
      ):(
        <>
        <ChipMobile onClick={()=>{setCategoriesSelection(true)}}>
          <ChipMobileContent>Filter by Categories</ChipMobileContent>
        </ChipMobile>
        </>
      )}
    </StyledMobileFilterContainer>
  )
}
