import { CardProps as MUICardProps } from '@mui/material';

export interface CardProps extends MUICardProps {
  image?: string;
  subtitle?: string | JSX.Element;
  buttonLabel?: string ;
  handleButton?: () => void
  buttonIcon?: string | JSX.Element;
}
