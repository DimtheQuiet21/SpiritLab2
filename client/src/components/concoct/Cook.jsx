import { useState, useEffect, useContext } from 'react';
import IngredientList from './subcomponents/IngredientList';
import DrinkVisualizer from './subcomponents/DrinkVisualizer';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container, Card, CardActionArea, CardActions, CardContent, Button } from '@mui/material';
import {Stack, Typography, TextField} from '@mui/material'
import { ColorizeSharp, PropaneSharp } from '@mui/icons-material';

function Cook (props) {

const [cooking,setCooking] = useState(props.cook)
 
console.log("This is being cooked", props.formula, props.cook, props.colors, props.onSaveCooking)
const formula = props.formula
const colors = props.colors
const cookState = props.cook
const handleSaveCooking = props.onSaveCooking;

    function handleChangeCooking () {
        //Renders the cooking page
        setCooking(!cooking)
    }

    return (

        
        <CardContent sx={{display: "flex", minHeight: "max-content"}}>
            <p>Let's Cook</p>
            {/* INGREDIENT LIST */}
            <>
            <Container maxWidth="xl">
                <IngredientList props={formula} colors={colors} cookState = {cookState} onSaveCooking = {handleSaveCooking}/>
            </Container>

            {/* BEAKER UI */}
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
                <DrinkVisualizer key = "concoctDrinks" props={formula}  cookState = {cookState} colors={colors}/>
            </Container>
            </>
        </CardContent>
    )
}

export default Cook