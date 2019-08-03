import React, {Component} from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import {Button} from '@material-ui/core';

import Dashboard from './containers/Dashboard.js';
import Login from './components/Auth/Login';

let theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple,
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
        <Login></Login>
       <Dashboard/>
      </ThemeProvider>
      
    );
  }
}
 
export default App;