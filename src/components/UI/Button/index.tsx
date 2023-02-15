import React from 'react';

import { Button as MUIButton } from '@mui/material';
import { ButtonProps } from './types';
import { useButtonStyles } from './styles';

function Button(props: ButtonProps) {
  const {
    variant, color, label, ...rest
  } = props;
  const { classes } = useButtonStyles();
  return (
    <MUIButton
      className={classes.root}
      variant={variant || 'contained'}
      color={color || 'primary'}
      {...rest}
    >
      {label}
    </MUIButton>
  );
}

export default Button;
