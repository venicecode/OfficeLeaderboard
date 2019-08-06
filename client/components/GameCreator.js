import React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';


 const GameCreator = (props) => {
   return (
     <div className="game-creator">    
         <Input type="text" placeholder="Smash Bros." id="inputField" value={props.newGameInput} onChange={props.setNewGameNameHandler}/>
         <Button onClick={props.addGameToOfficeHandler} >Add Game To Office!</Button>
     </div>
 )};

 export default GameCreator;