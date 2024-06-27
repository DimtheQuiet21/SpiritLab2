import React, { useEffect, useState } from "react";
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
  const [uniqueFavoriteDrinks, setUniqueFavoriteDrinks] = useState(new Set());
  // we want to maintain the state of the specific drink (uniqueFavoriteDrinks) so that we ensure no duplicates are added to the list
  // so if a user clicks favorite more than once, then duplicates are tracked and not added to the list
  // this will change once the other components for the user profile are incorporated 
  useEffect(() => {
    if (data && data.userFavorites) {
      // Create a set of unique drink names
      const uniqueDrinks = new Set(data.userFavorites.map((drink) => drink.name));
      setUniqueFavoriteDrinks(uniqueDrinks);
    }
  }, [data]);

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

  // const favoriteDrinks = data.userFavorites || [];

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
      {uniqueFavoriteDrinks.size > 0 ? (
        <>
          <Typography variant="h3">Favorite Drinks</Typography>
          <ul>
            {[...uniqueFavoriteDrinks].map((drinkName, index) => (
              <li key={index}>
                <Tooltip title={`Drink Name: ${drinkName}`} arrow>
                  <Typography variant="h5">{drinkName}</Typography>
                </Tooltip>
                <Button onClick={() => handleRemoveFavorite(drinkName)}>Remove</Button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Typography>No favorite drinks yet fam...</Typography>
      )}
    </Box>

  );
};

export default Profile;
