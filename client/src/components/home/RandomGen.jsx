import { useQuery, gql } from "@apollo/client";
import { Typography, Box, Button, Card, Container } from "@mui/material";
import IngredientsList from "../randoDrink/IngredientsList";
import DrinkImage from "../randoDrink/DrinkImage";
import { RANDOM_COCKTAIL_QUERY } from "../../utils/queries";
import Auth from "../../utils/auth";
import AddToFavoritesButton from "../addFavorites/AddToFavoritesButton";

function RandomGen() {
  const { loading, error, data, refetch } = useQuery(RANDOM_COCKTAIL_QUERY);
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, ingredients, image } = data.randomCocktail;
  // console.log(data.randomCocktail);

  return (
    <Card
    sx={{
      padding: 4,
      marginTop: "2rem",
    }}
    variant="outlined"
    >
      <Typography
        variant="h3"
        color="primary.light"
        sx={{ textAlign: "left" }}
      >
        Feeling Lucky❓ 🎲 🎰
      </Typography>
      <Typography
        variant="h6"
        color="white"
        sx={{ textAlign: "left", marginBottom: "20px" }}
      >
        Random Cocktail Generator
      </Typography>

      <Button
        variant="contained"
        sx={{ width: "100%", marginBottom: "16px", fontSize: "14pt" }}
        onClick={() => refetch()}
      >
        Quench your thirst
      </Button>

      <Container maxWidth="lg" sx={{ borderBottom: 'solid 2px #2c2c2c', p: '4px', mb: '24px' }} gutterBottom={true}/>

      {image && name && ingredients ? (
        <Box sx={{ display: "flex", justifyContent: 'space-evenly', alignItems: "center" }}>
          <DrinkImage image={image} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              color="white"
              sx={{ marginRight: "5px"}}
            >
              {name}
            </Typography>

            <Container maxWidth="lg" sx={{ borderBottom: 'solid 2px #2c2c2c', p: '8px', mb: '20px'}}/>

            <IngredientsList ingredients={ingredients} />

            <Box>
              {userId && (
                <AddToFavoritesButton drinkName={name} userId={userId} />
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <p>Loading</p>
      )}
    </Card>
  );
}

export default RandomGen;
