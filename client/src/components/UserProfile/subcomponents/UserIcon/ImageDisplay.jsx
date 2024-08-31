import React from "react";
import { Box, Avatar } from "@mui/material";
import "../UserIcon/ImageDisplay.css";

const ImageDisplay = () => {
  return (
    <Box className="user-profile">
      <Avatar 
      sx={{width: '200px', height: '200px', mb: '20px', border: '2px solid #1D1D1D', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}
      />
    </Box>
  );
};

export default ImageDisplay;
