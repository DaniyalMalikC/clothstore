import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useCardStyles = makeStyles()((theme) => ({
  card: {
    width: 300,
    height: 460,
    margin: '40px 80px',
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
