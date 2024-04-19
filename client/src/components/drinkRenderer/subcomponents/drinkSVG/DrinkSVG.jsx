import { useState, useEffect } from "react";

import {
    Box,
    Typography
} from "@mui/material";

import './drinkSVG.css';

const DrinkSVG = ({ ingredients }) => {

    console.log();

    return (
        <>
            <Box className="svgCard">
                <Typography>This is a picture of a drink :)</Typography>
            </Box>
        </>
    )
}

export default DrinkSVG;