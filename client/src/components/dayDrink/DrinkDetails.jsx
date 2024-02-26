import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import IngredientList from "./IngredientList";

function DrinkDetails({ name, ingredients, image }) {
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
        <Typography variant="h5" component="h3" color="white" sx={{ marginBottom: "10%", textAlign: "left" }}>
          {name}
        </Typography>
        <Typography color="white" fontSize={"1.2rem"}>
          <ul style={{ listStyleType: "none", paddingLeft: 0, textAlign: "center", lineHeight: "auto" }}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            backgroundColor: "#29b0ff",
            color: "black",
            borderRadius: "15px",
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          Add to Favorites
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img src={image} alt={name} style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}


export default DrinkDetails;
