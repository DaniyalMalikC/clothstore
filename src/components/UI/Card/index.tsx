import React from 'react'

import {
  Card as MuiCard, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import { useCardStyles } from './styles';
import { CardProps } from './types';
import Button from '../Button';

function Card(props: CardProps) {
  const {
    image, title, subtitle, buttonLabel, handleButton, buttonIcon, ...rest
  } = props

  const { classes } = useCardStyles()

  const onButtonPress = () => {
    if (handleButton) {
      handleButton()
    }
  }

  return (
    <MuiCard className={classes.card} {...rest}>
      {image && <CardMedia
        className={classes.cardImage}
        image={image}
        title={title}
      />}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      {buttonLabel && handleButton && (
        <CardActions>
          <Button size="small" label={buttonLabel} variant="text" startIcon={buttonIcon} onClick={onButtonPress} />
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card
