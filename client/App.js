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
        username: '',
        gamesPlaying: [],
    },
    games: [
        {
            name: '',
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

// *************************************************** COMPLETE THE LOGIC OF THESE TWO HANDLERS

// rankUserUpHandler(game){
//   this.setState({
//     ...this.state,
//     games: [

//     ]
//   })
// }

// rankUserDownHandler(game){
//   this.setState({
//     ...this.state,
//     games: [
      
//     ]
//   })
// }
  


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