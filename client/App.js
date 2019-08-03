import React, {Component} from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {Button} from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
theme = responsiveFontSizes(theme);

class App extends Component {
constructor() {
  super();
  this.state = {};

}

  render() { 
    return (
      <ThemeProvider theme = {theme}>
        <Button color = "secondary">
          Hello World
        </Button>
      </ThemeProvider>
      
    );
  }
}
 
export default App;