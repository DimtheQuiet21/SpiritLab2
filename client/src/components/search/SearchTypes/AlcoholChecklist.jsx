import React, { useState } from 'react';
import { Box, FormGroup, FormControlLabel, Checkbox, Button, Grid, Drawer, TextField, InputAdornment, IconButton, Chip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

// This component is used to display the list of alcohol types that the user can select from. Users also have the ability to search for a specific alcohol type and select or deselect an option from the checklist within the drawer.
const AlcoholChecklist = ({ options, handleCheckboxChange, selectedOptions }) => {
  const [showAll, setShowAll] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const displayedOptions = showAll ? options : options.slice(0, 0); // Set so if we decide that we want to initially show some options we can easily do so

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleRemoveSelectedOption = (option) => {
    handleCheckboxChange(option);
  };

  return (
    <Box>
      <FormGroup> <br />
      <h1>Select Alcohol(s)</h1>
        <Grid container spacing={1}>
          {displayedOptions.map((option, index) => (
            <Grid item xs={6} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                }
                label={option}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
      {selectedOptions.length > 0 && (
        <Box display="flex" flexWrap="wrap" mt={2}>
          {selectedOptions.map((option, index) => (
            <Chip
              key={index}
              label={option}
              onDelete={() => handleRemoveSelectedOption(option)}
              color="primary"
              sx={{ margin: '5px' }}
            />
          ))}
        </Box>
      )}
      {options.length > 6 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button onClick={toggleDrawer(true)}>
            View All
          </Button>
        </Box>
      )}
      <Drawer
        anchor='bottom'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ height: '65vh', p: 2, overflow: 'auto', position: 'relative' }}
          role="presentation"
        >
          <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'black' }}>
            <TextField
              fullWidth
              label="Search Alcohol"
              variant="outlined"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {searchTerm ? (
                      <IconButton onClick={handleClearSearch}>
                        <ClearIcon />
                      </IconButton>
                    ) : (
                      <SearchIcon />
                    )}
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Box sx={{ pt: 3 }}>
            <FormGroup>
              {filteredOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AlcoholChecklist;
