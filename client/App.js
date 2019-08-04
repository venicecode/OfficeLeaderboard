import React, {Component} from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import Dashboard from './containers/Dashboard.js';


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

    user: {
        avatar: '',
        username: 'Eric',
        gamesPlaying: ['Smash Bros.', 'Beer Pong'],
    },
    games: [
        {
            name: 'Smash Bros.',
            users: {
                1: '',
                2: '',
                3: ''
            },  
        },
    ],


    
  };

  this.populateSideBarHandler = this.populateSideBarHandler.bind(this);
  this.addGameToUserHandler = this.addGameToUserHandler.bind(this);
  this.addGameToOfficeHandler = this.addGameToOfficeHandler.bind(this);
  // this.rankUserUpHandler = this.rankUserUpHandler.bind(this);
  // this.rankUserDownHandler = this.rankUserDownHandler.bind(this);
  this.changeUserRankHandler = this.changeUserRankHandler.bind(this);

}


 
populateSideBarHandler(){
  this.setState({
    ...this.state,
    user:{
      avatar: avatar,
      user: user,
      gamesPlaying: gamesPlaying,
    }
  })
};

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
      })};

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

  
componentDidMount() {
  fetch("/api/employees/" + employeeid )
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          user: {
            avatar: result.user.avatar,
            username: result.user.username,
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


  render(){ 
   
    return (
      <ThemeProvider theme={theme}>
       <Dashboard {...this.state}/>
      </ThemeProvider>
      
    );
  }
};

 



//populateSideBar = () =>{
  //get request for username, avatar, and games
  
//}

// addGameToUser = () =>{
//   //post request to add user to game
// };

// addGameToOffice = () =>{
// //post request 
// };

// rankUserUp = () =>{

// };

// rankUserDown = () => {

// };
export default App;