import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Box, Typography, Modal, Button } from "@mui/material";
import { RANDOM_DRINK_QUERY } from "../../../../utils/queries";
import { useGlobalContext } from "../../../../globalProvider";
import { useNavigate } from "react-router-dom";
import "./RandomButton.css";

const RandomButton = () => {
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [drink, setDrink] = useState(null);
  const { loading, error, data, refetch } = useQuery(RANDOM_DRINK_QUERY, {
    notifyOnNetworkStatusChange: true, // re-run the query when the network status changes (e.g. from loading to loaded or error)
  });

  // sets the drink state when the data is fetched
  useEffect(() => {
    if (data && data.randomDrink) {
      setDrink(data.randomDrink);
    }
  }, [data]);

  // opens the modal with a random drink
  const handleOpen = async () => {
    try {
      const result = await refetch();
      setDrink(result.data.randomDrink);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching random drink:", error);
    }
  };

  // closes the modal
  const handleClose = () => setOpen(false);

  // refetches the query to get a new random drink
  const handleTryAnother = () => {
    handleOpen();
  };

  // sets the global state and navigates to the description page
  const handleViewDescription = () => {
    setGlobalState({ ...globalState, formula: drink });
    navigate("/description", { state: { formula: drink, fromModal: true } });
  };

  return (
    <div>
      <Box className="randomButtonContainer" onClick={handleOpen}>
        <Typography variant="h6" mb={2}>
          Surprise?
        </Typography>
        <Box fontSize="3rem" mb={2}>
          🎲
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="random-drink-modal-title"
        aria-describedby="random-drink-modal-description"
      >
        <Box className="randomButtonModalContainer">
          {loading && <Typography>Loading...</Typography>}
          {error && <Typography>Error: {error.message}</Typography>}
          {drink && (
            <>
              <Typography
                id="random-drink-modal-title"
                variant="h6"
                component="h2"
              >
                {drink.name}
              </Typography>
              <Box
                className="randomButtonModalImage"
                sx={{ backgroundImage: `url('/assets/icons/${drink.icon}')` }}
              />
              <Typography>
                Ingredients:{" "}
                {[
                  ...(drink.alcohol || []),
                  ...(drink.liquid || []),
                  ...(drink.garnish || []),
                ]
                  .map((ingredient) => ingredient.name)
                  .join(", ")}
              </Typography>

              <Box className="randomButtonModalButtons">
                <Button
                  onClick={handleTryAnother}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: "45%" }}
                >
                  Try Another?
                </Button>
                <Button
                  onClick={handleViewDescription}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: "45%" }}
                >
                  View More
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default RandomButton;
