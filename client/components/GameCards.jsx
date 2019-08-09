import React from "react";
import GameCard from "./GameCard.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const GameCards = props => (
  <div className="cardGrid">
    {props.games.map(game => {
      return (

            <GameCard key={game.gameName} game={game.gameName} scores={game.gameScores} addPointButtonHandler={props.addPointButtonHandler}>
            </GameCard>)
    })}
  </div>
);

export default GameCards;