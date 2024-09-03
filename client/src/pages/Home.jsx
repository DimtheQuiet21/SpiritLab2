import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Auth from "../utils/auth";
import RandomButton from "../components/Home/Random/RandomButton"
import PopularDrinks from "../components/Home/Popular/PopularDrinks";
import DrinkOfDay from "../components/Home/Dotd/DrinkOfDay";

function Home() {
  const username = Auth.loggedIn() ? Auth.getProfile().data.userName : null;

  return (
    <Grid container spacing={2} className="homepageContainer">
        <Grid item xs={12}>
        <Box className='welcome-user'>
            <Typography variant="h5">
                {username ? `Welcome, ${username}` : 'Welcome, Guest'}
            </Typography>
        </Box>
        </Grid>
      <PopularDrinks />
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={5}>
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
        </Grid>
        <Grid item xs={7}>
          <DrinkOfDay />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
