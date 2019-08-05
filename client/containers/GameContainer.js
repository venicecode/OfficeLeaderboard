


import React, {Component}  from 'react';
import Game from '../components/Game.js';
import GameCreator from '../components/GameCreator.js'
import GameDisplay from './GameDisplay.js';
import Divider from '@material-ui/core/Divider';


class GameContainer extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
      
        return (
            <div className="game-container" >
              
                <GameDisplay {...this.props} gamesList ={this.props.gamesList} populateGameDisplayHandler={this.props.populateGameDisplayHandler} populateGameHandler={this.props.populateGameHandler}
          addGameToUserHandler={this.props.addGameToUserHandler} setNewGameNameHandler={this.props.setNewGameNameHandler} addGameToOfficeHandler={this.props.addGameToOfficeHandler} 
          changeUserRankHandler={this.props.changeUserRankHandler} />
                <GameCreator {...this.props} />
            </div>
        );
    }
}
export default GameContainer;
