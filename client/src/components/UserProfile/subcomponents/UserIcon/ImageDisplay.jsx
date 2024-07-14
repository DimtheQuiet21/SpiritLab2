import React from "react";
import { Box } from "@mui/material";
import "../UserIcon/ImageDisplay.css";
import TheDude from "../../assets/TheDude.png";

const ImageDisplay = () => {
  return (
    <Box className="user-profile">
      <img src={TheDude} alt="The Dude" className="user-profile-image" /> 
    </Box>
  );
};

export default ImageDisplay;
