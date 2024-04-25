import { useState, useContext, useEffect } from "react";

import { ButtonGroup, Divider, Drawer} from "@mui/material";

import IngredientDiv from "./subcomponents/ingredientBox/IngredientDiv";
import DrinkSVG from "./subcomponents/drinkSvg/DrinkSVG";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container } from '@mui/material';


import './drinkRenderer.css';
import GlobalContext from '../../utils/globalContext';

const ConcoctV3 = ({props}) => {

    const { globalState, setGlobalState } = useContext(GlobalContext);

    const receipeVar= {
        matrix:[globalState.alcohol, globalState.liquid, globalState.garnish],
        keys:["alcohol","liquid","garnish"]
    }

    const ingredientTypes = receipeVar.matrix.map((ingredientMatrix,index) => {
        //console.log("This is the matrix we are looking at", receipeVar.keys[index])
        return (
            <>
                <IngredientDiv ingredients={ingredientMatrix} type={receipeVar.keys[index]} index = {index}/>
            </>

        )
    })

    console.log (receipeVar)

    return (
        <>
            <Card variant="outlined" sx={{mb: "24px"}}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>{props.name}</strong> </Typography>
                </CardContent>
                {ingredientTypes}
            </Card>
        </>
    )
}



export default ConcoctV3;