import { Box } from "@mui/material";

export default function DrinkImage({ image }) {
  return (
    <Box sx={{ marginRight: "15px" }}>
      <img
        src={image}
        alt="Drink"
        style={{ width: "75%", minWidth: "200px" }}
      />
    </Box>
  );
}
