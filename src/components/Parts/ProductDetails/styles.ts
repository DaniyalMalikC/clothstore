import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useProductDetailStyles = makeStyles()((theme) => ({
  productDescription: {
    borderRadius: 5,
    backgroundColor: theme.primaryColor,
    padding: 25,
    color: theme.whiteColor,
    minWidth: 300,
  },
  productInformation: {
    // backgroundColor: theme.secondaryColor,
    borderRadius: 5,
    padding: 25,
    minWidth: 300,
  },
  productTitle: {
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  productDetails: {
    color: theme.secondaryColor,
    fontWeight: 300,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  chips: {
    marginRight: 10,
    backgroundColor: theme.secondaryColor,
    color: theme.primaryColor,
  },
}));
