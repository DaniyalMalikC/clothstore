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
  relatedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '50px 0',
    backgroundColor: `${theme.primaryColor}10`,
  },
  relatedProducts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardTitle: {
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
}));
