import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITE_DRINKS } from "../utils/queries";
import Auth from "../utils/auth";
import { useGlobalContext } from "../globalProvider.jsx";
import { Typography, Box } from "@mui/material";
import UserProfile from "../components/UserProfile/UserProfile.jsx";

const Profile = () => {
  const { globalState, setGlobalState } = useGlobalContext();
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  const username = Auth.loggedIn() ? Auth.getProfile().data.userName : null;

  const [uniqueFavoriteDrinks, setUniqueFavoriteDrinks] = useState([]);

  // Fetch user's favorite drinks
  const { data, loading, error } = useQuery(GET_USER_FAVORITE_DRINKS, {
    variables: { userId: userId || "" },
    skip: !userId,
  });

  useEffect(() => {
    if (data && data.userFavorites) {
      // Remove duplicates based on name
      const uniqueDrinks = removeDuplicates(data.userFavorites, 'name');
      setUniqueFavoriteDrinks(uniqueDrinks);
      setGlobalState({ ...globalState, favorites: uniqueDrinks.map(drink => drink.name) });
      console.log("Unique drinks:", uniqueDrinks);
    }
  }, [data]);

  // this helper function will ensure to remove duplicates based on a key
  const removeDuplicates = (array, key) => {
    return array.filter((item, index, self) =>
      index === self.findIndex((i) => (
        i[key] === item[key]
      ))
    );
  };

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

  if (uniqueFavoriteDrinks.length === 0) {
    return (
      <Box
        sx={{
          backgroundColor: "#808080",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Typography>No favorite drinks found.</Typography>
      </Box>
    );
  }

  return (
    <>
      <UserProfile 
        username={username} 
        favoriteDrinks={uniqueFavoriteDrinks} 
      />
    </>
  );
};

export default Profile;
