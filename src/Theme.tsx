import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#fde',
    },
    secondary: {
      main: '#adb5 ',
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;