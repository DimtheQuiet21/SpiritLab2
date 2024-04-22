import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import LeftPanel from '../components/Explore/LeftPanel';
import Image from '../components/Explore/Image';
import RightPanel from '../components/Explore/RightPanel';

function MyPage() {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleSelectDrink = (drink) => {
    setSelectedDrink(drink);
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={5}>
        <LeftPanel onSelectDrink={handleSelectDrink} />
      </Grid>
      <Grid item xs={12} md={7} style={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Image
            imageUrl={selectedDrink ? selectedDrink.image : "https://via.placeholder.com/200x200"}
            title={selectedDrink ? selectedDrink.name : "Drink Name"}
          />
        </Box>
        <div style={{ flex: '1', overflowY: 'auto' }}> 
          <RightPanel selectedDrink={selectedDrink} />
        </div>
      </Grid>
    </Grid>
  );
}

export default MyPage;
