import { useState, useContext, useEffect, useMemo } from "react";

import { ButtonGroup, Divider, Drawer} from "@mui/material";

import IngredientDiv from "./subcomponents/ingredientBox/IngredientDiv";
import DrinkSVG from "./subcomponents/drinkSvg/DrinkSVG";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container } from '@mui/material';


import './drinkRenderer.css';
import { useGlobalContext } from "../../globalProvider.jsx";

const ConcoctV3 = () => {

    const { globalState, setGlobalState } = useGlobalContext();
    const [localState, setLocalState] = useState({});

    useEffect (()=>{
        if (Object.keys(localState).length < 1) {
            console.log("Setting Local State", globalState)
            setLocalState(globalState)}
        }
    ,[])

    const ingredientRender = useMemo(() => {
        const renderObject = {...localState};
        const receipeVar = {
            matrix:[renderObject.alcohol, renderObject.liquid, renderObject.garnish],
            keys:["alcohol","liquid","garnish"]
        }
        console.log ("This is the formula we are looking at", receipeVar)
        return receipeVar.matrix.map((ingredientMatrix,index) => {
            console.log("BlockRender")
                return (
                    <>
                        {/* <IngredientDiv ingredients={ingredientMatrix} type={receipeVar.keys[index]} index = {index} localState = {localState} setLocalState = {setLocalState}/> */}
                        <IngredientDiv ingredients={ingredientMatrix} type={receipeVar.keys[index]} index = {index}/>
                    </>
        
                )
        })
    },[localState]) 

    function titleRender () {
        const renderObject = {...localState};
        console.log ("This is the Drink - ", renderObject.name)
        return (
            <Typography variant="h5" component="div" gutterBottom sx={{borderBottom: "solid 2px #2c2c2c", p: "8px"}}> <strong>{renderObject.name}</strong> </Typography>
        )
    }
    
    return (
        <>
            <Card variant="outlined" sx={{mb: "24px"}}>
                <CardContent>
                    {Object.keys(localState).length > 0 ? titleRender() : <></>}
                </CardContent>
                    {Object.keys(localState).length > 0 ? ingredientRender : <></>}
            </Card>
        </>
    )
}



export default ConcoctV3;