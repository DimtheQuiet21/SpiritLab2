import { Box, Typography } from "@mui/material";
import DrinkDetails from "../dayDrink/DrinkDetails";

function DrinkOfDay() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: 6,
        textAlign: "left",
        borderRadius: "20px",
        width: "750px",
        marginTop: "2rem",
        flex: 1,
      }}
    >
      <Typography
        variant="h3"
        component="h4"
        color="white"
        sx={{ marginBottom: "30px" }}
      >
        Drink Of The Day
      </Typography>
      <DrinkDetails />
    </Box>
  );
}

export default DrinkOfDay;
