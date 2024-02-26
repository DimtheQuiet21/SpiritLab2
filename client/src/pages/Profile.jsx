import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// for the sake of display(and until I can get a users favorite drinks from the database), Im using this fake data
const fakeUserData = {
  username: "JohnDoe",
  favoriteDrinks: [
    "Mojito",
    "Espresso Martini",
    "Old Fashioned",
    "Mojito",
    "Espresso Martini",
    "Old Fashioned",
    "Mojito",
    "Espresso Martini",
    "Old Fashioned",
    "Mojito",
    "Espresso Martini",
    "Old Fashioned",
  ],
};

const Profile = () => {
  const [favoriteDrinks, setFavoriteDrinks] = useState(
    fakeUserData.favoriteDrinks
  );

  function handleRemoveDrink(indexToRemove) {
    setFavoriteDrinks((prevDrinks) =>
      prevDrinks.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#1976d2",
          fontFamily: "Roboto, sans-serif",
          width: "100%",
          textAlign: "center",
        }}
      >
        {fakeUserData.username}'s Stuff
      </Typography>
      <Paper elevation={3} style={{ marginTop: "20px", padding: "20px" }}>
        <Typography variant="h3" align="center">
          Favorite Drinks
        </Typography>
        {favoriteDrinks.map((drink, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Typography variant="body1" align="center">
              {drink}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRemoveDrink(index)}
            >
              Remove{" "}
            </Button>
          </div>
        ))}
      </Paper>
    </div>
  );
};
export default Profile;
