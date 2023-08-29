import { Box, Typography, TextField, InputLabel, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import eye from "../assets/eye.svg";
import Ellipse2 from "../assets/Ellipse2.svg";
import Cross from "../assets/Cross.svg";

const StyledBox = styled(Box)(() => ({
  width: "463px",
  height: "420px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0,
  borderRadius: "8px",
  border: `2px solid #5f5f60`,
  background: "#27292D",
}));

const StyledTitle = styled(Typography)(() => ({
  color: "#6B6C70",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.42px",
  // marginTop: "40px",
}));

const StyledMessage = styled(Typography)(() => ({
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginTop: "15px",
}));

interface LoginFormProps{
  LoginModal?:boolean;
}







const LoginForm: React.FC<LoginFormProps> = (props) => {
  const{LoginModal=false}=props;
  const navigate = useNavigate();
  return (
    <StyledBox>
      { LoginModal && <Box sx={{ position: "relative", left: "208px", top: "5px" }}>
        <img src={Ellipse2} alt="crossBackground" />
        <Box sx={{ position: "absolute", top: "8px", left: "8px" }}>
          <img src={Cross} alt="cross" />
        </Box>
      </Box>}
      <StyledTitle sx={{marginTop:LoginModal ? "" :"40px"}}>WELCOME BACK</StyledTitle>
      <StyledMessage>Log into your account</StyledMessage>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexGrow: 1,
        }}
      >
        <Box sx={{ marginTop: "30px" }}>
          <label className="usernamePlaceholder">
            <p>Email or Username</p>
            <input
              className="inputField"
              placeholder="Enter your email or username"
              type="text"
            />
          </label>
        </Box>

        <Box sx={{ position: "relative", marginTop: "15px" }}>
          <label className="passwordPlaceholder">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "415px",
                marginBottom: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#C5C7CA",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Password
              </Typography>
              <Typography
                sx={{
                  color: "#C5C7CA",
                  textAlign: "right",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                }}
              >
                Forgot password?
              </Typography>
            </Box>

            <input
              className="inputField"
              placeholder="Enter your password"
              type="password"
              style={{ position: "relative" }}
            />
            <span className="eyeIconContainer">
              <img src={eye} alt="eyeImage" />
            </span>
          </label>
        </Box>
      </Box>
      <Button
        onClick={() => navigate("/home")}
        sx={{
          width: "415px",
          height: "43px",
          flexShrink: 0,
          borderRadius: "4px",
          background: "#4A96FF",
          color: "#FFF",
          fontFamily: "Inter",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Login Now
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          marginBottom: "40px",
          color: "#7F8084",
          gap: "3px",
        }}
      >
        Not registered yet?
        <Typography
          sx={{
            color: "#C5C7CA",
            fontFamily: "Inter",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {" "}
          Register →
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default LoginForm;
