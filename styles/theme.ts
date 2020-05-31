import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Internal
import { Palette } from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Palette.PRIMARY
    },
    secondary: {
      main: Palette.SECONDARY
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: Palette.TEXT
    }
  }
});

export default theme;