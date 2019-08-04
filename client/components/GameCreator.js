import React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';


 const GameCreator = (props) => (
     <div className="game-creator"> 
         <button>Add Game To Office!</button>
         <Input>e.g. Beer Pong</Input>
     
     </div>
 );

 export default GameCreator;