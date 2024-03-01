import React from "react";


function IngredientsList({ ingredients }) {
  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        fontSize: "12pt",
      }}
    >
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  );
}

export default IngredientsList;