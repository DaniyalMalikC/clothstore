import React, { useState, useContext } from 'react';

import {
  Avatar,
  Box, Container, Grid, ListItem, ListItemAvatar, ListItemText, Typography, Divider, Chip,
} from '@mui/material';
import { Height, Colorize } from '@mui/icons-material';
import { ProductContext } from '../../context/ProductContext';
import { ProductSwiper } from '../../components/Parts';

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
      <Container>
        <Grid container marginY={2} spacing={4}>
          <Grid item xs={6}>
            <Box className={classes.productDescription}>
              <Typography variant="subtitle2">
                Mens Wear
              </Typography>
              <Typography variant="h3" className={classes.productTitle}>
                {activeProduct.title}
              </Typography>
              <Typography variant="h3" marginY={2}>
                {activeProduct.prize}
              </Typography>
              <Typography variant="subtitle1" className={classes.productDetails}>
                {activeProduct.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.productInformation}>
              <Typography variant="h4" color={theme.primaryColor} marginBottom={2}>
                Product Guide
              </Typography>
              {['T-Shirt', 'Round Neck'].map((tags) => <Chip label={tags} className={classes.chips} />)}
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.primaryColor }}>
                    <Height />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ fontSize: '0.7rem' }}
                  secondaryTypographyProps={{ fontSize: '1.2rem' }}
                  primary="Size"
                  secondary={activeProduct.size}
                  color="white"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.primaryColor }}>
                    <Colorize />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ fontSize: '0.8rem' }}
                  secondaryTypographyProps={{
                    fontSize: '1.2rem', display: 'flex', flexDirection: 'row',
                  }}
                  primary="Color"
                  secondary={activeProduct.color.length > 1
                    ? activeProduct.color?.map((color) => <div style={{
                      backgroundColor: color, width: 20, height: 20, borderRadius: 5, marginRight: 5,
                    }}
                    />)
                    : <div style={{
                      backgroundColor: activeProduct.color[0], width: 20, height: 20, borderRadius: 5,
                    }}
                    />}
                  color="white"
                />

              </ListItem>
              <Divider />
              <Button label="Add to Cart" variant="text" />
            </Box>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Product;
