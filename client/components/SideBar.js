import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Game from './Game'

class SideBar extends Component {
    constructor(props){
        super(props)



    }

// onComponentDidMount(); 
render() { 
    console.log(this.props)
    return ( 
    
        <div className= "side-bar" >
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-DHVt7d2Jtw5UKoj8X2GQdNh2FcfSRIdMDIu4-VcDmRmCdWy'}/>
        <p>Username: {this.props.user.username}</p>
        <p>Games Playing:</p>
        <Game />
        <ul>
            {/* <li>{this.props.user.gamesPlaying[0]}</li>
            <li>{this.props.user.gamesPlaying[1]}</li>
            <li>{this.props.user.gamesPlaying[2]}</li> */}
        </ul>
        </div>

        );
    }
}

export default SideBar;