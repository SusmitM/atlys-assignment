import { Box, Typography, TextField, InputLabel, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import eye from "../assets/eye.svg";
import Ellipse2 from "../assets/Ellipse2.svg";
import Cross from "../assets/Cross.svg";

const BlurredBackground = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(2px)",
  transition: "backdrop-filter 0.3s ease-in-out",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
}));

const StyledBox = styled(Box)(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
  marginTop: 40,
}));

const StyledMessage = styled(Typography)(() => ({
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginTop: "8px",
}));

interface LoginFormProps {
  LoginModal?: boolean;
  closeLoginFormHandler?: () => void;
  openSignUpHandler?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const {
    LoginModal = false,
    closeLoginFormHandler,
    openSignUpHandler,
  } = props;
  const navigate = useNavigate();
  return (
    <>
      {LoginModal && <BlurredBackground />}
      <StyledBox sx={{ zIndex: LoginModal ? 12 : 0 }}>
        {LoginModal && (
          <Box
          onClick={closeLoginFormHandler}
            sx={{
              position: "absolute",
              width: "16px",
              height: "16px",
              background: "#202326",
              borderRadius: "50%",
              flexShrink: 0,
              right: "4px",
              top: "8px",
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Cross} alt="cross" />
          </Box>
        )}
        <StyledTitle sx={{ marginTop: LoginModal ? "" : "40px" }}>
          WELCOME BACK
        </StyledTitle>
        <StyledMessage>Log into your account</StyledMessage>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexGrow: 1,
            marginTop: "30px",
          }}
        >
          <Box>
            <label>
            <Typography
                sx={{
                  color: "#C5C7CA",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  marginBottom:"10px"
                }}
              >
              Email or Username
              </Typography>
              
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
              <span
                style={{ position: "relative", right: "29px", top: "5%" }}
                className="eyeIconContainer"
              >
                <img src={eye} alt="eyeImage" />
              </span>
            </label>

          </Box>
          <Button
          onClick={LoginModal ? closeLoginFormHandler : () => navigate("/home")}
          sx={{
            width: "425px",
            height: "43px",
            flexShrink: 0,
            borderRadius: "4px",
            marginTop:"20px",
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
          onClick={LoginModal ? openSignUpHandler : () => {}}
          sx={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            marginBottom: "40px",
            color: "#7F8084",
            gap: "3px",
            marginTop:"12px",
            cursor: "pointer",
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
        </Box>
        
      </StyledBox>
    </>
  );
};

export default LoginForm;
