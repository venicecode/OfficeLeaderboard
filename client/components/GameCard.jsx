import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GameScore from './GameScore.jsx'

const useStyles = makeStyles({
  card: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GameCard = props => {
  
  const classes = useStyles();
  return (
  <Card className={classes.card}>
    <CardContent>
      <Typography color="primary" variant="h6">{props.game}</Typography>
      {props.scores.map((score, index) => {
        return (<GameScore key={score.userName} position={index+1} userName={score.userName} score={score.score}/>)
      })}
    </CardContent>
    <CardActions>
      <Button color="primary" variant="contained" className={classes.button} id={props.game} onClick={(e) => props.addPointButtonHandler(props.game)}>add</Button>
    </CardActions>
  </Card>

)};

export default GameCard;