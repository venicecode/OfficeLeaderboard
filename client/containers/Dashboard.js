import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import Workplace from "../components/Workplace.jsx"
import Employee from "../components/Employee.jsx"
import EmployeeScoreCard from "../components/EmployeeScorecard.jsx"
import GameCards from "../components/GameCards.jsx"

const DashBoard = props => (
  <div>
    <Workplace key={props.company} workplace="Company" name={props.company} />
    <Workplace key={props.office} workplace="Office"  name={props.office}/>
    <Employee name={props.user.userName}/>
    <EmployeeScoreCard scores={props.user.userScores} />
    <GameCards games={props.companyGames} addPointButtonHandler={props.addPointButtonHandler}/>
  </div>
);

export default DashBoard;
