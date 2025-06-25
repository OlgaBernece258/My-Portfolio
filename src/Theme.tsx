import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#240046',
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;