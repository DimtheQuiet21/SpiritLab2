import React from "react";
import { Typography, Box, Divider, Button } from "@mui/material";

function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      <Box sx={{ flexBasis: "40%" }}>
        <Box
          sx={{
            backgroundColor: "black",
            padding: 2,
            textAlign: "center",
            borderRadius: "10px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" component="h2" color="white">
            Welcome to Spirit Labs 2.0:
          </Typography>
          <Typography variant="subtitle1" color="white">
            You gotta be 21 to be here, bruh
          </Typography>
          <Divider sx={{ backgroundColor: "white", margin: "12px auto" }} />
          <Typography
            variant="body1"
            color="white"
            sx={{ textAlign: "left", marginBottom: "10px" }}
          >
            Spirit Labs is the place to be if you're looking for the best way to
            discover new drinks! <br />
            Not sure what you're looking for? Try out the drink of the day or
            let us pick one for you with the random cocktail generator! <br />
            Get started: <br />
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "100%", marginBottom: "10px" }}
            >
              Create a Drink
            </Button>
            <Button variant="outlined" color="primary" sx={{ width: "100%" }}>
              Sign up!
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "black",
            padding: 2,
            textAlign: "center",
            borderRadius: "10px",
            width: "100%",
          }}
        >
       <Typography variant="h5" component="h3" color="white">
            Top Drinks
          </Typography>
          <Box sx={{ color: "white", marginTop: "20px", textAlign: "left" }}>
            <ol>
              <li>
                <Typography variant="h6" component="h4">
                  Margarita --- 69 favorites
                </Typography>
                <Typography variant="subtitle2" component="p" color="gray">
                  Lime juice, tequila, cointreau & 2 more
                </Typography>
                <Divider sx={{ backgroundColor: "blue", margin: "10px 0" }} />
              </li>
              <li>
                <Typography variant="h6" component="h4">
                  Moscow Mule --- 42 favorites
                </Typography>
                <Typography variant="subtitle2" component="p" color="gray">
                  Lime juice, tequila, cointreau & 2 more
                </Typography>
                <Divider sx={{ backgroundColor: "blue", margin: "10px 0" }} />
              </li>
              <li>
                <Typography variant="h6" component="h4">
                  Vodka Martini --- 35 favorites
                </Typography>
                <Typography variant="subtitle2" component="p" color="gray">
                  Lime juice, tequila, cointreau & 2 more
                </Typography>
                <Divider sx={{ backgroundColor: "blue", margin: "10px 0" }} />
              </li>
              <li>
                <Typography variant="h6" component="h4">
                  Mojito --- 30 favorites
                </Typography>
                <Typography variant="subtitle2" component="p" color="gray">
                  Lime juice, tequila, cointreau & 2 more
                </Typography>
                <Divider sx={{ backgroundColor: "blue", margin: "10px 0" }} />
              </li>
            </ol>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flexBasis: "50%" }}>
        <Box
          sx={{
            backgroundColor: "black",
            padding: 2,
            textAlign: "center",
            borderRadius: "10px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" component="h3" color="white">
            Drink of the Day
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box sx={{ marginLeft: "40px" }}>
              <img
                src="https://via.placeholder.com/200"
                alt="Drink of the Day"
              />
            </Box>
            <Box sx={{ textAlign: "left", marginLeft: "10px" }}>
              <Typography variant="h6" component="h4" color="white">
                Name of Drink
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{ marginTop: "10px" }}
              >
                <ul>
                  <li>Ingredient 1</li>
                  <li>Ingredient 2</li>
                  <li>Ingredient 3</li>
                  <li>Ingredient 4</li>
                </ul>
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: "10px" }}
                >
                  View Recipe
                </Button>
                <Button variant="outlined" color="primary">
                  Add to Favorites
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "black",
            padding: 4,
            textAlign: "center",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            color="white"
            sx={{ textAlign: "left", marginBottom: "20px" }}
          >
            Feeling Lucky?
          </Typography>
          <Typography
            variant="subtitle2"
            color="white"
            sx={{ textAlign: "left", marginBottom: "20px" }}
          >
            Random Cocktail Generator
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%", marginBottom: "20px" }}
          >
            Quench your thirst
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: "20px" }}>
              <img src="https://via.placeholder.com/250" alt="Drink" />
            </Box>
            <Box>
              <Typography variant="h6" component="h4" color="white">
                Drink Name
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
              </ul>
              <Box sx={{ marginTop: "55px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: "10px" }}
                >
                  Button 1
                </Button>
                <Button variant="outlined" color="primary">
                  Button 2
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;