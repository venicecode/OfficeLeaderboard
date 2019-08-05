import React, {Component} from 'react';
import {Box} from '@material-ui/core';



// make a fetch request to stats to get individual stats for particular game


class Game extends Component {
//TEST COMPONENT DID MOUNT 
// componentDidMount(){
// const dummyGame = {
//     name: 'Smash Bros.',
//     users: {
//         1: 'Eric',
//         2: 'Vance',
//         3: 'Alex' 
//     },
//   }
//   this.props.populateGameHandler(dummyGame);
// }

     
  // componentDidMount(){
  //   fetch('api/stats/gameid')
  //   .then(res => res.json())
  //   .then((result) => {
  //       this.props.populateGameHandler(result);
  //   })
    
 

  render() { 
    // console.log(this.props);
   

    return ( 
        <div className="game">
          <p>{this.props.currentGame.name}</p>
          {/* <ol>
            <li>{this.props.game[0]}</li>
            <li>Alex</li>
            <li>Vance</li>
            <li>Eric</li>
          </ol> */}
          <button onClick={this.props.getGameStatsHandler}>Leaderboard</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Up</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Down</button>
          <button onClick ={this.props.addGameToUser}>Join In!</button>
        </div>
    );
  }
}
 
export default Game;

/*
{
            name: 'Smash Bros.',
            users: {
                1: '',
                2: '',
                3: ''
            },  
        },
*/