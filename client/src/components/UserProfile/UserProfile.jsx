import React, { useState } from "react";
import ImageDisplay from "./subcomponents/UserIcon/ImageDisplay";
import FavoriteDisplay from "./subcomponents/MyFavorites/FavoriteDisplay";
import { TextField, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../UserProfile/UserProfile.css";

const UserProfile = ({ username, favoriteDrinks }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <ImageDisplay />
      <h1 className="profile-name">@{username}</h1>
      <Box mb={2} className="search-bar-container">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField 
          className="search-bar"
          label="Search By Name or Ingredients" 
          variant="outlined" 
          fullWidth 
          value={searchQuery} 
          onChange={handleSearchChange}
        />
      </Box>
      <FavoriteDisplay favoriteDrinks={favoriteDrinks} searchQuery={searchQuery} />
    </>
  );
};

export default UserProfile;
