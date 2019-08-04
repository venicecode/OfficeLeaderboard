


import React, {Component}  from 'react';

import Game from '../components/Game.js';


class GameDisplay extends Component {
    constructor(props){
        super(props);

        const games = [...this.props.games];

        for (let i = 0; i < props.games.length; i++){
            let game = props.games[i];
            games.push(
                <div key={i}>
                    <Game  {...this.props} changeUserRank={this.props.changeUserRankHandler} addGameToUser={this.props.addGameToUserHandler} />
                </div>
            )
        };
    }
  

    render(){
        return (
            <div className="game-display" >
                <Game {...this.props}/>
               {/* {games} */}
            </div>
        );
    }
}
export default GameDisplay;

/*
<button onClick={this.props.changeUserRankHandler}>Rank Up</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Down</button>
          <button onClick ={this.props.addGameToUser}>Join In!</button>
*/