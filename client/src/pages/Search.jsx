import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FORMULAS } from '../utils/queries';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Grid, Typography, IconButton, CircularProgress, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalContext } from '../globalProvider.jsx';
import FilterChecklist from '../components/Search/SearchFilters/FilterChecklist.jsx';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setGlobalState } = useGlobalContext();

  const [searchOptions, setSearchOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formulas, setFormulas] = useState([]);
  const [selectedAlcoholTypes, setSelectedAlcoholTypes] = useState(location.state?.selectedAlcoholTypes || []);
  const [selectedLiquidTypes, setSelectedLiquidTypes] = useState(location.state?.selectedLiquidTypes || []);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [gimmeDrinksClicked, setGimmeDrinksClicked] = useState(false);

  const { loading: queryLoading, data } = useQuery(GET_ALL_FORMULAS);

  // this will populate the searchOptions array with all the ingredients and will remove any duplicates
  useEffect(() => {
    if (!queryLoading && data) {
      const formulaArray = data.formulas;
      const ingredients = formulaArray.flatMap((formula) =>
        [...formula.alcohol, ...formula.liquid, ...formula.garnish, ...formula.assembly].map(
          (element) => element.name
        )
      );
      setSearchOptions([...new Set(ingredients)]);
    }
  }, [queryLoading, data]);

  // this will filter the formulas based on the search term and will display the formulas that match the search term
  // this is what is seen in the search bar when the user types
  useEffect(() => {
    if (searchTerm) {
      const filteredFormulas = data.formulas.filter(
        (formula) =>
          formula.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFormulas(filteredFormulas.slice(0, 8));
    } else {
      setFormulas([]);
    }
  }, [searchTerm, data]);

  // we standby until the user clicks a formula and then we navigate to the description page with the formula as STATE
  const handleSetChoice = (choice) => {
    const formulaMatch = data.formulas.find((formula) => formula.name === choice);
    if (formulaMatch) {
      setGlobalState(prevState => ({
        ...prevState,
        formula: formulaMatch
      }));
      navigate("/description", { state: { formula: formulaMatch } });
    } else {
      console.error(`Formula '${choice}' not found.`);
    }
  };

  const handleCheckboxChange = (option, type) => {
    if (type === 'alcohol') {
      setSelectedAlcoholTypes((prev) => {
        const newSelection = prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option];
        return newSelection;
      });
    } else if (type === 'liquid') {
      setSelectedLiquidTypes((prev) => {
        const newSelection = prev.includes(option)
          ? prev.filter((item) => item !== option)
          : [...prev, option];
        return newSelection;
      });
    }
  };

  // conditionally rendering the results page based on the types for alcohol and liquid (mixers)
  const handleApplySelections = () => {
    if (selectedAlcoholTypes.length === 0 && selectedLiquidTypes.length === 0) {
      setGimmeDrinksClicked(true);
    } else {
      navigate('/results', { state: { selectedAlcoholTypes, selectedLiquidTypes } });
    }
  };

  // this simply removes all the chips (little blue tags from user selection) 
  const handleClearSelections = () => {
    setSelectedAlcoholTypes([]);
    setSelectedLiquidTypes([]);
  };

  // we are clearing the search term and formulas when the user clicks the clear button
  const handleClearFormulas = () => {
    setSearchTerm('');
    setFormulas([]);
  };

  // if a user tries to click gimme drinks and have not input any selections, we show a message for 3 seconds
  // we don't need to keep this, just thought it was something to boost the user experience 
  // Abe will likely cook up some better
  // But for now, this is what we have
  useEffect(() => {
    if (gimmeDrinksClicked) {
      const timer = setTimeout(() => {
        setGimmeDrinksClicked(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [gimmeDrinksClicked]);

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={1}>
        <TextField
          label="Search for formulas..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          fullWidth
        />
        {isSearchFocused && (
          <IconButton onClick={() => setIsSearchFocused(false)}>
            <CloseIcon onClick={handleClearFormulas} />
          </IconButton>
        )}
      </Box>
      <Box display="flex" justifyContent="center">
        {queryLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <Grid container spacing={1} justifyContent="center">
              {formulas.map((formula, index) => (
                <Grid item key={index}>
                  <Button
                    variant="contained"
                    onClick={() => handleSetChoice(formula.name)}
                    sx={{ 
                      minWidth: "200px",
                     }}

                  >
                    {formula.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
            {!isSearchFocused && (
              <>
                <FilterChecklist
                  title="Select Alcohol(s)"
                  searchLabel={'Search Alcohol'}
                  options={searchOptions.filter((option) =>
                    data.formulas.some((formula) =>
                      formula.alcohol.some((alcohol) => alcohol.name === option)
                    )
                  )}
                  handleCheckboxChange={(option) => handleCheckboxChange(option, 'alcohol')}
                  selectedOptions={selectedAlcoholTypes}
                />
                <FilterChecklist
                  title="Select Mixer(s)"
                  searchLabel={'Search Mixers'}
                  options={searchOptions.filter((option) =>
                    data.formulas.some((formula) =>
                      formula.liquid.some((liquid) => liquid.name === option)
                    )
                  )}
                  handleCheckboxChange={(option) => handleCheckboxChange(option, 'liquid')}
                  selectedOptions={selectedLiquidTypes}
                />
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant="contained" onClick={handleApplySelections}>
                    Gimme Drinks!
                  </Button>
                  <Button variant="outlined" onClick={handleClearSelections} sx={{ ml: 2 }}>
                    Clear Selections
                  </Button>
                </Box>
                {gimmeDrinksClicked && (
                  <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
                    <Typography variant="h6">Gotta Select Something First Bruh</Typography>
                  </Box>
                )}
              </>
            )}
          </div>
        )}
      </Box>
    </div>
  );
}

export default Search;
