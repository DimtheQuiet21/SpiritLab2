import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITE_DRINKS } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { REMOVE_FAVORITE_DRINK } from "../utils/mutations";
import Auth from "../utils/auth";
import { Typography, Button, Box, Tooltip } from "@mui/material";

const Profile = () => {
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;

  // Fetch user's favorite drinks
  const { data, loading, error, refetch } = useQuery(GET_USER_FAVORITE_DRINKS, {
    variables: { userId: userId || "" },
    skip: !userId,
  });

  const [removeFavoriteDrink] = useMutation(REMOVE_FAVORITE_DRINK);

  if (!userId) {
    return (
      <Box
        sx={{
          backgroundColor: "#808080",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography>Either log in or sign up dude..... you got liquor to drink</Typography>
      </Box>
    );
  }

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  const favoriteDrinks = data.userFavorites || [];

  const handleRemoveFavorite = async (drinkName) => {
    try {
      await removeFavoriteDrink({
        variables: { userId: userId, drink: drinkName },
      });
      // After removing, refetch the user's favorite drinks to update the list
      refetch();
    } catch (error) {
      console.error("Failed to remove drink from favorites", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5e5e5e",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {userId ? (
        <>
          {favoriteDrinks.length > 0 ? (
            <Box>
              <Typography variant="h3">Favorite Drinks</Typography>
              <ul>
                {favoriteDrinks.map((drink, index) => (
                  <li key={index}>
                    <Tooltip variant="h3" title={`Ingredients: ${drink.ingredients.join(", ")}`} arrow>
                      <Typography variant="h5">{drink.name}</Typography>
                    </Tooltip>
                    <Button onClick={() => handleRemoveFavorite(drink.name)}>
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </Box>
          ) : (
            <Box>
              <Typography>No favorite drinks yet fam...</Typography>
            </Box>
          )}
        </>
      ) : (
        <Typography>Either log in or sign up dude..... you got liquor to drink</Typography>
      )}
    </Box>
  );
};

export default Profile;
