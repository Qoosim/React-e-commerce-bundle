import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      {
        products?.map((product) => (
          <ProductCard product={product} />
        ))
      }
    </>
  )
}

export default ProductList;
