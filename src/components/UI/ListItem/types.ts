import { ListItemProps as MUIListItemProps } from '@mui/material';

export interface ListItemProps extends MUIListItemProps {
  icon?: string | JSX.Element;
  primarylabel: string | JSX.Element
  secondarylabel?: string | JSX.Element;
  divider?: boolean
}
