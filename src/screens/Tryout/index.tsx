import React, { useContext, useState } from 'react'

import {
  Box, Divider, Typography,
} from '@mui/material'
import { DoDisturb } from '@mui/icons-material'
import { useTryoutStyles } from './styles'
import model from '../../assets/model/model.png'
import { ProductContext } from '../../context/ProductContext'
import useTheme from '../../common/utils/theme'
import { RelatedProducts } from '../../components/Parts'

function Tryout() {
  const { modelBackground, product } = useContext(ProductContext)
  const [background, setBackground] = useState('')
  const [selectedTshirt, setSelectedTshirt] = useState('')
  const products = [{ image: '', model: '', title: 'Empty' }, ...product]

  const { classes } = useTryoutStyles({ background })
  const theme = useTheme()
  return (

    <div className={classes.tryoutView}>
      <Box className={classes.modelView}>

        <Box className={classes.modelContainer}>
          <img src={model} alt="model" className={classes.modelImage} />
          {selectedTshirt && <img src={selectedTshirt} alt="Tees" className={classes.modelTeesImage} />}
        </Box>
        <Box className={classes.tryoutContainer}>
          <Typography variant="h4" fontWeight={500} color={theme.primaryColor}>
            Background Color
            <Divider />
          </Typography>
          <Box className={classes.tryoutSections}>
            {modelBackground.map((color) => (color
              ? (
                <div
                  key={color}
                  className={classes.tryoutButtons}
                  style={{ background: color }}
                  onClick={() => setBackground(color)}
                />
              ) : (
                <div onClick={() => setBackground(color)}>
                  <DoDisturb className={classes.tryoutButtons} />
                </div>
              )))}
          </Box>
          <Typography variant="h4" fontWeight={500} color={theme.primaryColor}>
            T-Shirts
            <Divider />
          </Typography>
          <Box className={classes.tryoutSections}>
            {products.map((item) => (item.image
              ? (
                <img
                  key={item.title}
                  src={item.image}
                  className={classes.tryoutButtons}
                  alt={item.title}
                  onClick={() => setSelectedTshirt(item.model)}
                />
              ) : (
                <div onClick={() => setSelectedTshirt(item.model)}>
                  <DoDisturb className={classes.tryoutButtons} />
                </div>
              )))}
          </Box>
        </Box>
      </Box>

      <RelatedProducts product={product} />
    </div>
  )
}

export default Tryout
