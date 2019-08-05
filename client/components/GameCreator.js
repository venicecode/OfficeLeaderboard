import React from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';


 const GameCreator = (props) => (
     <div className="game-creator"> 
         
         <Input type="text" placeholder="Smash Bros." id="inputField" value={props.newGameInput} onChange={props.setNewGameNameHandler}/>
         <button onClick={props.addGameToOfficeHandler} >Add Game To Office!</button>
     
     </div>
 );

 export default GameCreator;