import React, { useState } from "react";
import { Box } from "@mui/material";
import DrinkItem from "./DrinkItem";

// This passes the hoveredIndex and setHoveredIndex functions to each DrinkItem component.
// The handleMouseEnter function sets the hoveredIndex state to the index of the DrinkItem that is being hovered over. The handleMouseLeave function sets the hoveredIndex state to null when the mouse leaves the DrinkItem.
function DrinkList({ drinkData, setHoveredIndex }) {
  const [hoveredIndex, setLocalHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setLocalHoveredIndex(index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setLocalHoveredIndex(null);
    setHoveredIndex(null);
  };

  return (
    <Box
      sx={{
        color: "white",
        marginTop: "20px",
        textAlign: "left",
        marginBottom: "30px",
      }}
    >
      <ol style={{ fontSize: "14pt" }}>
        {drinkData.map((drink, index) => (
          <DrinkItem
            key={index}
            drink={drink}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ol>
    </Box>
  );
}

export default DrinkList;
