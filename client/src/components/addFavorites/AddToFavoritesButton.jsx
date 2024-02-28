import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_FAVORITES } from "../../utils/mutations";

const AddToFavoritesButton = ({ drinkName, userId }) => {
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES);

  const handleAddToFavorites = () => {
    addToFavorites({
      variables: {
        userId: userId,
        drink: drinkName,
      },
    })
      .then((response) => {
        // Handle success
        console.log("Drink added to favorites:", response.data.addToFavorites);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding drink to favorites:", error);
      });
  };

  return <button onClick={handleAddToFavorites}>Add to Favorites</button>;
};

export default AddToFavoritesButton;
