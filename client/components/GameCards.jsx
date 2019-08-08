import React from "react";
import GameCard from "./GameCard.jsx";

const GameCards = props => (
  <div>
    {props.games.map(game => {
      return (<GameCard key={game.gameName} game={game.gameName} scores={game.gameScores} addPointButtonHandler={props.addPointButtonHandler}></GameCard>)
    })}
  </div>
);

export default GameCards;