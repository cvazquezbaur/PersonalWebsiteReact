// src/theme.ts
import { createTheme } from '@mui/material/styles';

const burgundyMain = '#800020';
const burgundyRgbaHover = 'rgba(128, 0, 32, 0.12)';
const surfaceRgba = 'rgba(44, 44, 44, 0.85)';
const appBarRgba = 'rgba(9, 9, 9, 0.85)';
const borderBurgundy = '#800020';

const baseFontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#2c2c2c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cfcfcf',
    },
    primary: {
      main: burgundyMain,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9e3a4b',
      contrastText: '#ffffff',
    },
  },

  // Global typography: same font and weight for all variants
  typography: {
    fontFamily: baseFontFamily,
    // Make all variants use weight 400 so text matches across the app.
    // You can customize individual variants if needed later.
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    subtitle1: { fontWeight: 400 },
    subtitle2: { fontWeight: 400 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
    button: { fontWeight: 400, textTransform: 'none', letterSpacing: '0.2px' },
    caption: { fontWeight: 400 },
    overline: { fontWeight: 400 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // ensure the body uses the theme background and font smoothing
          backgroundColor: '#000000',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: appBarRgba,
          boxShadow: 'none',
          backdropFilter: 'saturate(120%) blur(4px)',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceRgba,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: surfaceRgba,
          color: '#ffffff',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          fontFamily: baseFontFamily,
        },
        containedPrimary: {
          backgroundColor: burgundyMain,
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#5f0018',
          },
        },
        outlinedPrimary: {
          backgroundColor: 'transparent',
          color: '#ffffff',
          borderColor: borderBurgundy,
          borderWidth: '1px',
          '&:hover': {
            backgroundColor: burgundyRgbaHover,
            borderColor: borderBurgundy,
          },
        },
        textPrimary: {
          backgroundColor: 'transparent',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: burgundyRgbaHover,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: burgundyMain,
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#222',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
  },
});

export default theme;