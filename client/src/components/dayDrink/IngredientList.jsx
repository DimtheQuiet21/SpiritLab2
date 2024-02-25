import React from "react";
import { Typography } from "@mui/material";

function IngredientList({ ingredients }) {
  if (!ingredients) return null;

  return (
    <Typography color="white" fontSize={"1.2rem"}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}
      >
        {ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
      </div>
    </Typography>
  );
}

export default IngredientList;
