import React, { useState } from "react";
import { Box, Typography, Paper, CircularProgress, Modal } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_FORMULAS } from '../../utils/queries';
import SearchListModal from "./SearchListModal";

// This page displays the list of all the formulas in the box

const liquorEmojis = ["🍸", "🍹", "🥃", "🍺", "🍶", "🍾", "🍷", "🥂"];
const getRandomEmoji = () => {
  return liquorEmojis[Math.floor(Math.random() * liquorEmojis.length)];
};

const SearchList = () => {
  const { loading, error, data } = useQuery(GET_ALL_FORMULAS);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (drink) => {
    setSelectedDrink(drink);
    setOpenModal(true);
  }

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="body1" style={{ color: 'red' }}>Error: {error.message}</Typography>;

  return (
    <Paper style={{ maxHeight: 'calc(100vh - 300px)', overflow: 'auto', padding: '16px', border: '1px solid #ccc', marginTop:'10px', marginBottom: '20px' }}>
      <Box style={{ height: '100%', overflowY: 'auto', textAlign: 'center', marginBottom: '0px' }}>
        {data?.formulas.map((drink, index) => (
          <Typography key={index} variant="body1" style={{ cursor: 'pointer', fontSize:'22px' }} onClick={() => handleOpenModal(drink)}>
            {`${drink.name} ${getRandomEmoji()}`}
          </Typography>
        ))}
      </Box>
      {selectedDrink && (
        <SearchListModal
          open={openModal} 
          onClose={() => setOpenModal(false)}
          drink={selectedDrink}
          onConcoct={() => handleSetChoice(selectedDrink.name)} // This was supposed to be how we can access a forumla if in the modal---- need to fix
        />
      )}
    </Paper>
  );
};

export default SearchList;
