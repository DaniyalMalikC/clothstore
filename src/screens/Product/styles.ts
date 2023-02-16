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
