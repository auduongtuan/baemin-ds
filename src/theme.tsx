import {  createTheme, ThemeOptions } from '@mui/material/styles';
import globalColors from './tokens/globalColors';
import {CheckCircleOutlined, ExclaimationCircleOutlined, ExclamationTriangleOutlined, InformationCircleOutlined} from './icons';
let theme = createTheme();
theme = createTheme(theme, {
  palette: {
    primary: {
      main: globalColors.Mint500,
      light: globalColors.Mint400,
      dark: globalColors.Mint600,
      contrastText: globalColors.White
    },
    success: {
      main: globalColors.Green500,
      light: globalColors.Green400,
      dark: globalColors.Green600,
      contrastText: globalColors.White
    },
    error: {
      main: globalColors.Red500,
      light: globalColors.Red400,
      dark: globalColors.Red600,
      contrastText: globalColors.White
    },
    warning: {
      main: globalColors.Yellow500,
      light: globalColors.Yellow400,
      dark: globalColors.Yellow600,
      contrastText: globalColors.White
    },
    info: {
      main: globalColors.Blue500,
      light: globalColors.Blue400,
      dark: globalColors.Blue600,
      contrastText: globalColors.White
    },
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      lineHeight: '3rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.9375rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    }
  }
});
const componentOptions: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {success: <CheckCircleOutlined />, error: <ExclaimationCircleOutlined />, info: <InformationCircleOutlined />, warning: <ExclamationTriangleOutlined />}
      },
      styleOverrides: {
        standardSuccess: {
          backgroundColor: globalColors.Green100,
          color: globalColors.Green900
        },
        standardInfo: {
          backgroundColor: globalColors.Blue100,
          color: globalColors.Blue900
        },
        standardError: {
          backgroundColor: globalColors.Red100,
          color: globalColors.Red900
        },
        standardWarning: {
          backgroundColor: globalColors.Yellow100,
          color: globalColors.Yellow900
        },
        root: (({ownerState, theme}) => {
          const iconColors = {
            error: globalColors.Red600,
            success: globalColors.Green600,
            info: globalColors.Blue600,
            warning: globalColors.Yellow600,
          }
          return {
            borderRadius: '8px',
            padding: theme.spacing(0.5, 1.5),
            ...theme.typography.body1,
            '& .MuiAlert-icon': {
              color: iconColors[ownerState.severity || 'success'],
              fontSize: '1.5rem',
              padding: theme.spacing(1, 0)
            }
          };
        }),
      }
    }
  },
};
theme = createTheme(theme, componentOptions);
export default theme;