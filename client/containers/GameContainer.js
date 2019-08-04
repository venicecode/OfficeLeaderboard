


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
              
                <GameDisplay {...this.props} />
                <GameCreator {...this.props} />
            </div>
        );
    }
}
export default GameContainer;
