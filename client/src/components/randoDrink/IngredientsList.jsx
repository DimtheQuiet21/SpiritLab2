import React from "react";
const ingredients = [
    "Ingredient 1",
    "Ingredient 2",
    "Ingredient 3",
    "Ingredient 4",
    "Ingredient 5",
    "Ingredient 6",
  ];

function IngredientsList() {
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "grid",
        fontSize: "1.2rem",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
      }}
    >
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default IngredientsList;