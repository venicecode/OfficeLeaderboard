import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import purple from "@material-ui/core/colors/purple";
import Dashboard from "./containers/Dashboard.js";
import Login from "./components/Auth/Login";
import * as actions from "./actions/actions";

const mapStateToProps = store => ({
  company: store.colleague.company,
  office: store.colleague.office,
  isSigned: store.colleague.isSigned,
  user: {
    userId: store.colleague.user.userId,
    userName: store.colleague.user.userName,
    userScores: store.colleague.user.userScores
  },
  companyGames: store.colleague.companyGames
});

const mapDispatchToProps = dispatch => ({
  loginButtonHandler: user => {
    dispatch(actions.employeeLogin(user));
  },
  signUpButtonHandler: user => {
    dispatch(actions.employeeSignUp(user));
  },
  addPointButtonHandler: game => {
    dispatch(actions.addPoint(game));
  }
});

let theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple
  },
  status: {
    danger: "orange"
  }
});

theme = responsiveFontSizes(theme);

const App = props => (
  <ThemeProvider theme={theme}>
    <Route path="/dashboard" render={() => <Dashboard {...props} />} />
    <Route
      path="/"
      exact
      render={() =>
        props.isSigned ? (
          <Redirect to="/dashboard" />
        ) : (
          <Login
            loginHandler={props.loginButtonHandler}
            signupHandler={props.signUpButtonHandler}
          />
        )
      }
    />
  </ThemeProvider>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
