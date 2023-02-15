import { ButtonProps as MUIButtonProps } from '@mui/material';

export interface ButtonProps extends MUIButtonProps {
  label: string | JSX.Element;
}
