import React from 'react'

import {
  Box, Divider, Typography, useMediaQuery,
} from '@mui/material';
import { AddBoxOutlined } from '@mui/icons-material'
import { Card } from '../../UI';
import { useRelatedProductStyles } from './styles';
import useTheme from '../../../common/utils/theme';
import { ProductData } from '../ProductSwiper/types';

function RelatedProduct({ product }: { product: ProductData[]}) {
  const { classes } = useRelatedProductStyles()
  const theme = useTheme()
  const matches = useMediaQuery('(max-width: 1559px)');

  const handleAddtoCart = () => {
    console.log('Added to Card!')
  }

  return (
    <Box className={classes.relatedContainer}>
      <Typography variant="h2" color={theme.primaryColor}>
        Related Product
        <Divider />
      </Typography>
      <Box className={classes.relatedProducts}>
        {product.slice(0, matches ? 6 : 8).map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            subtitle={item.prize}
            buttonLabel="Add to Cart"
            buttonIcon={<AddBoxOutlined />}
            handleButton={handleAddtoCart}
          />
        ))}
      </Box>
    </Box>
  )
}

export default RelatedProduct
