import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { styled } from "styled-components";
import CreatePost from "../components/CreatePost";
import {UserData} from "../data/UserData";
import PostCard from "../components/PostCard";
import SignUpModal from "../components/SignUpModal";
import LoginForm from "../components/LoginForm";

const StyledCaption = styled(Typography)(() => ({
  color: "#7F8084",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  marginTop:"12px"
}));


const Home: React.FC = () => {
  // state to manage the signup modal
  const [openSignUpModal,setOpenSignUpModal]=useState(false);

  // state to manage the login form
  const [openLoginForm,setOpenLoginForm]=useState(false);

  // function to open SignUp Modal
  const openSignUpHandler=()=>{
    setOpenSignUpModal(true);
    setOpenLoginForm(false);
  }
  // function to close SignUp Modal
  const closeSignUpHandler=()=>{
    setOpenSignUpModal(false);
  }

  // function to open the loginForm
  const openLoginFormHandler=()=>{
    setOpenLoginForm(true);
    setOpenSignUpModal(false);
  }

  // function to close the loginForm
  const closeLoginFormHandler=()=>{
    setOpenLoginForm(false);
   
  }



  return (
    <Container maxWidth="sm" sx={{ padding: "4rem 1rem" }}>
      {openSignUpModal && <SignUpModal closeSignUpHandler={closeSignUpHandler} openLoginFormHandler={openLoginFormHandler}/>}
      {openLoginForm && <LoginForm LoginModal={true}  closeLoginFormHandler={closeLoginFormHandler}  openSignUpHandler={ openSignUpHandler}/>}
      <Typography
        sx={{
          color: "#C5C7CA",
          fontFamily: "Inter",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Hello Jane
      </Typography>
      <StyledCaption>
        How are you doing today? Would you like to share something with the
        community 🤗
      </StyledCaption>

      <CreatePost openSignUpHandler={openSignUpHandler} />
      {
        UserData.map(data=>{
          return(
            <PostCard openSignUpHandler={openSignUpHandler}  data={data}/>
          )
        })
      }




    </Container>
  );
};

export default Home;
