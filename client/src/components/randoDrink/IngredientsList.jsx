import React from "react";


function IngredientsList({ ingredients }) {
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