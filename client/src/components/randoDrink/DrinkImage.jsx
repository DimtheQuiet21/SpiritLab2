import { Box } from "@mui/material";

export default function DrinkImage({ image }) {
  return (
    <Box>
      <img
        src={image}
        alt="Drink"
        height='200px'
      />
    </Box>
  );
}
