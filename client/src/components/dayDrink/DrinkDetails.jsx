import React from "react";
import { Box, Typography, Button } from "@mui/material";
import IngredientList from "./IngredientList";

function DrinkDetails({ name, ingredients, image }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start", // Align items to the top
      }}
    >
      <Box sx={{ flexDirection: "column", justifyContent: "flex-start" }}>
        <Typography variant="h4" component="h3" color="white" sx={{ marginBottom: "10%" }}>
          {name}
        </Typography>
        <IngredientList ingredients={ingredients} />
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: "200px",
            height: "60px",
            borderRadius: "15px",
            fontSize: "1.1rem",
            marginTop: "1rem", // Align button to the bottom
          }}
        >
          Add to Favorites
        </Button>
      </Box>
      <Box>
        <img src={image} alt={name} style={{ width: "350px", height: "350px" }} />
      </Box>
    </Box>
  );
}

export default DrinkDetails;
