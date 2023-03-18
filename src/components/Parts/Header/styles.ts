import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useHeaderStyles = makeStyles()((theme) => ({
  companyText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
}));
