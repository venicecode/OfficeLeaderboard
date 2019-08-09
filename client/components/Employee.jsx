import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GameScore from './GameScore.jsx'

const Employee = props => (
  <Typography color="primary" variant="h3">{"Welcome, "+ props.name}</Typography>
);

export default Employee;
