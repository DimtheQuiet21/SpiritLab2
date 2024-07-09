import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { useGlobalContext } from "../globalProvider";
import Auth from "../utils/auth";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddToFavoritesButton from "../components/AddFavorites/AddToFavoritesButton";
import "../components/Search/FormulaDescription/DrinkPage.css";

const Description = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formula } = location.state || {};
  const [tabIndex, setTabIndex] = useState(0);
  const { globalState, setGlobalState } = useGlobalContext();
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  const isFavorite = globalState.favorites?.includes(formula.name); 


  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleGoToLab = () => {
    setGlobalState(formula);
    navigate("/lab", { state: { formula } });
  };

  // we toggle the status of the favorite drink by checking if the drink is already a favorite or not
  const handleFavoriteToggle = () => {
    if (userId) {
      const updatedFavorites = new Set(globalState.favorites ?? []); // Default to empty array
      if (isFavorite) {
        updatedFavorites.delete(formula.name);
      } else {
        updatedFavorites.add(formula.name);
      }
      setGlobalState({ ...globalState, favorites: Array.from(updatedFavorites) });
    }
  };

  return (
    <Box className = 'drinkCardBox'>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {formula.name}
        </Typography>
      </Box>
      <Card className="drinkCard">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        {userId && (
            <AddToFavoritesButton
              drinkName={formula.name}
              userId={userId}
              isFavorite={isFavorite}
              onSuccess={handleFavoriteToggle}
            />
          )}
        </Box>
        <Box className= "drinkCardIcon"
          sx={{ backgroundImage: `url('/assets/icons/${formula.icon}')` }}
        />
      </Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5">{formula.name}</Typography>
            <Typography variant="subtitle2">Concocted by: Spirit Labs</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton>
              <CheckIcon sx={{ color: "green" }} />
            </IconButton>
            <Typography variant="body2">12k</Typography> {/* Placeholder for check count */}
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton>
              <CloseIcon sx={{ color: "red" }} />
            </IconButton>
            <Typography variant="body2">7k</Typography> {/* Placeholder for close count */}
          </Box>
        </Box>
      </CardContent>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Ingredients" />
        <Tab label="Reviews" />
      </Tabs>
      <Box sx={{ padding: "20px" }}>
        {tabIndex === 0 && (
          <Box>
            <ul>
              {formula.alcohol && formula.alcohol.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
              {formula.liquid && formula.liquid.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
            <Button variant="contained" color="primary" onClick={handleGoToLab} sx={{ width: "100%" }}>
              Modify Concoction in Lab
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6">Reviews</Typography>
            <Typography>No reviews yet.</Typography>
            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Leave a Review
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Description;
