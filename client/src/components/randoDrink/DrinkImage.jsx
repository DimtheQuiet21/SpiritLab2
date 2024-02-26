import { Box } from "@mui/material";

export default function DrinkImage({ image }) {
  return (
    <Box sx={{ marginRight: "15px" }}>
      <img
        src={image}
        alt="Drink"
        style={{ width: "200px", height: "300px" }}
      />
    </Box>
  );
}
