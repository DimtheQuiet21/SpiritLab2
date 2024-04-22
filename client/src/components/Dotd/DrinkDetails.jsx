import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Auth from "../../utils/auth";
import AddToFavoritesButton from "../AddFavorites/AddToFavoritesButton";
import IngredientList from "./IngredientList";

function DrinkDetails({ name, ingredients, image }) {
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{  }}>
        <Typography
          variant="h5"
          color="white"
          sx={{ textAlign: "left" }}
        >
          {name}
        </Typography>
        
        <Container maxWidth="lg" sx={{ borderBottom: 'solid 2px #2c2c2c', p: '8px', mb: '8px' }}/>

        <IngredientList ingredients={ingredients} />
        <Box>
          {userId && <AddToFavoritesButton drinkName={name} userId={userId} />}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <img src={image} alt={name} height='200px' width='200px' />
      </Box>
    </Box>
  );
}

export default DrinkDetails;
