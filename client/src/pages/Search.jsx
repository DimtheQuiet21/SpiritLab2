import { GET_ALL_FORMULAS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Grid,
  Typography
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useGlobalContext } from "../globalProvider.jsx";
import AlcoholChecklist from "../components/Search/SearchTypes/AlcoholChecklist.jsx";
import LiquidChecklist from "../components/Search/SearchTypes/LiquidChecklist.jsx";

function Search() {
  const location = useLocation();
  const [searchOptions, setOptions] = useState([]);
  const [searchTerm, setTerm] = useState("");
  const [formulas, setFormulas] = useState([]);
  const [gimmeDrinksClicked, setGimmeDrinksClicked] = useState(false);

  const [selectedAlcoholTypes, setSelectedAlcoholTypes] = useState(location.state?.selectedAlcoholTypes || []); 
  const [selectedLiquidTypes, setSelectedLiquidTypes] = useState(location.state?.selectedLiquidTypes || []);
  // These variables are used to store the selected alcohol and liquid types. They are initialized with the values from the location state if it exists, otherwise they are initialized as empty arrays. The location state is used to pass data between routes for the Search and Results pages. After struggling to find a way to make it work, that was the best solution I came up with..

  const { loading, data } = useQuery(GET_ALL_FORMULAS);
  const { setGlobalState } = useGlobalContext();
  const navigate = useNavigate();

  // this will populate the searchOptions array with all the ingredients.
  useEffect(() => {
    if (!loading && data) {
      const formulaArray = data.formulas;
      const ingredients = formulaArray.flatMap((formula) =>
        [...formula.alcohol, ...formula.liquid, ...formula.garnish].map(
          (element) => element.name
        )
      );

      // this will remove the duplicates from the array
      setOptions([...new Set(ingredients)]);
    }
  }, [loading, data]);

  // this useEffect will filter the formulas based on the search term and will display the formulas that match the search term.  
  useEffect(() => {
    if (searchTerm) {
      const counts = {};
      const icons = {};

      function pickBackgroundColor(number) {
        if (number === 1) return "rgb(18, 18, 18)";
        if (number === 2) return "rgb(50, 22, 98)";
        if (number === 3) return "rgb(27, 151, 238)";
        if (number > 3) return "rgb(27, 238, 231)";
      }

      // the validFormulas array will contain all the formulas that match the search term and will be what's displayed
      const validFormulas = data.formulas.filter(
        (formula) =>
          formula.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // this will count the number of times each formula appears and will store the icon of the formula
      validFormulas.forEach((formula) => {
        counts[formula.name] = (counts[formula.name] || 0) + 1;
        icons[formula.name] = formula.icon;
      });

      // we make a new array with the unique formulas and have them sorted based on the number of times they appear
      const uniqueFormulas = Array.from(new Set(validFormulas.map((f) => f.name))).map((name) => ({
        name,
        count: counts[name],
        icon: icons[name],
        backgroundColor: pickBackgroundColor(counts[name]),
      }));

      uniqueFormulas.sort((a, b) => b.count - a.count);

      setFormulas(
        uniqueFormulas.map((formula, index) => (
          <Grid item key={index}>
            <Button
              sx={{ backgroundColor: formula.backgroundColor, minWidth: "200px !important" }}
              onClick={() => handleSetChoice(formula.name)}
              component={Link}
              to="/lab/"
            >
              {formula.name}
            </Button>
            <img src={`/assets/icons/${formula.icon}`} style={{ maxWidth: "75px" }} alt={`${formula.name} icon`} />
          </Grid>
        ))
      );
    } else {
      setFormulas([]);
    }
  }, [searchTerm, data]);

  // we use this to display to the user, if they try to click gimme drinks and have not inputted any selections, a message that says "Nothing was selected"
  // we don't need to keep this, just thought it was something to boost the user experience 
  useEffect(() => {
    if (gimmeDrinksClicked) {
      const timer = setTimeout(() => {
        setGimmeDrinksClicked(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [gimmeDrinksClicked]);

  // this should send the user to the lab page with the selected formula (shoutout global state !!)
  const handleSetChoice = (choice) => {
    const formulaMatch = data.formulas.find((formula) => formula.name === choice);
    setGlobalState(formulaMatch);
    navigate("/lab");
  };

  // With this function, the user has the ability to select or deselect an option from the checklist
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

  // this function will send the user to the results page with the selected alcohol and liquid types after user makes there selections and then clicks the "Gimme Drinks!" button
  const handleApplySelections = () => {
    if (selectedAlcoholTypes.length === 0 && selectedLiquidTypes.length === 0) {
      setGimmeDrinksClicked(true);
    } else {
      setGimmeDrinksClicked(false);
      navigate('/results', { state: { selectedAlcoholTypes, selectedLiquidTypes } });
    }
  };

  const handleClearSelections = () => {
    setSelectedAlcoholTypes([]);
    setSelectedLiquidTypes([]);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mb={3}>
        <TextField
          label="Know The Name? Find It Here!"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setTerm(e.target.value)}
          // placeholder="Search for formulas..."
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="center">
        {loading ? (
          <CircularProgress />
        ) : (
          // Assume the formulas list to be changed to something different. This layout is simply used for testing
          <div key="ingredientsAutocomplete">
            <Grid container spacing={1} justifyContent="center" marginBottom="10px">
              {formulas}
            </Grid>

            <AlcoholChecklist
              options={searchOptions.filter(option => data.formulas.some(formula => formula.alcohol.some(alcohol => alcohol.name === option)))}
              handleCheckboxChange={(option) => handleCheckboxChange(option, 'alcohol')}
              selectedOptions={selectedAlcoholTypes}
            />
            <LiquidChecklist
              options={searchOptions.filter(option => data.formulas.some(formula => formula.liquid.some(liquid => liquid.name === option)))}
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
              <Box display="flex" justifyContent="center" alignItems="center" mt={3} >
                <Typography variant="h6">Gotta Select Something First Bruh</Typography>
              </Box>
            )}
          </div>
        )}
      </Box>
    </div>
  );
}

export default Search;
