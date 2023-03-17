import { ListItemProps as MUIListItemProps } from '@mui/material';

export interface ListItemProps extends MUIListItemProps {
  icon?: string | JSX.Element;
  primaryLabel: string | JSX.Element
  secondaryLabel?: string | JSX.Element;
  divider?: boolean
}
