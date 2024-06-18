import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_FORMULAS } from '../utils/queries';
import { useGlobalContext } from '../globalProvider';
import { CircularProgress, Grid, Box, Typography, IconButton, Card, CardContent, Stack, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedAlcoholTypes, selectedLiquidTypes } = location.state || {};
  const { loading, data } = useQuery(GET_ALL_FORMULAS);
  const { setGlobalState } = useGlobalContext();
  const [matchingFormulas, setMatchingFormulas] = useState([]);

  // this useEffect will filter the formulas based on the search term and will display the formulas that match the search term. We sort the formulas based on the number of matches which is calculated by the number of alcohol and liquid types that match the formula. 
  useEffect(() => {
    if (!loading && data) {
      const formulas = data.formulas.map((formula) => {
        const alcoholMatchCount = selectedAlcoholTypes.filter((alcohol) =>
          formula.alcohol.some((item) => item.name === alcohol)
        ).length;
        const liquidMatchCount = selectedLiquidTypes.filter((liquid) =>
          formula.liquid.some((item) => item.name === liquid)
        ).length;
        return { ...formula, alcoholMatchCount, liquidMatchCount };
      });

      const sortedFormulas = formulas.sort((a, b) => {
        const aTotalMatch = a.alcoholMatchCount + a.liquidMatchCount;
        const bTotalMatch = b.alcoholMatchCount + b.liquidMatchCount;
        return bTotalMatch - aTotalMatch;
      });

      setMatchingFormulas(sortedFormulas);
    }
  }, [loading, data, selectedAlcoholTypes, selectedLiquidTypes]);

  if (loading) return <CircularProgress />;

  // This function is defined to navigate to the '/lab' route with the clicked formula as state
  const handleFormulaClick = (formula) => {
    setGlobalState(formula);
    navigate('/lab', { state: { formula } });
  };

  // We don't have the user profile configured yet so we're just toggling the favorite status of the formula
  const handleFavoriteClick = (index) => {
    const updatedFormulas = [...matchingFormulas];
    updatedFormulas[index].favorite = !updatedFormulas[index].favorite;
    setMatchingFormulas(updatedFormulas);
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
              <Card onClick={() => handleFormulaClick(formula)} sx={{ cursor: 'pointer' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '250px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '10px'
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '70%',
                      backgroundImage: `url('/assets/icons/${formula.icon}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      opacity: 0.8
                    }}
                  />
                  
                  {/* Reviews will be available once we set up the server to track the user preferences. For now we will have 'N/A' displayed */}
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" className='cardHeaderItem'>
                      <StarIcon fontSize="small" sx={{ color: 'var(--main-coral)' }} />
                      {formula.rating || 'N/A'}
                    </Typography>
                    <Stack direction='row' spacing={1} >
                      {formula.alcohol.slice(0, 2).map((ingredient, index) => (
                        <Chip key={index} variant='outlined' size='small' label={ingredient.name} />
                      ))}
                    </Stack>
                  </Box>
                  <CardContent sx={{ position: 'relative' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Box>
                        <Typography variant='h6'>{formula.name}</Typography>
                        <Typography variant='body2'>Concocted by: Spirit Labs</Typography> {/* This will be what's updated once the profile page is set */}
                      </Box>
                      <IconButton
                        variant='contained'
                        size='large'
                        sx={{ color: formula.favorite ? 'var(--main-coral)' : 'var(--main-blue)' }}
                        // This event handler is used to prevent the click event from bubbling up to the parent element 
                        // This will look different once we get the user profile and favorites functionality implemented
                        onClick={(event) => {
                          event.stopPropagation();
                          handleFavoriteClick(index);
                        }}
                      >
                        {formula.favorite ? <FavoriteIcon fontSize='inherit' /> : <FavoriteBorderIcon fontSize='inherit' />}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          // Simply displays this message if no formulas match the search term but we should never see this message!
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Typography variant="h6">No Formulas match your selection</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Results;
