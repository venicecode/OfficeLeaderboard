import React, {Component} from 'react';
import {Box} from '@material-ui/core';


class Game extends Component {
  render() { 
    return ( 
        <div className="game">
          <p>Game Name</p>
          <ol>
            <li>Devon</li>
            <li>Alex</li>
            <li>Vance</li>
            <li>Eric</li>
          </ol>
          <button>Rank Up</button>
          <button>Rank Down</button>
          <button>Join In!</button>
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