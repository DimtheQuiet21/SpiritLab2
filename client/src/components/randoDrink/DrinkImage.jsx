import { Box } from "@mui/material";

export default function DrinkImage({ image }) {
  return (
    <Box sx={{ marginRight: "20px" }}>
      <img
        src={image}
        alt="Drink"
        style={{ width: "300px", height: "300px" }}
      />
    </Box>
  );
}
