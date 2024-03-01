import { Typography, Box, Button, Container } from "@mui/material";
import Card from '@mui/material/Card';
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
    <Card
    sx={{
      padding: 4,
      width: "100%",
      margin: "auto",
      marginTop: "2rem",
    }}
    variant="outlined"
  >
    <Typography
        variant="h3"
        color="primary.light"
        sx={{ marginLeft: "20px" }}
      >
        Top Drinks🥇🥂
      </Typography>

      <Container maxWidth="lg" sx={{ borderBottom: 'solid 2px #2c2c2c', p: '8px', mb: '8px' }}/>
      
      <DrinkList drinkData={sortedDrinkData} setHoveredIndex={setHoveredIndex}  />
  </Card>
  );
}

export default PopularDrink;
