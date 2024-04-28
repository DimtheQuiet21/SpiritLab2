import React from 'react';

import { Modal, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

function SearchListModal({ open, onClose, data, onConcoct }) {
  const handleViewMore = () => {
    onConcoct(data); // This will update the global state with the selected formula
    onClose(); 
    const url = `/lab/?search=${data.name}`; // the URL will redirect to the lab page with the selected formula
    window.location.href = url;
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6">{data.name}</Typography>
        <img src={`/assets/icons/${data.icon}`} alt={data.name} style={{ width: 100, height: 100 }} />
        <List>
          Ingredients
          {data.alcohol.slice(0,1).map((alc, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${alc.name} - ${alc.amount}`} />
            </ListItem>
          ))}
          {data.liquid.slice(0,2).map((liq, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${liq.name} - ${liq.amount}`} />
            </ListItem>
          ))}
          {data.garnish.slice(0,2).map((garn, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${garn.name} - ${garn.amount}`} />
            </ListItem>
          ))}
        </List>
       <Button
          variant="contained"
          onClick={handleViewMore}
        >
          View More
        </Button>
      </Box>
    </Modal>
  );
};

export default SearchListModal;
