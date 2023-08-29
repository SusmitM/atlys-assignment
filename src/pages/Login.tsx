import React from 'react'
import LoginForm from '../components/LoginForm'
import { Box } from '@mui/system';
import { styled } from "@mui/system";
import Logo from "../assets/Logo.svg"

const StyledLoginContainer= styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "49px",
}));

const Login: React.FC = () => {
  return (
   <>
   <StyledLoginContainer>
    <Box sx={{marginTop:"45px"}}><img src={Logo} alt="logo"/></Box>

    <LoginForm/>
   </StyledLoginContainer>
   
   </>
  )
}

export default Login