import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Box, Grid, IconButton, Typography, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useGlobalContext } from "../../../../globalProvider";
import { GET_TOP_FAVORITE_DRINKS } from "../../../../utils/queries";
import "./PopularDrinks.css";

const PopularDrinks = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_TOP_FAVORITE_DRINKS);
  const { globalState, setGlobalState } = useGlobalContext();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // Retrieve the selected drink index from global state, if it exists
    if (globalState.selectedDrinkIndex !== undefined) {
      setStartIndex(globalState.selectedDrinkIndex);
    }
  }, [globalState.selectedDrinkIndex]);

  // Check loading and error status at the top
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Sort and slice the drinks, limit to 10 items (the little dots at the bottom)
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

  // Function to navigate to the description page
  const handleViewDescription = () => {
    // console.log("View More");
    setGlobalState({ ...globalState, formula: sortedDrinks[startIndex], selectedDrinkIndex: startIndex });
    navigate("/description", { state: { formula: sortedDrinks[startIndex] } });
  }

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // // Automatically change the displayed drink every 2 seconds
  // useEffect(() => {
  //   const interval = setInterval(handleNext, 2000);
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

              {/* We do not have to keep this but it is here if you decide to do something with the rankings */}
              <Typography variant="h6">{`${position}${
                position === 1
                  ? "st"
                  : position === 2
                  ? "nd"
                  : position === 3
                  ? "rd"
                  : "th"
              }`}</Typography>
              <Typography>{capFirstLetter(displayedDrink.name)}</Typography>
              <Box
                className="randomButtonModalImage"
                sx={{
                  backgroundImage: `url('/assets/icons/${displayedDrink.icon}')`,
                }}
              />
            </Box>
            <Box>

              {/* This is simply the list you see right beside the icon */}
              <Typography variant="body1" component="ul">
                {[
                  ...displayedDrink.alcohol.map(
                    (ingredient) => capFirstLetter(ingredient.name)
                  ),
                  ...displayedDrink.liquid.map((ingredient) => capFirstLetter(ingredient.name)),
                  ...displayedDrink.garnish.map(
                    (ingredient) => capFirstLetter(ingredient.name)
                  ),
                ]
                  .slice(0, 4)
                  .map((ingredient, i) => (
                    <Typography component="li" key={i}>
                      {ingredient} 
                    </Typography> 
                  ))}
              </Typography>
              <Button variant="contained" color="primary" sx={{mt:2}} onClick={handleViewDescription}>
                View More
              </Button> 
            </Box>
          </Box>
          <IconButton onClick={handleNext} disabled={sortedDrinks.length <= 1}>
            <ArrowForward />
          </IconButton>
        </Box>

        {/* These are the white bubbles you see on bottom of container */}
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
