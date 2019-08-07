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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSigned: false,
      user: {
        userid: "",
        userName: ""
      }
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
  }

  loginHandler(user) {
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(data =>
        this.setState({
          ...this.state,
          isSigned: true,
          user: {
            ...this.state.user,
            userid: data.user.id,
            userName: data.user.username
          }
        })
      )
      .catch(error => console.error(error));
  }
  signupHandler(user) {
    fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(data => {
        this.setState({
          ...this.state,
          isSigned: true,
          user: {
            ...this.state.user,
            userid: data.user.id,
            userName: data.user.username
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Route path="/dashboard" render={() => <Dashboard {...this.props} />} />
        <Route
          path="/"
          exact
          render={() =>
            this.props.isSigned ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login
                loginHandler={this.props.loginButtonHandler}
                signupHandler={this.signupHandler}
              />
            )
          }
        />
        <Route path="/game/:id" render={() => <Game />} />
      </ThemeProvider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
