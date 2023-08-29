import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { styled } from 'styled-components';
import CreatePost from '../components/CreatePost';


const StyledCaption = styled(Typography)(() => ({
  color: "#7F8084",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
 
}));


const Home: React.FC = () => {
  return (
   <Container maxWidth="sm" sx={{padding:"4rem 1rem"}}>
    <Typography sx={{
  color: "#C5C7CA",
  fontFamily: "Inter",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
 
}}>Hello Jane</Typography>
    <StyledCaption>How are you doing today? Would you like to share something with the community 🤗</StyledCaption>
    <CreatePost/>


   </Container>
  )
}

export default Home