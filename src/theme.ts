'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#222831',
      paper: '#393E46',
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#BBBBBB',
    },
    primary: {
      main: '#00ADB5',
    },
    secondary: {
      main: '#393E46',
    },

  },
  typography: {
    fontFamily: 'var(--font-poppins), sans-serif',
  },
  
});

export default theme;
