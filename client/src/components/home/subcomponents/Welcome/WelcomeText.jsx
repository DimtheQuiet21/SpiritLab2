import React from 'react';
import { Typography, Box } from "@mui/material";
import "./Welcome.css";

const WelcomeText = ({ username }) => {
    // simply display the username
    return (
        <Box className='welcome-user'>
            <Typography variant="h5">
                Welcome, {username}
            </Typography>
        </Box>
    );
}

export default WelcomeText;
