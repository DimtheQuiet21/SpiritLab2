import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import DrinkList from "../popularDrink/DrinkList";

function PopularDrink() {
  const [drinkData, setDrinkData] = useState([
    {
      name: "Deadly Nightshade",
      favorites: 69,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Moscow Mule",
      favorites: 42,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Vodka Martini",
      favorites: 35,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Screwdriver",
      favorites: 32,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Tequila Sunrise",
      favorites: 25,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Horse's Neck",
      favorites: 19,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Gin Fizz",
      favorites: 19,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Mai Tai",
      favorites: 10,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Margarita",
      favorites: 7,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Umbrella Drink",
      favorites: 13,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
  ]);

  const [sortedDrinkData, setSortedDrinkData] = useState([...drinkData]);

  useEffect(() => {
    const sortedDrinks = [...drinkData].sort((a, b) => b.favorites - a.favorites);
    setSortedDrinkData(sortedDrinks);
  }, [drinkData]);


  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 5,
        textAlign: "left",
        borderRadius: "20px",
        width: "85%",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        component="h3"
        color="white"
        sx={{ marginLeft: "20px" }}
      >
        Top Drinks🥇🥂
      </Typography>
      <DrinkList drinkData={sortedDrinkData}  />
    </Box>
  );
}

export default PopularDrink;
