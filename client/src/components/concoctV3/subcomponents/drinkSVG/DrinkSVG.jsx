import { useState, useEffect } from "react";

import {
    Box,
    Typography
} from "@mui/material";

import './drinkSVG.css';

const DrinkSVG = ({ drinkData }) => {

    // const [ingredientHeights, setIngredientHeights] = useState([]);

    const receipeVar = {
        matrix:[drinkData.alcohol, drinkData.liquid, drinkData.garnish],
        keys:["alcohol","liquid","garnish"]
    }

    //Calculates height values for each ingredient
    // useEffect(() => {
    //     let heights = []
    //     receipeVar.matrix.forEach((mat) => {
    //         mat.map ((e) => {
    //             const value = e.sliderValue;
    //             const height = value * 10;
    //             heights.push(height);
    //         })
    //     })
    //     console.log("Setting Drink Heights", heights)
    //     setIngredientHeights(heights);
    // }, [drinkData]);


    let ingredientHeights = []
        receipeVar.matrix.forEach((mat) => {
            mat.map ((e) => {
                const value = e.sliderValue;
                const height = value * 10;
                ingredientHeights.push(height);
            })
        })
    console.log("Setting Drink Heights", ingredientHeights)

    //Color Array
    const colors = [
        '#545E75',
        '#63ADF2',
        '#A7CCED',
        '#304D6D',
        '#82A0BC',
        '#6CCFF6',
        '#33658A',
        '#2CBAF2',
        '#5B96C2',
        '#8CD9F8'
    ]

    // Calculate y-coordinates for each svg rectangle
    const ingredientY = ingredientHeights.map((height, index) => {
        const sumOfPreviousHeights = ingredientHeights.slice(0, index).reduce((acc, curr) => acc + curr, 0);
        return 190 - sumOfPreviousHeights - height;
      });


    // Maps SVG rectangles to get rendered inside beaker 
    

    const rectangleMap = receipeVar.matrix.map((ingredient, index) => {
        return (
            <rect key={`rectangle-${index}`} x="10" y={ingredientY[index]} width="130" height={ingredientHeights[index]} fill={colors[index]} />
    )})

    // SVG styles
    const beakerStyle = {
        stroke: '#ffffff',
        strokeWidth: '2px',
        fill: 'none'
        };

    

    return (
        <>
            {drinkData ? (
                <Box className="resultsContainer" sx={{

                }}>
                    <Box className="resultsBox">
                        {receipeVar.matrix.map((mat, matIndex) => 
                            <div key = {matIndex}>
                                {mat.map((ingredient, index) => (
                                    <Typography key={index}>
                                        {ingredient.name}: {ingredient.value}{ingredient.unit}
                                    </Typography>)
                                    )
                                }
                            </div>
                            )
                        }
                    </Box>

                    <Box className="resultsBox">
                        <svg width="150" height="200">
                            {/* BEAKER */}
                            <rect x="0" y="0" width="150" height="200" style={beakerStyle} />
                            {/* Ingredients */}
                            { rectangleMap }
                        </svg>
                    </Box>
                </Box>

            ):(
                <Typography>Error: No Data</Typography>
            )}
        </>
    )
}

export default DrinkSVG;