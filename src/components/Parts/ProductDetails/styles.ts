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
  },
  productInformation: {
    // backgroundColor: theme.secondaryColor,
    borderRadius: 5,
    padding: 25,
  },
  productTitle: {
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  productDetails: {
    color: theme.secondaryColor,
    fontWeight: 300,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  chips: {
    marginRight: 10,
    backgroundColor: theme.secondaryColor,
    color: theme.primaryColor,
  },
}));
