import React, {useState, useEffect} from 'react';
import {Container} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

import Signup from './Signup';

const Login = (props) => {
  const [hasAccount, setHasAccount] = useState(false);
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  console.log(username, password);
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
      <Typography align = 'center' >Login</Typography>
      <TextField label = "Username" onChange = {(e) => setUsername(e.target.value)}></TextField>
      <TextField label = "Password" type = 'password' onChange = {(e) => setPassword(e.target.value)}></TextField>
      <Button color = 'primary' onClick = {() => {
        const user = {username, password}
        console.log(user);
        props.loginHandler(user)
      }}>Submit</Button>
      <Button onClick = {() => setHasAccount(!hasAccount)}>Sign Up here</Button> 
    </React.Fragment>: 
    <React.Fragment>
      <Typography align = 'center'>Sign Up</Typography>
      <Signup signupHandler = {props.signupHandler}></Signup>
      <Button onClick = {() => setHasAccount(!hasAccount)}>Login here</Button> 
    </React.Fragment>
}
  </Grid>
  </Container>
  )}
 
export default Login;