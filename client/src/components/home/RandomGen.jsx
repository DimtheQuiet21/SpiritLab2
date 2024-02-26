import { useQuery, gql } from "@apollo/client";
import { Typography, Box, Button } from "@mui/material";
import IngredientsList from "../randoDrink/IngredientsList";
import DrinkImage from "../randoDrink/DrinkImage";
import { RANDOM_COCKTAIL_QUERY } from "../../utils/queries";

function RandomGen() {
  const { loading, error, data, refetch } = useQuery(RANDOM_COCKTAIL_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, ingredients, image } = data.randomCocktail;
  // console.log(data.randomCocktail);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 6,
        textAlign: "center",
        borderRadius: "20px",
        flex: 1,
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="white"
        sx={{ textAlign: "left", marginBottom: "20px" }}
      >
        Feeling Lucky❓ 🎲 🎰
      </Typography>
      <Typography
        variant="h5"
        color="white"
        sx={{ textAlign: "left", marginBottom: "20px" }}
      >
        Random Cocktail Generator
      </Typography>
      <Button
        variant="contained"
        sx={{ width: "100%", marginBottom: "20px", fontSize: "1.2rem", backgroundColor: "#29b0ff"}}
        onClick={() => refetch()}
      >
        Quench your thirst
      </Button>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <DrinkImage image={image}/>
        <Box sx={{ display: "flex", flexDirection: "column", flex: "1", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component="h2"
            color="white"
            sx={{  marginRight: "5px", marginBottom: "20px"}}
          >
            {name}
          </Typography>
          <IngredientsList ingredients={ingredients} />
          <Box>
            {/* <Button
              variant="contained"
              color="primary"
              sx={{
                marginRight: "25px",
                marginLeft: "25px",
                fontSize: "1.2rem",
                height: "60px",
                borderRadius: "15px",
              }}
            >
              View Recipe
            </Button> */}
            <Button
              variant="outlined"
              color="primary"
              sx={{ fontSize: "1.2rem", height: "60px", borderRadius: "15px", marginTop: "20px"}}
            >
              Add To Favorites
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RandomGen;
