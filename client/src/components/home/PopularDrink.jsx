import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import DrinkList from "../popularDrink/DrinkList";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVORITE_DRINKS } from "../../utils/queries";

function PopularDrink() {
  const [sortedDrinkData, setSortedDrinkData] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_FAVORITE_DRINKS); // Fetch all favorite drinks

  useEffect(() => {
    if (data) {
      // Once data is fetched, set the sorted drink data
    const sortedDrinks = [...data.allFavoriteDrinks]
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, 10); // Get only the top 10 drinks
  setSortedDrinkData(sortedDrinks);
}
}, [data]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 5,
        textAlign: "left",
        borderRadius: "20px",
        width: "90%",
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
      <DrinkList drinkData={sortedDrinkData} setHoveredIndex={setHoveredIndex}  />
    </Box>
  );
}

export default PopularDrink;
