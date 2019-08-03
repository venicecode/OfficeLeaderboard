import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

import Signup from './Signup';

const Login = () => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
  <Container
  maxWidth = 'sm'
  >

  <Grid
  container
  direction = 'column'
  >
    { !hasAccount ? 
    <React.Fragment>
      <Typography>Login</Typography>
      <TextField label = "Username"></TextField>
      <TextField label = "Password"></TextField>
      <Button color = 'primary'>Submit</Button>
      <Button onClick = {() => setHasAccount(!hasAccount)}>Sign Up here</Button> 
    </React.Fragment>: 
    <React.Fragment>
      <Typography>Sign Up</Typography>
      <Signup></Signup>
      <Button onClick = {() => setHasAccount(!hasAccount)}>Login here</Button> 
    </React.Fragment>
}
  </Grid>
  </Container>
  )}
 
export default Login;