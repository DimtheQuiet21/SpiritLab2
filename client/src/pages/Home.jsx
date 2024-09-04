import React, { useState, useEffect } from "react";
import Grid2 from "@mui/material/Grid2";
// import { Box, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Auth from "../utils/auth";
import RandomButton from "../components/Home/Random/RandomButton"
import PopularDrinks from "../components/Home/Popular/PopularDrinks";
import DrinkOfDay from "../components/Home/Dotd/DrinkOfDay";

function Home() {
  const username = Auth.loggedIn() ? Auth.getProfile().data.userName : null;

  return (
    <Grid2 container spacing={2} className="homepageContainer">
        <Grid2 item="true" size={12}>
        <Box className='welcome-user'>
            <Typography variant="h5">
                {username ? `Welcome, ${username}` : 'Welcome, Guest'}
            </Typography>
        </Box>
        </Grid2>
        <Grid2 item="true" size={12}>
      <PopularDrinks />
      </Grid2>
      <Grid2 container item="true" size={12} spacing={2}>
        <Grid2 item="true" size={5}>
          <RandomButton />
          <Box
            sx={{
              border: "2px solid #00aef3",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              marginTop: "16px",
              height: "auto",
            }}
          >
            FEED COMING SOON!
          </Box>
          <Box
            sx={{
              border: "2px solid #00aef3",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Mixology 101 COMING SOON!
          </Box>
        </Grid2>
        <Grid2 item="true" size={7}>
          <DrinkOfDay />
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

export default Home;
