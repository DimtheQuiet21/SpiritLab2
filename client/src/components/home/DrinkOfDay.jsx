import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { DRINK_OF_DAY_QUERY } from "../../utils/queries";
import { Box, Typography } from "@mui/material";
import DrinkDetails from "../dayDrink/DrinkDetails";

function DrinkOfDay() {

  const { loading, error, data } = useQuery(DRINK_OF_DAY_QUERY);

  const [cachedDrink, setCachedDrink] = useState(null);
  const [drink, setDrink] = useState(null); 

  useEffect(() => {
    const cachedDrinkData = localStorage.getItem("drinkOfDay");
    const lastFetchDate = localStorage.getItem("lastFetchDate");
    // This will get the cached drink data and last fetch date from local storage
    // If the cached data and last fetch date exist, then this willcheck if the last fetch date is today
    if (cachedDrinkData && lastFetchDate) {
      const today = new Date().toISOString().slice(0, 10);
      if (today === lastFetchDate) {
        // If the last fetch date is today, use the cached drink data
        // If not, fetch new data (essentially changing drinkOfDay to drinkOfDay2 and so on...)
        const drinkToCache = JSON.parse(cachedDrinkData)
        console.log("Drink cached:", drinkToCache);
        setCachedDrink(drinkToCache);
      }
    }
  }, []);

  useEffect(() => {
    // Update local storage with new data and current date when new data is fetched
    if (data && data.drinkOfDay) {
      const today = new Date().toISOString().slice(0, 10);
      // Check if the last fetch date is not today to prevent updating the cached data multiple times per day
      const lastFetchDate = localStorage.getItem("lastFetchDate");
      if (!lastFetchDate || lastFetchDate !== today) {
        localStorage.setItem("drinkOfDay", JSON.stringify(data.drinkOfDay));
        localStorage.setItem("lastFetchDate", today);
        console.log(data.drinkOfDay)
        setCachedDrink(data.drinkOfDay);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log("cachedDrink in second useEffect:", cachedDrink);
    if (cachedDrink && Object.keys(cachedDrink).length > 0) {
      const { name, ingredients, image } = cachedDrink;
      const drinkShown =  {
        name: name,
        ingredients: ingredients,
        image: image}
        console.log(drinkShown)
      setDrink(drinkShown);
    }
  },[cachedDrink])


  if(loading && !cachedDrink) return <p>Loading...</p>;
  if(error && !cachedDrink) return <p>Error Mane :(</p>;

  

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 5,
        textAlign: "left",
        borderRadius: "20px",
        width: "100%",
        marginTop: "3rem",
        flex: 1,
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color="white"
        sx={{ marginBottom: "25px" }}
      >
        Drink Of The Day 🍻🍾
      </Typography>
      {drink ? (<DrinkDetails name={drink.name} ingredients={drink.ingredients} image={drink.image}/>): ( <p>Loading</p>)}
    </Box>
  );
}

export default DrinkOfDay;
