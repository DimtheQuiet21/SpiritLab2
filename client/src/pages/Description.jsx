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
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_ALL_FORMULAS } from "../utils/queries";
import { useGlobalContext } from "../globalProvider";
import Auth from "../utils/auth";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddToFavoritesButton from "../components/AddFavorites/AddToFavoritesButton";
import UserReview from "../components/Reviews/UserReview";
import "../components/Search/FormulaDescription/DrinkPage.css";

const Description = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formula } = location.state || {};
  const { loading, error, data } = useQuery(GET_ALL_FORMULAS);
  const [tabIndex, setTabIndex] = useState(0);
  const { globalState, setGlobalState } = useGlobalContext();
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;
  const isFavorite = globalState.favorites?.includes(formula?.name); 

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  const drinkInfo = data.formulas.find((f) => f.name === formula?.name);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleGoToLab = () => {
    setGlobalState(formula);
    navigate("/lab", { state: { formula } });
  };

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderIngredientsList = () => {
    if (!drinkInfo) return null;

    return (
      <ul>
        {drinkInfo.alcohol && drinkInfo.alcohol.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
        {drinkInfo.liquid && drinkInfo.liquid.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
        {drinkInfo.garnish && drinkInfo.garnish.map((ingredient, index) => (
          <li key={index}>{capFirstLetter(ingredient.name)} - {ingredient.amount}</li>
        ))}
      </ul>
    );
  };


  return (
    <Box className='drinkCardBox'>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {formula?.name}
        </Typography>
      </Box>
      <Card className="drinkCard">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {userId && (
            <AddToFavoritesButton
              drinkName={drinkInfo?.name}
              userId={userId}
              isFavorite={isFavorite}
              onSuccess={() => {}}
            />
          )}
        </Box>
        <Box className="drinkCardIcon" sx={{ backgroundImage: `url('/assets/icons/${formula?.icon}')` }} />
      </Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5">{drinkInfo?.name}</Typography>
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
        <Tab label="Instructions" />
      </Tabs>
      <Box sx={{ padding: "20px" }}>
        {tabIndex === 0 && (
          <Box>
            {renderIngredientsList()}
            <Button variant="contained" color="primary" onClick={handleGoToLab} sx={{ width: "100%" }}>
              Modify Concoction in Lab
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6">Reviews</Typography>
            <Box>
            <UserReview />
            </Box>
            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Leave a Review
            </Button>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
          <Typography variant="h6">Assembly:</Typography>
          {drinkInfo.assembly}
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default Description;