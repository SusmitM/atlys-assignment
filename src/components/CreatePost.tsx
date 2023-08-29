import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "styled-components";

const StyledPostContainer = styled(Box)(() => ({
  width: 660,
  height: 175,
  flexShrink: 0,
  borderRadius: 8,
  border: "2px solid #35373B",
  background: "#27292D",
  display: "flex",
  flexDirection: "column",
  padding: "24px 20px",
  margin: "40px 0px",
  cursor: "pointer",
}));

const StyledPostButton = styled(Box)(() => ({
  width: 111,
  height: 43,
  flexShrink: 0,
  borderRadius: 4,
  background: "#4A96FF",
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CreatePost: React.FC = () => {
  return (
    <StyledPostContainer>
      <Typography
        sx={{
          color: "#C5C7CA",
          fontFamily: "Inter",
          fontSize: 18,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Create post
      </Typography>
      <Box
        sx={{
          background: "#191920",
          borderRadius: "8px",
          padding: "16px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          marginTop: 2.5,
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            background: "#202326",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          💬
        </Box>

        <Input
          placeholder="How are you feeling today?"
          disableUnderline
          sx={{
            placeholder: {
              color: "#8F9093",
            },
            color: "white",
            fontSize: "16px",
            lineHeight: "normal",
            fontFamily: "Inter",
            width: "100%",
          }}
        />
      </Box>
      ;
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <StyledPostButton>Post</StyledPostButton>
      </Box>
    </StyledPostContainer>
  );
};

export default CreatePost;
