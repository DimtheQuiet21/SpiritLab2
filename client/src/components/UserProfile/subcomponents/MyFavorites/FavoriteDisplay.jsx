import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../MyFavorites/FavoriteDisplay.css";
import { useGlobalContext } from "../../../../globalProvider";

const FavoriteDisplay = ({ favoriteDrinks, searchQuery }) => {
  const navigate = useNavigate();
  const { setGlobalState } = useGlobalContext();

// Filter favorite drinks based on search query (drink name or ingredient name)
const filteredDrinks = favoriteDrinks.filter((drink) => {
  const drinkNameMatch = drink.name
    ?.toLowerCase()
    .includes(searchQuery.toLowerCase());

  // Check for matches in glass, alcohol, and liquid ingredients
  const glassMatch = drink.glass
    ?.toLowerCase()
    .includes(searchQuery.toLowerCase());

  const alcoholMatch = drink.alcohol?.some((ingredient) =>
    ingredient.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const liquidMatch = drink.liquid?.some((ingredient) =>
    ingredient.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return drinkNameMatch || glassMatch || alcoholMatch || liquidMatch;
});

  // this function will set the selected drink in the global state and navigate to the description page once a user clicks on a drink from the favorites within Profile page
  const handleDrinkClick = (drink) => {
    setGlobalState(prevState => ({
      ...prevState,
      selectedDrink: drink
    }));
    navigate("/description", { state: { formula: drink } });
  };

  return (
    <>
      <Typography variant="h4" className="favoriteTitle">
        My Favorites
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {filteredDrinks.length > 0 ? (
          filteredDrinks.map((drink, index) => (
            <Box
              key={index}
              m={2}
              textAlign="center"
              onClick={() => handleDrinkClick(drink)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`/assets/icons/${drink.icon}`}
                alt={drink.name}
                style={{ width: "120px", height: "120px" }}
              />
              <Typography>{drink.name}</Typography>
              {/* Displaying ingredients */}
              <Typography variant="body2">
                {/* Ingredients: {drink.ingredients.join(", ")} */}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No favorite drinks match your search...</Typography>
        )}
      </Box>
    </>
  );
};

export default FavoriteDisplay;
