import React from 'react'

import {
  Box, Container, Grid, Typography, Chip,
} from '@mui/material';
import { Height, Colorize } from '@mui/icons-material';
import { ProductData } from '../ProductSwiper/types'

import { useProductDetailStyles } from './styles';
import useTheme from '../../../common/utils/theme';
import { Button, ListItem } from '../../UI';

function ProductColor({ colors }) {
  return colors?.map((color) => (
    <span
      key={color}
      style={{
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 5,
      }}
    />
  ))
}

function ProductSize({ sizes }) {
  return (sizes || ['All']).map((size) => (
    <span
      key={size}
      style={{
        padding: '2px 5px',
        fontSize: 14,
        border: '0.25px solid black',
        borderRadius: 5,
        marginRight: 5,
        textAlign: 'center',
      }}
    >{size}
    </span>))
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
            {activeProduct.tags && activeProduct.tags?.map((tags) => <Chip key={tags} label={tags} className={classes.chips} />)}
            <ListItem
              icon={<Height />}
              primaryLabel="Size"
              secondaryLabel={<ProductSize sizes={activeProduct.size} />}
              divider
            />
            <ListItem
              icon={<Colorize />}
              primaryLabel="Color"
              secondaryLabel={<ProductColor colors={activeProduct.color} />}
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
