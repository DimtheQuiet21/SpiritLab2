import { useState, useEffect } from "react";

import {
    Box,
    Typography
} from "@mui/material";

import './drinkSVG.css';

const DrinkSVG = ({ formula, sliders }) => {

    console.log();

    return (
        <>
            <Box className="svgCard">
                {formula.alcohol.map((ingredient, index) => (
                    <Typography key={index}>{ingredient.name}: {ingredient.amount}</Typography>
                ))}
                {formula.liquid.map((ingredient, index) => (
                    <Typography key={index}>{ingredient.name}: {ingredient.amount}</Typography>
                ))}
                {formula.garnish.map((ingredient, index) => (
                    <Typography key={index}>{ingredient.name}: {ingredient.amount}</Typography>
                ))}
            </Box>
        </>
    )
}

export default DrinkSVG;