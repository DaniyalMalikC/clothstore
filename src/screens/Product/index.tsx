import React, { useState, useContext } from 'react';

import { Box, Container, Typography } from '@mui/material';
import { ProductContext } from '../../context/ProductContext';
import { ProductSwiper } from '../../components/Parts';

import { useProductStyles } from './styles';

function Product() {
  const { product } = useContext(ProductContext)
  const [activeProduct, setActiveProduct] = useState(product[0])

  const { classes } = useProductStyles()

  const handleActive = (index) => {
    setActiveProduct(product[index])
  }
  return (
    <div className={classes.productView}>
      <div className={classes.productContainer}>
        <ProductSwiper product={product} activeProduct={activeProduct} handleActive={handleActive} />
      </div>
      <Container>
        <Box>
          <Typography>
            {activeProduct.title}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Product;
