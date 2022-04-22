import React from 'react';
import { Wrapper, Image, FormWrapper, Title, Input, InputLabel, Button } from './styles';

export default function SignUp(){
  return(
    <Wrapper>
      <Image/>
      
      <FormWrapper>
        <Title>Welcome to <span>vibr8</span>.</Title>
        <p>Listen to your songs <span>everywhere</span></p>      

        <InputLabel htmlFor="fullName">full name</InputLabel>
        <Input type="text" name='fullName' id='fullName' placeholder='Enter your name here'/>

        <InputLabel htmlFor="userEmail">email</InputLabel>
        <Input type="email" name="userEmail" id="userEmail" placeholder='Enter your email here'/>

        <InputLabel htmlFor="userPassword">password</InputLabel>
        <Input type="password" name='userPassword' id='userPassword' placeholder='Enter your password here'/>

        <Button>Create Account</Button>

        <p id='haveAnAccount'>Already have an account? <span>Log in</span></p>
      </FormWrapper>
    </Wrapper>
  )
} 