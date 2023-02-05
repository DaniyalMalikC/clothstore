import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = {
  backgroundSurfaceColor: 'lightGrey',
  secondaryColor: '#DBD4CB',
  primaryColor: '#005968',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  grayColor: '#CACACA',
  darkColor: '#707070',
  lightColor: '#F7F9FC',
  borderColor: '#DCE1EA',
  backgroundDarkSurface: '#282829',
};

const THEME = createTheme({
  typography: {
  },
  palette: {
    primary: { main: theme.primaryColor },
    secondary: { main: theme.secondaryColor },
    info: { main: theme.whiteColor },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
      },
    },
  },
});

export function MuiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={THEME}>
      {children}
    </ThemeProvider>
  )
}

function useTheme() {
  return theme;
}

export default useTheme;
