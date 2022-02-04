import React from 'react';
import  products  from '../mocks/en-us/featured-products.json'
import { GridContainer, ImgForProducts, StyledH1, StyledH3, StyledH4, Card } from '../utils/StyledComponents/Styled';


export default function ProductGrid() {

    const truncate = (str) => {
        return str.length > 20 ? str.substring(0, 15) + "..." : str;
    }

    const details = (product) => {
        console.log(product);
    }

  return (
    <>
    <StyledH1>Featured Products</StyledH1><br/>
    <GridContainer>
        {products.results.map((product) => (
            <Card onClick={()=>{details(product)}} key={product.id}>
                <ImgForProducts src={product.data.mainimage.url} alt={product.data.name} />
                <StyledH3>{truncate(product.data.name)}</StyledH3>
                <StyledH4>{product.data.category.slug}</StyledH4>
                <StyledH3>${product.data.price}</StyledH3>
            </Card>
        ))}
    </GridContainer>
    </>
  )
}
