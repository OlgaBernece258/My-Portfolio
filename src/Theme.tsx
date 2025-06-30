import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#ad4567 ',
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;