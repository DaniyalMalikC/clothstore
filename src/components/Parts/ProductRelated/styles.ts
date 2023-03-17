import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useRelatedProductStyles = makeStyles()((theme) => ({
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
