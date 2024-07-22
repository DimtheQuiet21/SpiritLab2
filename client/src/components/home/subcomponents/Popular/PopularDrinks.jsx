import React, { useState, useEffect } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./PopularDrinks.css";

// dummy data for visualization
const drinks = [
  {
    emoji: "🍹",
    name: "1",
    ingredients: ["rum", "coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "🍸",
    name: "2",
    ingredients: ["rum", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "🍷",
    name: "3",
    ingredients: ["rum", "coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "🍺",
    name: "4",
    ingredients: ["rum", "coconut", "apple juice", "grenadine"],
  },
  {
    emoji: "🥃",
    name: "5",
    ingredients: ["rum", "coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "😀",
    name: "6",
    ingredients: ["rum", "coconut", "pineapple", "grenadine"],
  },
  {
    emoji: "🚀",
    name: "7",
    ingredients: ["rum", "coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "📚",
    name: "8",
    ingredients: ["coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "🎸",
    name: "9",
    ingredients: ["rum", "coconut", "pineapple", "apple juice", "grenadine"],
  },
  {
    emoji: "🎉",
    name: "10",
    ingredients: ["rum", "pineapple", "apple juice", "grenadine"],
  },
];
const PopularDrinks = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + drinks.length) % drinks.length
    );
  };

  // automatically change the displayed drink every 2 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, []);

  // set so we make sure to only display the current drink
  const displayedDrinks = [drinks[startIndex]];
  return (
    <Grid item xs={12}>
      <Box className="popularDrinksContainer">
        <Typography variant="h6">Top Drinks</Typography>
        <Box className="popularDrinksItems">
          <IconButton onClick={handlePrev}>
            <ArrowBack />
          </IconButton>
          {displayedDrinks.map((drink, index) => (
            <Box key={index} display="flex" alignItems="center">
              <Box textAlign="center" mr={2}>
                <Typography>{drink.name}</Typography>
                <Typography variant="h2">{drink.emoji}</Typography>
              </Box>
              <Box>
                <Typography variant="body1" component="ul">
                  {drink.ingredients.map((ingredient, i) => (
                    <Typography component="li" key={i}>
                      {ingredient}
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </Box>
          ))}
          <IconButton onClick={handleNext}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {drinks.map((_, index) => (
            <Box className="popularDrinksDots"
              key={index}
              sx={{
                width: 10,
                height: 10,
                bgcolor: startIndex === index ? "white" : "gray",
              }}
            />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default PopularDrinks;
