import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FORMULAS } from '../utils/queries';
import { useGlobalContext } from '../globalProvider';
import { CircularProgress, Grid, Box, Typography, IconButton, Card, CardActionArea, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAlcoholTypes, selectedLiquidTypes } = location.state || [];
  const { loading, data } = useQuery(GET_ALL_FORMULAS);
  const { setGlobalState } = useGlobalContext();
  const [matchingFormulas, setMatchingFormulas] = useState([]);

  // This useEffect is used to filter the fetched formulas based on the selected alcohol and liquid types once the data is loaded. We ensure list to inlcude only the formulas that contain all the selected alcohol and liquid types. No 'or' logic.
  useEffect(() => {
    if (!loading && data) {
      const formulas = data.formulas.filter((formula) => {
        const alcoholMatch = selectedAlcoholTypes.every((alcohol) =>
          formula.alcohol.some((item) => item.name === alcohol)
        );
        const liquidMatch = selectedLiquidTypes.every((liquid) =>
          formula.liquid.some((item) => item.name === liquid)
        );
        return alcoholMatch && liquidMatch;
      });
      setMatchingFormulas(formulas);
    }
  }, [loading, data, selectedAlcoholTypes, selectedLiquidTypes]);

  if (loading) return <CircularProgress />;

  // This function is defined to navigate to the '/lab' route with the clicked formula as state
  const handleFormulaClick = (formula) => {
    setGlobalState( formula );
    navigate('/lab', { state: { formula } });
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate('/search', { state: { selectedAlcoholTypes, selectedLiquidTypes } })}>
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
              <Card>
                <CardActionArea onClick={() => handleFormulaClick(formula)}>
                  <CardContent>
                    <Typography variant="h6">{formula.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Typography variant="h6"> No formulas found.. </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Results;
