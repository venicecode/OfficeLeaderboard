/*
Game Display: 
1. This container contains information about all games played in one office.
2. Upon mounting, our onComponentDidMount lifecycle function invokes the 
populateGameDisplayHandler to populate the game container with an office's games.

*/


import React, {Component}  from 'react';

import Game from '../components/Game.js';


class GameDisplay extends Component {
    constructor(props){
        super(props);

    }
  
   // component Will Update api call to set State to include current games playing in office 
   // this will be a POST request 
   
   //on ComponentWillUpdate()
   /* fetch('/api/addGameToOffice', {  <<<<< Double check the route name 
        method: POST,
    headers: {
        content-type: application/json,
    },
    body: JSON.stringify({THIS OBJECT WILL CONTAIN THE INFO THE BACKEND NEEDS })
   })
   
   
    }
  

  componentDidMount(){
    fetch('api/games')
    .then(res => res.json())
    .then((result) => {
        this.props.populateGameDisplayHandler(result);
    })
    
}; 
*/

// componentDidMount(){

// // const dummyGame = {
// //     name: 'Smash Bros.',
// //     users: {
// //         1: '',
// //         2: '',
// //         3: ''
// //     },  
// // }

// //     this.props.populateGameDisplayHandler(dummyGame);

// }
    render(){
       console.log(this.props)
        const games = [...this.props.games];
        
        // for (let i = 0; i < props.games.length; i++){
        //     let game = props.games[i];

        //     games.push(
        //         <div key={i}>
        //             <Game name={game.name} changeUserRank={this.props.changeUserRankHandler} addGameToUser={this.props.addGameToUserHandler} />
        //         </div>
        //     )
        // };


        return (
            <div className="game-display" >
                {/* <Game {...this.props}/> */}
               <Game currentGame ={this.props.games[0]} />
            </div>
        );
    }
}


export default GameDisplay;

/*
<button onClick={this.props.changeUserRankHandler}>Rank Up</button>
          <button onClick={this.props.changeUserRankHandler}>Rank Down</button>
          <button onClick ={this.props.addGameToUser}>Join In!</button>

          {
            name: 'Smash Bros.',
            users: {
                1: '',
                2: '',
                3: ''
            },  
        },



*/