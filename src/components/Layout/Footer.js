import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#212529",
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            "& svg": { 
                cursor: "pointer", 
                mr: 2,
                color: "white",
                '&:hover': {
                    color: 'rgb(91, 178, 255)',
                    transform: 'translateY(-5px)',
                    transition: 'all 400ms',
                    filter: 'drop-shadow(0 0 10px rgb(91, 178, 255))',
                }
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: 40 }} />
          <GitHubIcon sx={{ fontSize: 40 }} />
          <YouTubeIcon sx={{ fontSize: 40 }} />
          <TwitterIcon sx={{ fontSize: 40 }} />
        </Box>
        <Typography>
          All Rights Reserved © 2018 Designed by html.design.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
