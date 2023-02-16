import React, { useState, useContext } from 'react';

import { Box } from '@mui/material';
import { ProductContext } from '../../context/ProductContext';
import { ProductDetails, ProductSwiper } from '../../components/Parts';

import { useProductStyles } from './styles';
import { ProductData } from '../../components/Parts/ProductSwiper/types';

function Product() {
  const { product } = useContext(ProductContext)
  const [activeProduct, setActiveProduct] = useState<ProductData>(product[0])

  const { classes } = useProductStyles()

  const handleActive = (index) => {
    setActiveProduct(product[index])
  }

  return (
    <div className={classes.productView}>
      <Box className={classes.productContainer}>
        <ProductSwiper product={product} activeProduct={activeProduct} handleActive={handleActive} />
      </Box>
      <ProductDetails activeProduct={activeProduct} />
    </div>
  );
}

export default Product;
