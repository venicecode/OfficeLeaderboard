


import React, {Component}  from 'react';

import Game from '../components/Game.js';


class GameDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="game-display" >
               <Game/>
               <Game/>
               <Game/>
            </div>
        );
    }
}
export default GameDisplay;