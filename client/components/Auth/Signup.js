import React, {useSelector, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

const Signup = () => {
  return (<React.Fragment>
    <TextField label = "Username"></TextField>
    <TextField label = "Password"></TextField>
    <TextField label = "Confirm Password"></TextField>
    <Button color = 'primary'>Submit</Button>
  </React.Fragment>);
}
 
export default Signup;