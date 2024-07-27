import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Box, Grid, IconButton, Typography, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { GET_TOP_FAVORITE_DRINKS } from "../../../../utils/queries";
import "./PopularDrinks.css";

const PopularDrinks = () => {
  const { loading, error, data } = useQuery(GET_TOP_FAVORITE_DRINKS);
  const [startIndex, setStartIndex] = useState(0);

  // Check loading and error status at the top
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Sort and slice the drinks, limit to 8 items
  const sortedDrinks = (data.formulas || [])
    .slice()
    .sort((a, b) => b.favoritesCount - a.favoritesCount)
    .slice(0, 10);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % sortedDrinks.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + sortedDrinks.length) % sortedDrinks.length
    );
  };

  // // Automatically change the displayed drink every 2 seconds
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 5000);
  //   return () => clearInterval(interval);
  // }, [startIndex, sortedDrinks.length]);

  // Set so we make sure to only display the current drink
  const displayedDrink = sortedDrinks[startIndex];
  const position = startIndex + 1; // Position is 1-based index

  return (
    <Grid item xs={12}>
      <Box className="popularDrinksContainer">
        <Typography variant="h6">Top Drinks</Typography>
        <Box className="popularDrinksItems">
          <IconButton onClick={handlePrev} disabled={sortedDrinks.length <= 1}>
            <ArrowBack />
          </IconButton>
          <Box display="flex" alignItems="center">
            <Box textAlign="center" mr={2}>
              <Typography variant="h6">{`${position}${
                position === 1
                  ? "st"
                  : position === 2
                  ? "nd"
                  : position === 3
                  ? "rd"
                  : "th"
              }`}</Typography>
              <Typography>{displayedDrink.name}</Typography>
              <Box
                className="randomButtonModalImage"
                sx={{
                  backgroundImage: `url('/assets/icons/${displayedDrink.icon}')`,
                }}
              />
            </Box>
            <Box>
              <Typography variant="body1" component="ul">
                {[
                  ...displayedDrink.alcohol.map(
                    (ingredient) => ingredient.name
                  ),
                  ...displayedDrink.liquid.map((ingredient) => ingredient.name),
                  ...displayedDrink.garnish.map(
                    (ingredient) => ingredient.name
                  ),
                ]
                  .slice(0, 4)
                  .map((ingredient, i) => (
                    <Typography component="li" key={i}>
                      {ingredient} 
                    </Typography> 
                  ))}
              </Typography>
              <Button variant="contained" color="primary" sx={{mt:2}}>
                View More
              </Button> 
            </Box>
          </Box>
          <IconButton onClick={handleNext} disabled={sortedDrinks.length <= 1}>
            <ArrowForward />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {sortedDrinks.map((_, index) => (
            <Box
              className="popularDrinksDots"
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
