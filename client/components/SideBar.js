/*
Sidebar component: 
1. This component contains information about the user. 
2. Upon mounting, our onComponentDidMount lifecycle function invokes the 
populateSideBarHandler to populate the sidebar with a user's information

*/

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Game from './Game'

class SideBar extends Component {
    constructor(props){
        super(props)
    }

    // ************************THIS HAS BEEN TESTED- UNCOMMENT BEFORE DEPLOYMENT ************************

// componentDidMount(){
//   fetch('api/employees')
//   .then(res => res.json())
//   .then((result) => {
//       this.props.populateSideBarHandler(result);
//   })
// }; 

render() { 

    
    return ( 
    
        <div className= "side-bar" >
        <img src={this.props.user.avatar}/>
        <p>Username: </p>
        <p>{this.props.user.userName}</p>
        {/* <p>Games Playing:</p> */}
     
        </div>

        );
    }
}

export default SideBar;
