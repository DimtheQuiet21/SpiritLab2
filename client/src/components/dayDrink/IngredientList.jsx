import React from "react";
import { Typography } from "@mui/material";

function IngredientList({ ingredients }) {

  return (
    <Typography color="blue" fontSize={"1.1rem"}>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </Typography>
  );
}

export default IngredientList;
