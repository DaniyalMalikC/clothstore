import { createMakeStyles } from 'tss-react';
import useTheme from '../../../common/utils/theme';

const {
  makeStyles,
  // useStyles //<- To use when you need css or cx but don't have custom classes
} = createMakeStyles({ useTheme });

export const useButtonStyles = makeStyles()((theme) => ({
  root: {
    borderRadius: '10px',
    padding: '5px 10px',
    fontSize: '18px',
    fontWeight: 'lighter',
    overflow: 'visible',
    textTransform: 'none',
    margin: '5px',
    '&.MuiButton-sizeMedium': {
      padding: '10px 20px',
      minWidth: '150px',
      minHeight: '50px',
      margin: '10px',
    },
    '&.MuiButton-containedSecondary': {
      backgroundColor: `${theme.secondaryColor}`,
      color: `${theme.whiteColor}`,
      ':hover': {
        backgroundColor: `${theme.secondaryColor}`,
        color: `${theme.whiteColor}`,
      },
    },
    '&.MuiButton-containedPrimary': {
      backgroundColor: `${theme.primaryColor}`,
      color: `${theme.whiteColor}`,
      ':hover': {
        backgroundColor: `${theme.primaryColor}`,
        color: `${theme.whiteColor}`,
      },
    },
    '&.MuiButton-containedInfo': {
      backgroundColor: `${theme.whiteColor}`,
      color: `${theme.blackColor}`,
      ':hover': {
        backgroundColor: `${theme.whiteColor}`,
        color: `${theme.blackColor}`,
      },
    },
    '&.MuiButton-outlined': {
      borderWidth: '2px',
      color: `${theme.blackColor}`,
    },
    '&.MuiButton-outlinedSecondary': {
      borderColor: `${theme.secondaryColor}`,
      color: `${theme.secondaryColor}`,
      ':hover': {
        borderColor: `${theme.secondaryColor}`,
        color: `${theme.secondaryColor}`,
      },
    },
    '&.MuiButton-outlinedPrimary': {
      borderColor: `${theme.primaryColor}`,
      color: `${theme.primaryColor}`,
      ':hover': {
        borderColor: `${theme.primaryColor}`,
        color: `${theme.primaryColor}`,
      },
    },
    '&.MuiButton-outlinedInfo': {
      borderColor: `${theme.whiteColor}`,
      color: `${theme.whiteColor}`,
      ':hover': {
        borderColor: `${theme.whiteColor}`,
        color: `${theme.whiteColor}`,
      },
    },
    '&.MuiButton-text': {
      borderWidth: '0px',
      color: `${theme.primaryColor}`,
      background: 'transparent',
      fontWeight: 400,
    },
  },
}));
