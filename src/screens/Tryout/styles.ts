import { createMakeStyles } from 'tss-react';
import useTheme from '../../common/utils/theme';

const {
  makeStyles,
} = createMakeStyles({ useTheme });

export const useTryoutStyles = makeStyles<{background?: string}>()((theme, { background }) => ({
  tryoutView: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modelView: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tryoutContainer: {
    backgroundColor: theme.secondaryColor,
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    padding: '30px 50px',
    width: '45%',
    minWidth: 300,
  },
  modelContainer: {
    backgroundColor: background || theme.secondaryColor,
    margin: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    width: '25%',
    minWidth: 300,
  },
  modelImage: {
    // backgroundColor: background || theme.secondaryColor,
    width: 300,
  },
  modelTeesImage: {
    position: 'absolute',
    width: 300,
  },
  tryoutSections: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
  },
  tryoutButtons: {
    backgroundColor: `${theme.primaryColor}20`,
    padding: 10,
    minWidth: 40,
    height: 40,
    borderRadius: 5,
    margin: 10,
    color: 'darkred',
  },
}));
