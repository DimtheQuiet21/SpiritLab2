import React from 'react';
import { Typography, Box } from "@mui/material";
import PropTypes from 'prop-types';
import "./Welcome.css";

const WelcomeText = ({ username }) => {
    return (
        <Box className='welcome-user'>
            <Typography variant="h5">
                {username ? `Welcome, ${username}` : 'Welcome, Guest'}
            </Typography>
        </Box>
    );
}

WelcomeText.propTypes = {
    username: PropTypes.string,
};

export default WelcomeText;
