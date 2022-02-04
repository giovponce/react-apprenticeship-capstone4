import React from 'react';
import  products  from '../mocks/en-us/featured-products.json'
import { GridContainer, ImgForProducts, StyledH1, StyledH3, StyledH4 } from '../utils/StyledComponents/Styled';
import Card from './Card';

export default function ProductGrid() {

    

    

  return (
    <>
    <StyledH1>Featured Products</StyledH1><br/>
    <GridContainer>
        {products.results.map((product) => (
            <Card key={product.id} product={product}></Card>
        ))}
    </GridContainer>
    </>
  )
}
