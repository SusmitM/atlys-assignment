import React from "react";
import { styled } from "styled-components";
import { Box } from "@mui/system";
import { Avatar, Input, Typography } from "@mui/material";
import DotsHorizontal from "../assets/DotsHorizontal.svg";
import ChatBubble from "../assets/ChatBubble.svg";

const StyledPostCard = styled(Box)(() => ({
  width: 660,
  height: 198,
  flexShrink: 0,
  borderRadius: 8,
  border: "2px solid #35373B",
  background: "#27292D",
  margin: "16px 0px",
  padding:"26px 20px",
  cursor:"pointer"
}));

interface PostContainerProps {
  data: {
    id: string;
    profilePic: string;
    name: string;
    timeOfPost: string;
    comments: string;
    emoji: string;
    postText: string;
    isEdited: boolean;
  };
  openSignUpHandler: () => void;
}

const PostCard: React.FC<PostContainerProps> = (props) => {
  const {data,openSignUpHandler }=props;
  const {
    id,
    profilePic,
    name,
    timeOfPost,
    comments,
    emoji,
    postText,
    isEdited,
  } = data;

  return (
    <StyledPostCard  onClick={()=>openSignUpHandler()}>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 44, height: 44,marginRight:"16px" }}
          alt="profilePic"
          src={profilePic}
        />

        <Box>
          <Typography
            sx={{
              color: "#C5C7CA",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: "#7F8084",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            {timeOfPost} {isEdited ? "• Edited" : ""}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <img src={DotsHorizontal} alt="optionIcon" />
        </Box>
      </Box>

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
          {emoji}
        </Box>

        <Box
          sx={{
            color: '#7F8084',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '150%',
            height: "75px",
            width: "660px",
            // padding: "16px 0px",
          }}
        >
          {postText}
        </Box>
      </Box>
      <Box
        sx={{
          color: "#7F8084",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          display:"flex",
          alignContent:"baseline",
          gap:"5px",
          marginTop:2
         
        }}
      >
        <img  style={{ width: 20, height: 20 }} src={ChatBubble} alt="ChatIcon" />
        {comments} comments
      </Box>
    </StyledPostCard>
  );
};

export default PostCard;
