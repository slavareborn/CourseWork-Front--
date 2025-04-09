'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      black: {
        highEmphasis: string;
        mediumEmphasis: string;
        lowEmphasis: string;
        transparent: string;
      };
      white: {
        highEmphasis: string;
        mediumEmphasis: string;
        lowEmphasis: string;
        transparent: string;
      };
      additional: {
        green: string;
        red: string;
        purple: string;
        blue: string;
        lightBlue: string;
      };
    };
  }

  interface PaletteOptions {
    custom?: {
      black?: {
        highEmphasis?: string;
        mediumEmphasis?: string;
        lowEmphasis?: string;
        transparent?: string;
      };
      white?: {
        highEmphasis?: string;
        mediumEmphasis?: string;
        lowEmphasis?: string;
        transparent?: string;
      };
      additional?: {
        green?: string;
        red?: string;
        purple?: string;
        blue?: string;
        lightBlue?: string;
      };
    };
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      dark: '#feea00',
      main: '#feea00',
      light: 'rgba(254, 234, 0, 0.6)',
      contrastText: 'rgba(254, 234, 0, 0.4)',
    },
    secondary: {
      dark: '#c6a700',
      main: '#ef97e3',
      light: 'rgba(239, 151, 227, 0.6)',
      contrastText: 'rgba(239, 151, 227, 0.4)',
    },
    custom: {
      black: {
        highEmphasis: '#000000',
        mediumEmphasis: '#4a4a4a',
        lowEmphasis: '#7a7a7a',
        transparent: 'rgba(0, 0, 0, 0.1)',
      },
      white: {
        highEmphasis: '#ffffff',
        mediumEmphasis: 'rgba(255, 255, 255, 0.6)',
        lowEmphasis: '#9f9f9f',
        transparent: 'rgba(255, 255, 255, 0.1)',
      },
      additional: {
        green: '#4caf50',
        red: '#f56969',
        purple: '#9c27b0',
        blue: '#0126E5',
        lightBlue: '#94A9E8 !important',
      },
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: '"Mulish", "Roboto", "Helvetica", "Arial", sans-serif',
    title: {
      fontSize: 64,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 4.375,
      margin: 0,
    },
    h1: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 3,
      margin: 0,
    },
    h2: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.75,
      margin: 0,
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.875,
      marginBottom: 0,
    },
    body1: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.875,
      marginBottom: 0,
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 2,
      marginBottom: 0,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.5,
      marginBottom: 0,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
          width: '100%',
          padding: '12px 0',
        },
        outlined: {
          borderColor: '#000',
          color: '#000',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
          width: '100%',
          padding: '11.2px 0',
          boxSizing: 'border-box',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
