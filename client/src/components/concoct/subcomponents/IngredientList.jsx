import { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Box, ButtonGroup, IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IngredientBox from './IngredientBox'

const IngredientList = ({ props, colors, cookState }) => {
console.log( props, colors, cookState)

const [localState,setlocalState] = useState(props); 
const [renderState,setRenderState] = useState({});

function handleDelete (element, index, index2, matrix) {
    // the array alcohol,liquid,garnish is the 1st index
    // the place in that array is the 2nd index
    console.log("Delete this", element, index, index2, matrix);
    const newStateObject = {...localState};
    const newArray = [...newStateObject[matrix]];
    newArray.splice(index2);
    newStateObject[matrix] = newArray;
    setlocalState(newStateObject)
}

function handleAddition(matrix) {
    const newStateObject = {...localState};
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
    setlocalState(newStateObject)
}

//This is what makes the ingredient boxes, This useEffect updates everytime you change local state and rerenders.
useEffect (() => {
    //Set up a simple object to guide over and update all the values.
    const receipeVar= {
        matrix:[localState.alcohol, localState.liquid, localState.garnish],
        keys:["alcohol","liquid","garnish"]
    }

    const renderElements = receipeVar.matrix.map((ingredientType,index) => {
        console.log("This is the matrix we are looking at", ingredientType)
        console.log(colors)
        
        return ingredientType.map((element, index2) => (
            <>
                <IngredientBox element = {element} index = {index} index2 = {index2} colors = {colors} cookState = {cookState} receipeVar = {receipeVar}/>
                {cookState ? (
                <IconButton onClick={() => handleDelete(element, index, index2, receipeVar.keys[index])} aria-label="delete">
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

// const alcoholMap = props.alcohol.map((el, index) => {
//     console.log(el.amount)

//         return (
//             <Container
//             key={`alcohol-${index}`}
//             maxWidth="lg"
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderBottom: 'solid 2px #2c2c2c',
//                 p: '8px',
//             }}
//             >
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <CircleIcon sx={{ mr: '4px', color: colors[index] }} />
                    
//                 {cookState ? 
//                  (
//                     <Container>
//                         <Container>
//                             <TextField color = 'accent' variant="outlined" placeholder='Name' value = {el.name}></TextField>
//                             <TextField color = 'accent' variant="outlined" placeholder='Amount' value = {handleAmount(el.amount)} type="number"></TextField>
//                             <TextField color = 'accent' variant="outlined" placeholder='Units' value = {handleUnit(el.amount)}></TextField>
//                         </Container>
//                         <IconButton onClick={handleDelete} aria-label="delete">
//                             <DeleteIcon />
//                         </IconButton>
//                     </Container>
                    
//                 ) : (

//                     <Box>
//                         <Typography variant="h7">{el.name}</Typography>
//                         <Typography color='accent'>{el.amount}</Typography>
//                     </Box>
//                     )}
//                 </Box>
//             </Container>
// )})

// const liquidMap = props.liquid.map((el, index) => {
//             return (
//             <Container
//             key={`liquid-${index}`}
//             maxWidth="lg"
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderBottom: 'solid 2px #2c2c2c',
//                 p: '8px',
//             }}
//             >
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <CircleIcon sx={{ mr: '4px', color: colors[index + props.alcohol.length] }} />
//                     <Typography variant="h7">{el.name}</Typography>
//                 </Box>
//                 <Typography color='accent'>{el.amount}</Typography>
               
//             </Container>
// )})

// const garnishMap = props.garnish.map((el, index) => {
//             return (
//             <Container
//             key={`liquid-${index}`}
//             maxWidth="lg"
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 borderBottom: 'solid 2px #2c2c2c',
//                 p: '8px',
//             }}
//             >
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Typography variant="h7">{el.name}</Typography>
//                 </Box>
//                 <Typography color='accent'>{el.amount}</Typography>
//             </Container>
// )})


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
                {Object.keys(renderState).length > 0 ? (console.log("We render", renderState), renderState.alcohol):(<div>Uh oh</div>)}</>
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
                <>{Object.keys(renderState).length > 0? (console.log("We render", renderState), renderState.liquid):(null)}</>

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
                <>{Object.keys(renderState).length > 0? (console.log("We render", renderState), renderState.garnish):(null)}</>

                <br/>

            </Container>
        </>
  );
}

export default IngredientList;