import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useCardStyles = makeStyles<{ mediaQuery?: boolean }>()((theme, { mediaQuery }) => ({
  card: {
    width: 300,
    height: 460,
    margin: mediaQuery ? '0px' : '25px 45px',
  },
  cardImage: {
    height: 300,
    width: 300,
    backgroundColor: theme.secondaryColor,
  },
  cardTitle: {
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
}));
