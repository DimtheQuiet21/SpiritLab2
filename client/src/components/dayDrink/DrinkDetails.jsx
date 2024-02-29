import React from "react";
import { Box, Typography } from "@mui/material";
import Auth from "../../utils/auth";
import AddToFavoritesButton from "../addFavorites/AddToFavoritesButton";
import IngredientList from "./IngredientList";

function DrinkDetails({ name, ingredients, image }) {
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          component="h3"
          color="white"
          sx={{ marginBottom: "10%", textAlign: "left" }}
        >
          {name}
        </Typography>
        <IngredientList ingredients={ingredients} />
        <Box>
          {userId && <AddToFavoritesButton drinkName={name} userId={userId} />}
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src={image} alt={name} style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}

export default DrinkDetails;
