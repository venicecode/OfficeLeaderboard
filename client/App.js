import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
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

constructor(props) {
  super(props);

   this.state = {
    isSigned: false,
    company: {
      name: 'Codesmith',
      id: 1
    },
    office: {
      name: 'LA',
      id: 1
    },
    user: {
        userid: '',
        avatar: 'https://www.secondcity.com/wp-content/uploads/2018/11/Eric-Stallings.jpg',
        userName: '',
        gamesPlaying: ['Smash Bros'],
    },
    newGameName: '',
    currentGame: '',
    games: [
      {
      name: 'Smash Bros.',
      users: {
        1: 'Eric',
        2: 'Devon',
        3: 'Vance',
      }
    },
    {
      name: 'Rage Cage.',
      users: {
        1: 'Jay',
        2: 'Michele',
        3: 'Justin',
      }
    },
  ], 
  };
/*
------------------------------------Binding Event Handlers-------------------------------- 
*/
  this.populateSideBarHandler = this.populateSideBarHandler.bind(this);
  this.populateGameDisplayHandler = this.populateGameDisplayHandler.bind(this);
  this.populateGameHandler = this.populateGameHandler.bind(this);
  this.addGameToUserHandler = this.addGameToUserHandler.bind(this);
  this.addGameToOfficeHandler = this.addGameToOfficeHandler.bind(this);
  this.changeUserRankHandler = this.changeUserRankHandler.bind(this);
  this.loginHandler = this.loginHandler.bind(this);
}

/*
------------------------------------Event Handlers-------------------------------- 
*/

populateSideBarHandler(user){
  this.setState({
      user:{
      userid: user.userid,
      avatar: user.avatar,
      userName: user.userName,
      gamesPlaying: user.gamesPlaying
    }
  })
};

populateGameDisplayHandler(games){
  this.setState({
    ...this.state,
    games: [...games]
    
  })
}

populateGameHandler(games){
  this.setState({
    currentGame: games.gameName,
  })
}

addGameToUserHandler(game){
  this.setState({
      ...this.state, 
      user:{
          ...this.state.user, 
          gamesPlaying: [
              ...this.state.user.gamesPlaying,
              game,
          ],
        },
        games,
      })
    };

setNewGameNameHandler(game){
  this.setState({
    ...this.state,
    newGameName: game.newGameName,
  })
}

addGameToOfficeHandler(game){
  this.setState({
    ...this.state,
    games : [
      ...this.state.games,
      game,
    ]
  })
};



changeUserRankHandler(gameName, users){

  let index;

  for (let i = 0; i < this.state.games.length; i++){
    if (games[i].name === gameName){
      index = i;
      break;
    }
  }

  this.setState({
    ...this.state,
    games: [ 
      ...this.state.games.slice(0, i),
      {...this.state.games[i],
        users,
      },
      this.state.games.slice(i+1)
    ]
  })

};

loginHandler(user){
fetch('/api/auth/login', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(user)
  })
.then(data => data.json())
.then(data => this.setState({
  ...this.state,
  isSigned: true,
  user: {...this.state.user, userid: data.user.id, userName: data.user.username}
}
))
.catch(error => console.error(error));
}
signupHandler(){
  fetch('/api/auth/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
    })
  .then(data => data.json())
  .then(data => this.setState({
    ...this.state,
    isSigned: true,
    user: {...this.state.user, userid: data.user.id, userName: data.user.username}
  }
  ))
  .catch(error => console.error(error));
}
/*
------------------------------------Rendering Our Dashboard -------------------------------- 
*/
  render(){ 
    return (
      <ThemeProvider theme={theme}>
        <Route 
        path = '/dashboard' 
        render = {() => <Dashboard {...this.state} 
        populateSideBarHandler={this.populateSideBarHandler}></Dashboard>}></Route>
        <Route 
        path = '/' 
        exact 
        render = {() => (this.state.isSigned ? 
        <Redirect to = '/dashboard'></Redirect> 
        : <Login 
        loginHandler = {this.loginHandler}
        signupHandler = {this.signupHandler}></Login>)}></Route>
        <Route path = '/game/:id' render = {() => <Game></Game>}></Route>
      </ThemeProvider>
      
    );
  }
};



/* We don't use this in our main app.js but i didn't want to delete it

componentDidMount() {
  fetch("/api/employees/" + this.state.userid ) // If this doesn't work, try this.getState to retrieve the userid
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          user: {
            avatar: result.user.avatar,
            username: result.user.username,
            userid: result.user.userid,
            gamesPlaying: [
              ...result.user.gamesPlaying
            ],
          },
          games: {
            ...result.games,
          }
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
        
        });
      }
    )
}
*/
export default App;