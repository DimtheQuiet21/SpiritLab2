import React from "react";
import { Button } from "@mui/material";

const ConcoctButton = ({ formula, handleSetChoice, searchTerm }) => {
  const handleClick = () => {
    // Handle the click event based on whether it's triggered from search or not
    if (searchTerm) {
      handleSetChoice(formula.name);
    } else {
      // Perform the action you want when the button is clicked directly
      // For example, you can log a message
      console.log("Concocting drink:", formula.name);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      disabled={!formula} // Disable the button if no formula is selected
    >
      Concoct
    </Button>
  );
};

export default ConcoctButton;
