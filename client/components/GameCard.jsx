import React from "react";
import GameScore from "./GameScore.jsx";

const GameCard = props => (
  <div>
    <h1>{props.game}</h1>
    {props.scores.map(score => {
      return (<GameScore key={score.userName} userName={score.userName} score={score.score}/>)
    })}
    <button id={props.game} onClick={(e) => props.addPointButtonHandler(e.target.id)}>add</button>
  </div>
);

export default GameCard;