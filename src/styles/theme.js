import { createMuiTheme } from '@material-ui/core/styles/';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import colors from './colors';

const breakpoints = createBreakpoints({});

/* eslint-disable import/no-mutable-exports */
const theme = createMuiTheme({
  palette: {
    background: { default: colors.white },
    primary: { main: colors.primary },
    secondary: { main: colors.orange },
    white: { main: colors.white },
    error: { main: colors.error },
    text: {
      primary: colors.dark2,
      secondary: colors.dark1,
      white: colors.white,
    },
  },
  spacing: 8,
  // breakpoints,
  // breakpoints: {
  //   keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  //   values: [0, 600, 960, 1280, 1920],
  // },
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 'bold',
    pxToRem: (size) => `${(size / 16) * 1}rem`,
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -1,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -0.8,
    },
    h3: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1.5,
      letterSpacing: -0.4,
    },
    h4: {
      fontSize: 24,
      lineHeight: 1.33,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 20,
      lineHeight: 1.4,
      fontWeight: 'bold',
      [breakpoints.up('md')]: {
        fontSize: 24,
        lineHeight: 1.33,
      },
    },
    h6: {
      fontSize: 18,
      lineHeight: 1.44,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.71,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: 10,
      lineHeight: 1.4,
      textTransform: 'none',
    },
  },
  overrides: {
    // MuiTableRow: {
    //   '&.MuiCheckbox-colorSecondary.Mui-checked': {
    //     color: '#F28262',
    //   },
    // },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiSkeleton: {
      root: {
        backgroundColor: '#EAEAEA',
      },
    },
    MuiButton: {
      root: {
        height: 40,
        textTransform: 'none',
      },
      sizeLarge: {
        height: 48,
      },
      sizeSmall: {
        height: 32,
      },
      outlined: {
        '&.Mui-disabled': {
          border: '1px solid #ebebeb',
          color: colors.gray,
        },
      },
      contained: {
        fontWeight: 'bold',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none !important',
        },
        '&.Mui-disabled': {
          border: '1px solid #ebebeb',
          backgroundColor: colors.light1,
          color: colors.gray,
        },
      },
    },
    MuiTableRow: {
      '&$selected': {
        backgroundColor: 'black',
      },
    },
  },
  mixins: {
    toolbar: {
      backgroundColor: colors.white,
      '& *': { color: colors.dark2 },
      // minHeight: 40,
      [breakpoints.down('md')]: {
        minHeight: 56,
        paddingLeft: 15,
        paddingRight: 15,
      },
      [breakpoints.up('md')]: {
        minHeight: 68,
        paddingLeft: 160,
        paddingRight: 160,
      },
    },
  },
});

// export default responsiveFontSizes(theme);
export default theme;
