import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import {CssBaseline} from '@material-ui/core/'; 
import Typography from '@material-ui/core/Typography';
import HeaderMenu from '../components/HeaderMenu.js';
import GameContainer from '../containers/GameContainer.js';
import SideBar from '../components/SideBar.js';


class DashBoard extends Component {
  
  render() { 
 
    return ( 
        <div className="dashboard">
          <HeaderMenu {...this.props} />
          <SideBar {...this.props} populateSideBarHandler={this.props.populateSideBarHandler} />
          <GameContainer {...this.props} populateGameDisplayHandler={this.props.populateGameDisplayHandler} populateGameHandler={this.props.populateGameHandler}
          addGameToUserHandler={this.props.addGameToUserHandler} setNewGameNameHandler={this.props.setNewGameNameHandler} addGameToOfficeHandler={this.props.addGameToOfficeHandler} 
          changeUserRankHandler={this.props.changeUserRankHandler} />
        </div>
    );
  }
}
 
export default DashBoard;