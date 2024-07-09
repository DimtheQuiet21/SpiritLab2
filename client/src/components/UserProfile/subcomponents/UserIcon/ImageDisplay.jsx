import React from "react";
import { Typography, Box, Container } from "@mui/material";
import "../UserIcon/ImageDisplay.css";

const ImageDisplay = () => {
  return (
    <Box className="user-profile">
    <img src="https://via.placeholder.com/250" alt="User" className="profile-image" />
  </Box>
  );
};

export default ImageDisplay;
