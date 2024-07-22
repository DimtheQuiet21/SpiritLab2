import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { RANDOM_DRINK_QUERY } from "../../../../utils/queries";
import "./DrinkOfDay.css";

const DrinkOfDay = () => {
  const [drink, setDrink] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const { loading, error, data } = useQuery(RANDOM_DRINK_QUERY, {
    skip: drink !== null // ensures we skip query if drink is already set
  });

  useEffect(() => {
    // Check local storage for saved drink and timestamp
    const storedDrink = localStorage.getItem('drinkOfDay');
    const storedTimestamp = localStorage.getItem('drinkOfDayTimestamp');
    const currentTime = new Date().getTime();
    console.log(storedDrink);
    console.log(storedTimestamp);

    if (storedDrink && storedTimestamp) {
      const timestamp = parseInt(storedTimestamp, 10);
      // If the stored timestamp is within the last 24 hours, use the saved drink
      if (currentTime - timestamp < 24 * 60 * 60 * 1000) {
        setDrink(JSON.parse(storedDrink));
        setLastUpdated(timestamp);
        return;
      }
    }

    // If no valid saved drink, we gets a new one
    if (data) {
      const newDrink = data.randomDrink;
      setDrink(newDrink);
      setLastUpdated(currentTime);
      // Save new drink and timestamp to local storage
      localStorage.setItem('drinkOfDay', JSON.stringify(newDrink));
      localStorage.setItem('drinkOfDayTimestamp', currentTime.toString());
    }
  }, [data]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box className="drinkOfTheDay">
      <Typography variant="h6" mb={2}>
        Drink of the Day
      </Typography>
      {drink && (
        <Box className = "drinkModal"
          sx={{
            width: 100,
            height: 100,
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: "0 auto 16px auto",
            backgroundImage: `url('/assets/icons/${drink.icon}')`,
          }}
        />
      )}
      <Typography variant="h5" mb={2}>
        {drink ? drink.name : 'No drink available'}
      </Typography>
    </Box>
  );
};

export default DrinkOfDay;
