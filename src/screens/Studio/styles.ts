import { createMakeStyles, keyframes } from 'tss-react';
import useTheme from '../../common/utils/theme';
import studio from '../../assets/studio/studio.jpg'

const {
  makeStyles,
} = createMakeStyles({ useTheme });

const getAnimation = () => keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const useStudioStyles = makeStyles()((theme) => ({
  studio: {
    backgroundImage: `url(${studio})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    width: '100%',
    height: '92.65%',
    display: 'flex',
  },
  dot: {
    background: theme.blackColor,
    width: 25,
    height: 25,
    borderRadius: '50%',
    position: 'fixed',
    top: '40%',
    right: '35%',
    animation: `${getAnimation()} 1s infinite`,
  },
  tooltip: {
    background: `${theme.blackColor} !important`,
    color: `${theme.whiteColor} !important`,
  },
}));
