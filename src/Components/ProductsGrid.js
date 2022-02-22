import React, { useEffect, useState } from 'react';
import { GridContainer, SpinnerContainer, Button, StyledDescription } from '../utils/StyledComponents/Styled';
import Card from './Card';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { useProducts } from '../utils/hooks/useProducts';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';


export default function ProductGrid({featured, categories, mobileCategories}) {

  const productsFromApi  = useProducts();
  const products = productsFromApi.data.results ? productsFromApi.data.results : [];

  const featuredProductsFromApi  = useFeaturedProducts();
  const featuredProducts = featuredProductsFromApi.data.results ? featuredProductsFromApi.data.results : [];
  console.log(featuredProducts);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    if(categories?.length > 0 && mobileCategories?.length === 0) {
      const newFilteredProducts = products.filter((product) =>
        categories.includes(product.data.category.id)
      );
      setFilteredProducts(newFilteredProducts);
      setTimeout(() => {
        setLoading(false);
      } , 2000);
    }else if(mobileCategories?.length > 0){
      const newFilteredProducts = products.filter((product) =>
        mobileCategories.includes(product.data.category.id)
      );
      setFilteredProducts(newFilteredProducts);
      setTimeout(() => {
        setLoading(false);
      } , 2000);
    }else{
      setFilteredProducts(products);
      setTimeout(() => {
        setLoading(false);
      } , 2000);
    }
  } , [categories, mobileCategories]);


  const shuffled = featuredProducts.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 5);

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <BounceLoader/>
        </SpinnerContainer>
        ) : featured ? (
        <>
          <GridContainer>
            {selected.map((product) => (
              <Card key={product.id} product={product}></Card>
            ))}
            
          </GridContainer>
          <Link to="/all"><Button>View all products</Button></Link>
        </>
      ) : filteredProducts.length > 0 ? (
        <>
          <GridContainer variant='medium'>
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product}></Card>
            ))}
          </GridContainer>
        </>
      ) : (
        <GridContainer variant='medium'>
          <StyledDescription>No products found, please try another criteria.</StyledDescription>
        </GridContainer>
      )}
    </>
  )
}
