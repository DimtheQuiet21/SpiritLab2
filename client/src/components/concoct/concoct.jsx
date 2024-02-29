import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../utils/globalContext';
import NeighborContext from '../../utils/neighborContext';

import IngredientList from './subcomponents/IngredientList';
import DrinkVisualizer from './subcomponents/DrinkVisualizer';
import CommercialBox from './subcomponents/CommercialBox';
import Cook from './Cook'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container } from '@mui/material';



const Concoct = ({ props }) => {

    const { globalState, setGlobalState } = useContext(GlobalContext);
    const { neighborState, setNeighborState} = useContext(NeighborContext);

    const [ingredientColors, setIngredientColors] = useState([]);
    const [cooking,setCooking] = useState(false)
    const [localState, setlocalState] = useState(globalState);

    useEffect(() => {
      setNeighborState(globalState)
    },[])

    //Generate values for ingredient colors
    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            const hex = randomHex();
            setIngredientColors(ingredientColors => [...ingredientColors, hex]);
        }
    }, [])
    // console.log(ingredientColors);

    const randomHex = () => {
        const char = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += char[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleChangeCooking () {
      //Renders the cooking page
      setNeighborState(globalState);
      setCooking(!cooking)
    }

    function handleSaveCooking () {
      //Renders the cooking page
      setGlobalState(neighborState);
      setCooking(!cooking)
    }
    

  return (
      <>
      <Card variant="outlined" sx={{mb: "24px"}}>
        {/* DRINK NAME */}
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>{props.name}</strong> </Typography>
        </CardContent>
        
        {cooking && ingredientColors.length>0 ? (
            <Cook props = {props} formula = {neighborState} colors = {ingredientColors} cook = {cooking} onSaveCooking = {handleSaveCooking}/>

            ) : (

              ingredientColors.length>0 ? (

                <CardContent sx={{display: "flex", minHeight: "max-content"}}>
                  {/* INGREDIENT LIST */}
                  <Container maxWidth="xl">
                      <IngredientList props={props} colors={ingredientColors} cookState = {cooking}/>
                  </Container>

                  {/* BEAKER UI */}
                  <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                      <DrinkVisualizer key = "cookingDrinks" props={props} colors={ingredientColors} cookState = {cooking}/>
                  </Container>
                </CardContent> 

              ) : (null) 
            )}
          <CardContent>
            {/* ACTIONS UI */}
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "space-around"}}>
                <Container sx={{textAlign: "left"}}>
                    <Typography variant='h7' color='text.secondary'>Assembly:</Typography>
                    <br/> <br/>
                    <Typography variant='h7'>{props.assembly}</Typography>
                </Container>

                <Container sx={{borderBottom: "solid 2px #2c2c2c"}}></Container>

                <Stack spacing={2} direction="column">
                    <Button variant="outlined">Favorite</Button>
                    {!cooking ? (                    
                    <Button 
                      variant="outlined"
                      onClick = {handleChangeCooking}
                      >Modify
                    </Button>
                    ) : (
                      <Button 
                      variant="outlined"
                      onClick = {handleSaveCooking}
                      >Save
                      </Button>
                    )}

                    {/* <Button variant="outlined">Find Similar</Button> */}
                </Stack>
            </Container>
        </CardContent>
      </Card>
      
      <Container>
        <CommercialBox />
      </Container>
    </>
    )
}

export default Concoct;