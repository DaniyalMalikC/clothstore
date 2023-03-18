import { createMakeStyles } from 'tss-react';
import useTheme from '../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useProductStyles = makeStyles()((theme) => ({
  productView: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  productContainer: {
    backgroundColor: theme.secondaryColor,
    padding: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
