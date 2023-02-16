import React from 'react'

import {
  Box, Container, Grid, Typography, Chip,
} from '@mui/material';
import { Height, Colorize } from '@mui/icons-material';
import { ProductData } from '../ProductSwiper/types'

import { useProductDetailStyles } from './styles';
import useTheme from '../../../common/utils/theme';
import { Button, ListItem } from '../../UI';

function ProductColor({ color }) {
  return color.length > 1
    ? color?.map((color) => (
      <div style={{
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 5,
      }}
      />
    ))
    : <div style={{
      backgroundColor: color[0],
      width: 20,
      height: 20,
      borderRadius: 5,
    }}
    />
}

function ProductDetails(props: { activeProduct: ProductData }) {
  const { activeProduct } = props

  const { classes } = useProductDetailStyles()
  const theme = useTheme()

  return (
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
            {activeProduct.tags && activeProduct.tags?.map((tags) => <Chip label={tags} className={classes.chips} />)}
            <ListItem icon={<Height />} primaryLabel="Size" secondaryLabel={activeProduct.size} divider />
            <ListItem
              icon={<Colorize />}
              primaryLabel="Color"
              secondaryLabel={<ProductColor color={activeProduct.color} />}
              divider
            />
            <Button label="Add to Cart" variant="text" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetails
