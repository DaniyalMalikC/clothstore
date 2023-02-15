import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = {
  backgroundSurfaceColor: 'lightGrey',
  primaryColor: '#001944',
  secondaryColor: '#DBD4CB',
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
    fontFamily: 'Relaway, Montserrat, Poppins', // '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '3.3rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '2.8rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '1.3rem',
    },
    h6: {
      fontFamily: 'Poppins, Montserrat',
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontFamily: 'Relaway, Montserrat',
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: 'Relaway, Montserrat',
      fontSize: '0.8rem',
    },
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
