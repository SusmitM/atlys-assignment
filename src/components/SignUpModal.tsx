import React from "react";
import { Box, styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Cross from "../assets/Cross.svg";
import eye from "../assets/eye.svg";

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
const StyledContainer = styled(Typography)(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "415px",
  height: "426px",
  flexShrink: 0,
  borderRadius: "8px",
  border: `2px solid #5f5f60`,
  background: "#27292D",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 12,
  padding: "40px 24px",
}));
const StyledTitle = styled(Typography)(() => ({
  color: "#6B6C70",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.42px",
}));

const StyledMessage = styled(Typography)(() => ({
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginTop: 8,
}));

interface SignUpModalProps {
  closeSignUpHandler: () => void;
  openLoginFormHandler:()=>void;
}
const SignUpModal: React.FC<SignUpModalProps> = (props) => {
  const { closeSignUpHandler,openLoginFormHandler } = props;
  return (
    <>
      <BlurredBackground />
      <StyledContainer>
        <Box
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
          onClick={() => closeSignUpHandler()}
        >
          <img src={Cross} alt="Cross-Icon" />
        </Box>
        <StyledTitle>SIGN UP</StyledTitle>
        <StyledMessage>Create an account to continue</StyledMessage>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexGrow: 1,
          }}
        >
          <Box sx={{ marginTop: "15px" }}>
            <label className="usernamePlaceholder">
              <p>Email</p>
              <input
                className="inputField"
                placeholder="Enter your email"
                type="email"
              />
            </label>
          </Box>
          <Box sx={{ marginTop: "16px" }}>
            <label className="usernamePlaceholder">
              <p>Username</p>
              <input
                className="inputField"
                placeholder="Choose a preferred username"
                type="text"
              />
            </label>
          </Box>
          <Box sx={{ position: "relative", marginTop: "16px" }}>
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
              </Box>

              <input
                className="inputField"
                placeholder="Choose a strong password"
                type="password"
                style={{ position: "relative" }}
              />
              <span
                style={{ position: "absolute", top: "41px", right: "11px" }}
              >
                <img src={eye} alt="eyeImage" />
              </span>
            </label>
          </Box>
        </Box>
        <Button
        onClick={() => closeSignUpHandler()}
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
            marginTop: "25px",
          }}
        >
          Continue
        </Button>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            bottom: "-9px",
            right: "95px",
            fontFamily: "Inter",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            marginBottom: "40px",
            color: "#7F8084",
            gap: "3px",
            cursor:"pointer"
          }}
          onClick={()=>openLoginFormHandler()}
        >
          Already have an account?
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
            Login →
          </Typography>
        </Box>
      </StyledContainer>
    </>
  );
};

export default SignUpModal;
