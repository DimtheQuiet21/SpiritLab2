import { useState, useEffect, useContext} from 'react';
import NeighborContext from '../../../utils/neighborContext';

import IngredientBox from './IngredientBox'

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Box, ButtonGroup, IconButton, getFormControlLabelUtilityClasses } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const IngredientList = ({ props, colors, cookState }) => {

    const { neighborState, setNeighborState} = useContext(NeighborContext);

    const [localState,setlocalState] = useState(neighborState); 
    const [renderState,setRenderState] = useState({});
    const [readytoRender, setReadytoRender] = useState({})

    // console.log ('NEIGHBORSTATE Loaded with', neighborState)
    // console.log('LOCALSTATE loaded with', localState)
    // console.log("RENDERSTATE Loaded with", renderState)

    function handleDelete ( element, index, index2, matrix) {

        // the array alcohol,liquid,garnish is the 1st index
        // the place in that array is the 2nd index
        
        console.log("Delete this", element, index, index2, matrix);
        const newStateObject = {...neighborState};
        const newArray = [...newStateObject[matrix]];
        
        //We have to tell the splice function where to start and how many things to delete
        newArray.splice(index2, 1);
        newStateObject[matrix] = newArray;
        console.log(newArray)
        setNeighborState(newStateObject)
        // CHECK THE SLICE FUNCTION. DOES IT KILL EVERYTHING BEYOND THE POINT?
    }

    function handleAddition(matrix) {
        const newStateObject = {...neighborState};
        const newArray = [...newStateObject[matrix]];
        newArray.push(
            {
                name:"",
                amount:"",
                technique:"",
                _typename: "Ingredient"
            });
        newStateObject[matrix] = newArray;
        console.log("Adding a New Row", newArray)
        console.log("Adding a New Row", newStateObject)
        setNeighborState(newStateObject)
    }

    //This is what makes the ingredient boxes, This useEffect updates everytime you change local state and rerenders.
    //This is to slow us down. //I need to unload the ReadytoRender Items to make sure they don't AUTO reload on themselves

    useEffect (() => {
        setReadytoRender({})
        //Set up a simple object to guide over and update all the values.
        const receipeVar= {
            matrix:[neighborState.alcohol, neighborState.liquid, neighborState.garnish],
            keys:["alcohol","liquid","garnish"]
        }

        const renderElements = receipeVar.matrix.map((ingredientType,index) => {
            console.log("This is the matrix we are looking at", ingredientType)
            //console.log(colors)
            
            return ingredientType.map((element, index2) => (
                <>
                    <IngredientBox props = {props} element = {element} index = {index} index2 = {index2} colors = {colors} cookState = {cookState} receipeVar = {receipeVar}/>
                    {cookState ? (
                    <IconButton onClick={(event) => handleDelete(element, index, index2, receipeVar.keys[index])} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    ) : (null)}
                </>
                    
                ))       
            })
        
        //It's time to SET a State Function before we leave the loop.
        const renderObject = {
            alcohol: renderElements[0],
            liquid: renderElements[1],
            garnish: renderElements[2]
        }
        console.log("These are the Renders", renderObject)
        setRenderState(renderObject);

    },[localState]);

    useEffect (()=> {
        setReadytoRender(renderState)
    },[renderState])

  return (
        <>
            <Container sx={{textAlign: "left", mb: "8px"}}>

             {cookState ? (
                    <Container>
                        <CardActions>
                            <Button size="small" onClick={() => handleAddition("alcohol")}>+ Add Alcohol</Button>
                        </CardActions>
                    </Container>
                ) : (null)}

                {/* SPIRITS */}
                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                {/* Render Alcohol */}
                <>
                {Object.keys(readytoRender).length > 0 ? (console.log("We render", renderState), renderState.alcohol):(<div>Uh oh</div>)}</>
                {/*alcoholMap*/}
                
                <br/><br/>


                {cookState ? (
                    <Container>
                        <CardActions>
                            <Button size="small" onClick={() => handleAddition("liquid")}>+ Add Mixer</Button>
                        </CardActions>
                    </Container>
                ) : (null)}

                {/* MIXERS */}
                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                {/* Render Liquids */}
                <>{Object.keys(readytoRender).length > 0? (console.log("We render", renderState), renderState.liquid):(null)}</>

                <br/><br/>

                {cookState ? (
                    <Container>
                        <CardActions>
                            <Button size="small" onClick={() => handleAddition("garnish")}>+ Add Garnish</Button>
                        </CardActions>
                    </Container>
                ) : (null)}

                {/* GARNISHES */}
                <Typography variant="h7" color="text.secondary">Garnish:</Typography>

                {/* Render Garnishes */}
                <>{Object.keys(readytoRender).length > 0? (console.log("We render", renderState), renderState.garnish):(null)}</>

                <br/>

            </Container>
        </>
  );
}

export default IngredientList;