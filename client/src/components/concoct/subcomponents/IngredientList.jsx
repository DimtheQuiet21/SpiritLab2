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

const IngredientList = ({ props, colors, cookState }) => {

function handleDelete (event, target) {
    event.preventDefault()
    console.log("Delete this", event.target)
}

function handleAmount (string) {
    const numericPart = parseFloat(string.match(/\d+(\.\d+)?/));
    return isNaN(numericPart) ? '' : numericPart;
}

function handleUnit(string) {
    const letters = string.match(/[a-zA-Z]+/g);
  // If letters are found, concatenate them into a single string
  if (letters) {
    return letters.join('');
  } else {
    // If no letters found, return an empty string or null, depending on your use case
    return ''; // or return null;
  }
}

const [localState,setlocalState] = useState(props); 
const [renderState,setRenderState] = useState({});

useEffect (() => {
    //Set up a simple object to guide over and update all the values.
    const receipeVar= {
        matrix:[localState.alcohol, localState.liquid, localState.garnish],
        keys:["alcohol","liquid","garnish"]
    }

    const renderElements = receipeVar.matrix.map((ingredientType,index) => {
        console.log("This is the matrix we are looking at", ingredientType)
        console.log(colors)
        return ingredientType.map((el, index2) => (
                <Container
                //Sets the key to be something like alcohol-1
                key={`${receipeVar.keys[index]}-${index2}`}
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 'solid 2px #2c2c2c',
                    p: '8px',
                }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircleIcon sx={{ mr: '4px', color: colors[index2] }} />
                        
                    {cookState ? 
                     (
                        <Container>
                            <Container>
                                <TextField color = 'accent' variant="outlined" placeholder='Name' value = {el.name}></TextField>
                                <TextField color = 'accent' variant="outlined" placeholder='Amount' value = {handleAmount(el.amount)} type="number"></TextField>
                                <TextField color = 'accent' variant="outlined" placeholder='Units' value = {handleUnit(el.amount)}></TextField>
                            </Container>
                            <IconButton onClick={handleDelete} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Container>
                        
                    ) : (
    
                        <Box>
                            <Typography variant="h7">{el.name}</Typography>
                            <Typography color='accent'>{el.amount}</Typography>
                        </Box>
                        )}
                    </Box>
                </Container>
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

const alcoholMap = props.alcohol.map((el, index) => {
    console.log(el.amount)

        return (
            <Container
            key={`alcohol-${index}`}
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 'solid 2px #2c2c2c',
                p: '8px',
            }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircleIcon sx={{ mr: '4px', color: colors[index] }} />
                    
                {cookState ? 
                 (
                    <Container>
                        <Container>
                            <TextField color = 'accent' variant="outlined" placeholder='Name' value = {el.name}></TextField>
                            <TextField color = 'accent' variant="outlined" placeholder='Amount' value = {handleAmount(el.amount)} type="number"></TextField>
                            <TextField color = 'accent' variant="outlined" placeholder='Units' value = {handleUnit(el.amount)}></TextField>
                        </Container>
                        <IconButton onClick={handleDelete} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Container>
                    
                ) : (

                    <Box>
                        <Typography variant="h7">{el.name}</Typography>
                        <Typography color='accent'>{el.amount}</Typography>
                    </Box>
                    )}
                </Box>
            </Container>
)})

const liquidMap = props.liquid.map((el, index) => {
            return (
            <Container
            key={`liquid-${index}`}
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 'solid 2px #2c2c2c',
                p: '8px',
            }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircleIcon sx={{ mr: '4px', color: colors[index + props.alcohol.length] }} />
                    <Typography variant="h7">{el.name}</Typography>
                </Box>
                <Typography color='accent'>{el.amount}</Typography>
               
            </Container>
)})

const garnishMap = props.garnish.map((el, index) => {
            return (
            <Container
            key={`liquid-${index}`}
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 'solid 2px #2c2c2c',
                p: '8px',
            }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h7">{el.name}</Typography>
                </Box>
                <Typography color='accent'>{el.amount}</Typography>
            </Container>
)})

  return (
        <>
            <Container sx={{textAlign: "left", mb: "8px"}}>

                {/* SPIRITS */}
                <Typography variant="h7" color="text.secondary">Spirits:</Typography>

                {/* Render Alcohol */}
                <>{renderState? (console.log("We render"), renderState.alcohol):(null)}</>
                {/*alcoholMap*/}
                {cookState ? (
                    <Container>
                        <CardActions>
                            <Button size="small">+ Add Alcohol</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small">+ Add Mixer</Button>
                        </CardActions>
                        <CardActions>
                            <Button size="small">+ Add Garnish</Button>
                        </CardActions>
                    </Container>
                ) : (null)}
                

                <br/><br/>

                {/* MIXERS */}
                <Typography variant="h7" color="text.secondary">Mixers:</Typography>

                {/* Render Liquids */}
                <>{liquidMap}</>

                <br/><br/>

                {/* GARNISHES */}
                <Typography variant="h7" color="text.secondary">Garnish:</Typography>

                {/* Render Garnishes */}
                {garnishMap}

                <br/>

            </Container>
        </>
  );
}

export default IngredientList;