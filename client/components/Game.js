import React, {Component} from 'react';
import {Box} from '@material-ui/core';


class Game extends Component {
  render() { 
    console.log(this.props);

    return ( 
        <div className="game">
          <p>Example Name</p>
          {/* <ol>
            <li>Devon</li>
            <li>Alex</li>
            <li>Vance</li>
            <li>Eric</li>
          </ol> */}
          <button onClick={this.props.changeUserRankHandler}>Rank Up</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Down</button>
          <button onClick ={this.props.addGameToUser}>Join In!</button>
        </div>
    );
  }
}
 
export default Game;

/*
import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import {CssBaseline} from '@material-ui/core/'; 
import Typography from '@material-ui/core/Typography';
*/