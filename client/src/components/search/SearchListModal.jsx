import React from 'react';
import { Modal, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from "react-router-dom";


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

const SearchListModal = ({ open, onClose, drink, onConcoct }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6">{drink.name}</Typography>
        <img src={`/assets/icons/${drink.icon}`} alt={drink.name} style={{ width: 100, height: 100 }} />
        <List>
          Ingredients
          {drink.alcohol.slice(0,1).map((alc, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${alc.name} - ${alc.amount}`} />
            </ListItem>
          ))}
          {drink.liquid.slice(0,2).map((liq, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${liq.name} - ${liq.amount}`} />
            </ListItem>
          ))}
          {drink.garnish.slice(0,2).map((garn, index) => (
            <ListItem key={index} style={{textAlign: 'center'}}>
              <ListItemText primary={`${garn.name} - ${garn.amount}`} />
            </ListItem>
          ))}
        </List>
        {/* this button needs to be fix -- intended goal was to have button take user over to lab with matching drink. Currently it does not do that exactly */}
        <Button
          variant="contained"
          component={Link}
          to="/lab/"
          onClick={() => onConcoct()} 
        >
          View More
        </Button>
      </Box>
    </Modal>
  );
};

export default SearchListModal;
