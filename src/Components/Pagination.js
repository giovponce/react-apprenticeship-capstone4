import React from 'react';
import { PaginationDiv, PaginationUl, PaginationLi } from '../utils/StyledComponents/Styled';

export default function Pagination() {
  return (
    <PaginationDiv>
      <PaginationUl>
        <PaginationLi>Prev</PaginationLi>
        <PaginationLi>1</PaginationLi>
        <PaginationLi>2</PaginationLi>
        <PaginationLi>3</PaginationLi>
        <PaginationLi>Next</PaginationLi>
      </PaginationUl>
    </PaginationDiv>
  )
}
