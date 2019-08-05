import React, {Component} from 'react';
import {Box} from '@material-ui/core';



// make a fetch request to stats to get individual stats for particular game


class Game extends Component {
  constructor(props){
    super(props);

}

render() { 

  const userArray = Object.entries(this.props.users);
 
  const rankingsList = [];

  for (let i = 0; i < userArray.length; i++){
    let user = userArray[i];

    rankingsList.push(
      <li className="ranking-flex">
      {user}
      </li>
      );
  }


  // console.log(`${props.games}`)
    return ( 
        <div className="game">
          <p>{this.props.name}</p>
          <ul>{rankingsList}</ul>
           
          {/* <button onClick={this.props.getGameStatsHandler}>Leaderboard</button> */}
          <button onClick={this.props.changeUserRankHandler}>Rank Up</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Down</button>
          <button onClick ={this.props.addGameToUser}>Join In!</button>
        </div>
    );
  }
}
 
export default Game;
