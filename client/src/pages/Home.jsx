import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Welcome from "../components/Home/subcomponents/Welcome/Welcome";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowForward, Toys } from "@mui/icons-material";
import Auth from "../utils/auth";

const drinks = [
  { emoji: "🍹", name: "1" },
  { emoji: "🍸", name: "2" },
  { emoji: "🍷", name: "3" },
  { emoji: "🍺", name: "4" },
  { emoji: "🥃", name: "5" },
  { emoji: "😀", name: "6" },
  { emoji: "🚀", name: "7" },
  { emoji: "📚", name: "8" },
  { emoji: "🎸", name: "9" },
  { emoji: "🎉", name: "10" },
];

function Home() {
  const username = Auth.loggedIn() ? Auth.getProfile().data.userName : null;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % drinks.length);
  };

  const displayedDrinks = [
    drinks[startIndex],
    drinks[(startIndex + 1) % drinks.length],
    drinks[(startIndex + 2) % drinks.length],
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Welcome username={username} />
      </Grid>
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            border: "2px solid red",
            padding: "10px",
            borderRadius: "8px",
            height: "200px",
          }}
        >
          <Typography variant="h5" mb={3}>
            Most Popular Drinks
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
          >
            {displayedDrinks.map((drink, index) => (
              <Box key={index} textAlign="center">
                <Typography>{drink.name}</Typography>
                <Typography variant="h2">{drink.emoji}</Typography>
                <Typography>Name?</Typography>
              </Box>
            ))}
            <IconButton onClick={handleNext}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={5}>
          <Box
            sx={{
              border: "2px solid red",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" mb={2}>
              Hit Me
            </Typography>
            <Box fontSize="3rem" mb={2}>
              🎲🎲
            </Box>
          </Box>
          <Box
            sx={{
              border: "2px solid red",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Resources
          </Box>
          <Box
            sx={{
              border: "2px solid red",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              marginTop: "16px",
              height: "auto",
            }}
          >
            FEED COMING SOON!
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              border: "2px solid red",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
              height: "auto",
            }}
          >
            <Typography variant="h6" mb={2}>
              Drink of the Day
            </Typography>
            <Box mb={2}
            sx={{fontSize:'165px'}}>
            🍺
            </Box>
            Name of Drink
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
