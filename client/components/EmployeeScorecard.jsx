import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const EmployeeScorecard = props => (
  <div>
    <Table className={useStyles().table}>
    <TableHead>
      <TableRow>
        <TableCell>Game</TableCell>
        <TableCell>Score</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
    {props.scores.map(game => {
      return (
        <TableRow>
             <TableCell>{game.gameName}</TableCell>
            <TableCell>{game.score}</TableCell>
      </TableRow>)})
      }
    </TableBody>
  </Table>
  </div>
);

export default EmployeeScorecard;
