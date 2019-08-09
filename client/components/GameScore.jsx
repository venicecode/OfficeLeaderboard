import React from "react";
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';
import Looks3 from '@material-ui/icons/Looks3';

const GameScore = props => (
  <div>
    {props.position === 1 && <span><LooksOne/>{props.userName} : {props.score} points </span>}
    {props.position === 2 && <span><LooksTwo/>{props.userName} : {props.score} points </span>}
    {props.position === 3 && <span><Looks3/>{props.userName} : {props.score} points </span>}
  </div>
);

export default GameScore;