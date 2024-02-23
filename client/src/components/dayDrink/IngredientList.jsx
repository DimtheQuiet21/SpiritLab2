import React from "react";
import { Typography } from "@mui/material";

function IngredientList({ ingredients }) {
  return (
    <Typography color="white" fontSize={"1.2rem"}>
      <ul
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px"}}
      >
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </Typography>
  );
}

export default IngredientList;
