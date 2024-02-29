import { useState, useEffect, useContext } from 'react';
import IngredientList from './subcomponents/IngredientList';
import DrinkVisualizer from './subcomponents/DrinkVisualizer';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container, Card, CardActionArea, CardActions, CardContent, Button } from '@mui/material';
import {Stack, Typography, TextField} from '@mui/material'
import { ColorizeSharp, PropaneSharp } from '@mui/icons-material';

function Cook (props) {

const [cooking,setCooking] = useState(props.cook)
 
console.log("This is being cooked", props.formula, props.cook, props.colors)
const formula = props.formula
const colors = props.colors
const cookState = props.cook

// console.log(cook)
//State Variables
// const [ingredient1, setIngredient1] = useState(0);
// const [ingredient2, setIngredient2] = useState(0);
// const [ingredient3, setIngredient3] = useState(0);
// const [ingredient4, setIngredient4] = useState(0);
// const [ingredient5, setIngredient5] = useState(0);
// const [ingredient6, setIngredient6] = useState(0);
// const [ingredient7, setIngredient7] = useState(0);


// const updateBeaker = async (ingredient, value) => {
    //     switch (ingredient) {
    //         case 'ingredient1':
    //             setIngredient1(value);
    //             break;
    //         case 'ingredient2':
    //             setIngredient2(value);
    //             break;
    //         case 'ingredient3':
    //             setIngredient3(value);
    //             break;
    //         case 'ingredient4':
    //             setIngredient4(value);
    //             break;
    //         case 'ingredient5':
    //             setIngredient5(value);
    //             break;
    //         case 'ingredient6':
    //             setIngredient6(value);
    //             break;
    //         case 'ingredient7':
    //             setIngredient7(value);
    //             break;
    //         default:
    //             break;
    //         }
    // }

    // // Calculate heights of ingredients based on their quantities
    // const ingredient1Height = ingredient1 * 15;
    // const ingredient2Height = ingredient2 * 15;
    // const ingredient3Height = ingredient3 * 15;
    // const ingredient4Height = ingredient4 * 15;
    // const ingredient5Height = ingredient5 * 15;
    // const ingredient6Height = ingredient6 * 15;
    // const ingredient7Height = ingredient7 * 15;

    // // Calculate y-coordinates for each ingredient rectangle
    // const ingredient1Y = 190 - ingredient1Height;
    // const ingredient2Y = 190 - ingredient2Height - ingredient1Height;
    // const ingredient3Y = 190 - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient4Y = 190 - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient5Y = 190 - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient6Y = 190 - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;
    // const ingredient7Y = 190 - ingredient7Height - ingredient6Height - ingredient5Height - ingredient4Height - ingredient3Height - ingredient2Height - ingredient1Height;

    // // SVG styles
    // const beakerStyle = {
    //     stroke: '#ffffff',
    //     strokeWidth: '2px',
    //     fill: 'none'
    //   };

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
                <IngredientList props={formula} colors={colors} cookState = {cookState}/>
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