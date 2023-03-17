import React, { useState, useContext } from 'react';

import {
  Box, Card, CardActions, CardContent, CardMedia, Divider, Typography,
} from '@mui/material';
import { AddBoxOutlined } from '@mui/icons-material'
import { ProductContext } from '../../context/ProductContext';
import { ProductDetails, ProductSwiper } from '../../components/Parts';

import { useProductStyles } from './styles';
import { ProductData } from '../../components/Parts/ProductSwiper/types';
import useTheme from '../../common/utils/theme';
import { Button } from '../../components/UI';

function Product() {
  const { product } = useContext(ProductContext)
  const [activeProduct, setActiveProduct] = useState<ProductData>(product[0])

  const { classes } = useProductStyles()
  const theme = useTheme()

  const handleActive = (index) => {
    setActiveProduct(product[index])
  }

  return (
    <div className={classes.productView}>
      <Box className={classes.productContainer}>
        <ProductSwiper product={product} activeProduct={activeProduct} handleActive={handleActive} />
      </Box>
      <ProductDetails activeProduct={activeProduct} />
      <Box className={classes.relatedContainer}>
        <Typography variant="h2" color={theme.primaryColor}>
          Related Product
          <Divider />
        </Typography>
        <Box className={classes.relatedProducts}>
          {product.slice(0, 8).map((item) => (
            <Card sx={{ width: 300, height: 460, margin: '40px 80px' }}>
              <CardMedia
                sx={{ height: 300, width: 300, backgroundColor: theme.secondaryColor }}
                image={item.image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.prize}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" label="Add to Cart" variant="text" startIcon={<AddBoxOutlined />} />
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Product;
