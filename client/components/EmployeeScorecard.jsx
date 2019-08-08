import React from "react";

const EmployeeScorecard = props => (
  <div>
    <ul>{props.scores.map(game => {
      return (<li key={game.gameName}>{game.gameName} {game.score}</li>)
    })}</ul>
  </div>
);

export default EmployeeScorecard;
