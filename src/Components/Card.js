import React from 'react';
import { StyledCard, StyledH3, StyledH4, ImgForProducts, AddToCart } from '../utils/StyledComponents/Styled';

export default function Card({product}) {

    const details = (product) => {
        console.log(product);
    }

    const truncate = (str) => {
        return str.length > 20 ? str.substring(0, 15) + "..." : str;
    }

    const addToCart = (product) => {
        console.log(product);
    }

  return <div>
            <StyledCard>
                <ImgForProducts onClick={()=>{details(product)}} src={product.data.mainimage.url} alt={product.data.name} />
                <StyledH3>{truncate(product.data.name)}</StyledH3>
                <StyledH4>{product.data.category.slug}</StyledH4>
                <StyledH3>${product.data.price}</StyledH3><AddToCart onClick={()=>{addToCart(product)}}>Add to cart</AddToCart>                
            </StyledCard>
  </div>;
}
