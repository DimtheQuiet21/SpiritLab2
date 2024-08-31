import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_FORMULAS } from "../utils/queries";
import { useGlobalContext } from "../globalProvider";
import {
  CircularProgress,
  Grid,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddToFavoritesButton from "../components/addFavorites/AddToFavoritesButton";
import Auth from "../utils/auth";
import "../components/Search/FormulaResults/ResultsList.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAlcoholTypes, selectedLiquidTypes, selectedGlassTypes } =
    location.state || {};
  const { loading, data } = useQuery(GET_ALL_FORMULAS);
  const { globalState, setGlobalState } = useGlobalContext();
  const [matchingFormulas, setMatchingFormulas] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const userId = Auth.loggedIn() ? Auth.getProfile().data._id : null;

  // Filter formulas based on selected ingredients
  useEffect(() => {
    if (!loading && data) {
      const formulas = data.formulas.map((formula) => {
        const alcoholMatchCount = selectedAlcoholTypes.filter((alcohol) =>
          formula.alcohol.some((item) => item.name === alcohol)
        ).length;
        const liquidMatchCount = selectedLiquidTypes.filter((liquid) =>
          formula.liquid.some((item) => item.name === liquid)
        ).length;
        const glassMatchCount = selectedGlassTypes.filter(
          (glass) => formula.glass === glass
        ).length;

        return {
          ...formula,
          alcoholMatchCount,
          liquidMatchCount,
          glassMatchCount,
        };
      });

      const filteredFormulas = formulas.filter(
        (formula) =>
          formula.alcoholMatchCount +
            formula.liquidMatchCount +
            formula.glassMatchCount >
          0
      );

      const sortedFormulas = filteredFormulas.sort((a, b) => {
        const aTotalMatch =
          a.alcoholMatchCount + a.liquidMatchCount + a.glassMatchCount;
        const bTotalMatch =
          b.alcoholMatchCount + b.liquidMatchCount + b.glassMatchCount;
        return bTotalMatch - aTotalMatch;
      });

      setMatchingFormulas(sortedFormulas);
    }
  }, [
    loading,
    data,
    selectedAlcoholTypes,
    selectedLiquidTypes,
    selectedGlassTypes,
  ]);

  if (loading) return <CircularProgress />;

  const handleFormulaClick = (formula) => {
    setGlobalState((prevState) => ({
      ...prevState,
      formula: formula,
    }));
    navigate("/description", { state: { formula } });
  };

  const handleMatchButtonClick = (formula, event) => {
    event.stopPropagation();
    setSelectedFormula(formula);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedFormula(null);
  };

  const getBackgroundColor = (formula) => {
    const selectedTypes = [
      ...selectedAlcoholTypes,
      ...selectedLiquidTypes,
      ...selectedGlassTypes,
    ];
    const ingredientNames = [
      ...formula.alcohol.map((a) => a.name),
      ...formula.liquid.map((l) => l.name),
      formula.glass,
    ];

    const matches = selectedTypes.filter((type) =>
      ingredientNames.includes(type)
    ).length;

    if (matches === 1) return "#607D8B";
    if (matches === 2) return "#FFC107";
    if (matches === 3) return "#4CAF50";
    if (matches === 4) return "#9C27B0";
    if (matches === 5) return "#FF5722";
    if (matches === 6) return "#8BC34A ";
    if (matches === 7) return "#FFC107";
    if (matches === 8) return "#F37021";
    if (matches === 9) return "#00A0D9";
    if (matches === 10) return "#00BBF7";

    return "default";
  };

  const getMatchingIngredients = (formula) => {
    if (!formula) return [];

    const matchingAlcohol = formula.alcohol.filter((ingredient) =>
      selectedAlcoholTypes.includes(ingredient.name)
    );

    const matchingLiquid = formula.liquid.filter((ingredient) =>
      selectedLiquidTypes.includes(ingredient.name)
    );

    const matchingGlass = selectedGlassTypes.includes(formula.glass)
      ? [formula.glass]
      : [];

    return [...matchingAlcohol, ...matchingLiquid, ...matchingGlass];
  };

  return (
    <Box className="results-container">
      <Box className="header">
        <IconButton
          onClick={() =>
            navigate("/search", {
              state: {
                selectedAlcoholTypes,
                selectedLiquidTypes,
                selectedGlassTypes,
              },
            })
          }
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          Matching Formulas
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {matchingFormulas.length > 0 ? (
          matchingFormulas.map((formula, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                onClick={() => handleFormulaClick(formula)}
                className="formula-card"
                sx={{
                  backgroundColor: getBackgroundColor(formula),
                }}
              >
                <Box className="drinkCard">
                  <Box
                    className="drinkCardImage"
                    sx={{
                      backgroundImage: `url('/assets/icons/${formula.icon}')`,
                    }}
                  />

                  <Box className="drinkCardReviews">
                    <Button
                      variant="contained"
                      className="cardHeaderItem"
                      sx={{ backgroundColor: "var(--main-white)" }}
                      onClick={(event) =>
                        handleMatchButtonClick(formula, event)
                      }
                    >
                      {formula.alcoholMatchCount +
                        formula.liquidMatchCount +
                        formula.glassMatchCount}{" "}
                      match
                    </Button>
                  </Box>
                  <CardContent className="cardContent">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography variant="h4">{formula.name}</Typography>
                        {/* <Typography variant="h6">
                          Concocted by: Spirit Labs
                        </Typography> */}
                      </Box>
                      {userId && (
                        <AddToFavoritesButton
                          drinkName={formula.name}
                          userId={userId}
                          isFavorite={globalState.favorites?.includes(
                            formula.name
                          )}
                          onSuccess={(updatedFavorites) =>
                            setGlobalState({
                              ...globalState,
                              favorites: updatedFavorites,
                            })
                          }
                        />
                      )}
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Box className="no-results">
            <Typography variant="h6">
              No Formulas match your selection
            </Typography>
          </Box>
        )}
      </Grid>

      {/* MODAL */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Matching Ingredients</DialogTitle>
        <DialogContent>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {selectedFormula &&
              getMatchingIngredients(selectedFormula).map(
                (ingredient, index) => (
                  <Chip key={index} label={ingredient.name || ingredient} />
                )
              )}
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Results;
