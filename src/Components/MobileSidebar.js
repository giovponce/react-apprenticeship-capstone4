import React, { useState } from 'react';
import { StyledMobileFilterContainer, ChipMobileContent, ChipMobile, StyledMobileCheckbox, StyledMobileLabel } from '../utils/StyledComponents/Styled';
import { MdClose } from 'react-icons/md';
import { useCategories } from '../utils/hooks/useCategories';


export default function MobileSidebar({toggleMobileCategory}) {

  const  categoriesFromApi  = useCategories();
  const categories = categoriesFromApi.data.results ? categoriesFromApi.data.results : [];

  const [categoriesSelection, setCategoriesSelection] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(categories?.length).fill(false)
  )

  const clear = () => {
    setCategoriesSelection(false);
    toggleCategory('clear');
  }

  const toggleCategorySelection = (categoryId, position) => {
    //should mark chip as selected when clicked , if already selected, mark as not selected
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
            {categories.map((category, index) => {
              return (
                <ChipMobile key={index} onClick={(e)=> {toggleCategorySelection(category.id, index)}}>
                  <ChipMobileContent>
                    <StyledMobileCheckbox style={{display:"none"}} id="input" type="checkbox" value={category.data.name} checked={checkedState[index]}/>
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
