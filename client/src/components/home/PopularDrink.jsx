import { Box, Typography, Divider } from "@mui/material";

function PopularDrink() {
  const drinkData = [
    {
      name: "Margarita",
      favorites: 69,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Moscow Mule",
      favorites: 42,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Vodka Martini",
      favorites: 35,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Screwdriver",
      favorites: 32,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
    {
      name: "Tequila Sunrise",
      favorites: 29,
      ingredients: "Lime juice, tequila, cointreau & 2 more",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 5,
        textAlign: "left",
        borderRadius: "20px",
        width: "95%",
        marginTop: "40px",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        color="white"
        sx={{ marginLeft: "20px" }}
      >
        Top Drinks
      </Typography>
      <Box
        sx={{
          color: "white",
          marginTop: "20px",
          textAlign: "left",
          marginBottom: "30px",
        }}
      >
        <ol style={{ fontSize: '1.5rem' }}>
          {drinkData.map((drink, index) => (
            <li key={index}>
              <Typography variant="h5" component="h3">
                {drink.name} --- {drink.favorites} favorites
              </Typography>
              <Typography variant="h6" component="p" color="gray">
                {drink.ingredients}
              </Typography>
              <Divider
                sx={{ backgroundColor: "lightBlue", margin: "10px 0" }}
              />
            </li>
          ))}
        </ol>
      </Box>
    </Box>
  );
}

export default PopularDrink;
