import React from "react";
import { Box, Typography, Button } from "@mui/material";
import IngredientsList from "./IngredientList";

function DrinkDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
      }}
    >
      <Box >
        <img src="https://via.placeholder.com/250" alt="Drink of the Day" />
      </Box>
      <Box sx={{ textAlign: "center", marginLeft: "20px" }}>
        <Typography variant="h4" component="h3" color="white" sx={{ marginBottom: "10%"}}>
          Name of Drink
        </Typography>
        <IngredientsList 
          ingredients={[
            "Ingredient 1",
            "Ingredient 2",
            "Ingredient 3",
            "Ingredient 4",
            "Ingredient 5",
            "Ingredient 6",
          ]}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {/* <Button
            variant="contained"
            color="primary"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "15px",
              fontSize: "1.2rem",
              marginRight: "20px",
            }}
          >
            View Recipe
          </Button> */}
          <Button
            variant="outlined"
            color="primary"
            sx={{
              width: "200px",
              height: "60px",
              borderRadius: "15px",
              fontSize: "1.1rem",
            }}
          >
            Add to Favorites
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DrinkDetails;
