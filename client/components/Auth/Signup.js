import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {Button} from '@material-ui/core';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (<React.Fragment>
    <TextField label = "Username"  onChange = {(e) => setUsername(e.target.value)}></TextField>
    <TextField label = "Password" type = 'password' onChange = {(e) => setPassword(e.target.value)}></TextField>
    <TextField label = "Confirm Password" type = 'password' onChange = {(e) => setConfirmPassword(e.target.value)}></TextField>
    <Button color = 'primary' onClick = {() => {
      if (password !== confirmPassword) {
        console.log('passwords do not match');
        return
      }
      const user = {username, password}
      console.log(user);
      props.signupHandler(user);
      }}>Submit</Button>
  </React.Fragment>);
}
 
export default Signup;