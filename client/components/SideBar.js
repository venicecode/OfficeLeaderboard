import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


class SideBar extends Component {
    constructor(props){
        super(props)
    }
render() { 
console.log(this.props)
    return ( 
    
        <div className= "side-bar" >
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-DHVt7d2Jtw5UKoj8X2GQdNh2FcfSRIdMDIu4-VcDmRmCdWy'}/>
        <p>Username: {this.props.username}</p>
        <p>Games Playing:</p>
        <ul>
            <li>{this.props.gamesPlaying[0]}</li>
            <li>{this.props.gamesPlaying[1]}</li>
            <li>{this.props.gamesPlaying[2]}</li>
        </ul>
        </div>

        );
    }
}

export default SideBar;