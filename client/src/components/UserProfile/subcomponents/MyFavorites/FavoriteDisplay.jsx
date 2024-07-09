import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../MyFavorites/FavoriteDisplay.css";
import { useGlobalContext } from "../../../../globalProvider";

const FavoriteDisplay = ({ favoriteDrinks, searchQuery }) => {
  const navigate = useNavigate();
  const { setGlobalState } = useGlobalContext();

  const filteredDrinks = favoriteDrinks.filter((drink) => {
    const drinkNameMatch = drink.name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const ingredientMatch = drink.ingredients?.some((ingredient) =>
      ingredient?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return drinkNameMatch || ingredientMatch;
  });

  const handleDrinkClick = (drink) => {
    setGlobalState(drink);
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
