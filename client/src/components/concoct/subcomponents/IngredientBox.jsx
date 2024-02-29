import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Box, ButtonGroup, IconButton, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete'


function IngredientBox (props) {


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

    function handleNameFieldChange (event) {
        setElementName(event.target.value);
    }

    function handleNumberFieldChange (event) {
        setElementAmount(event.target.value);
    }

    function handleUnitFieldChange (event) {
        setElementUnit(event.target.value);
    }

    const [stateElement, setStateElement] = useState(props)
    const [readytoCook, setReadytoCook] = useState(props.cookState)
    const [elementName, setElementName] = useState(props.element.name)
    const [elementAmount, setElementAmount] = useState(handleAmount(props.element.amount))
    const [elementUnit, setElementUnit] = useState(handleUnit(props.element.amount))

    // console.log(element.element.name)
    // console.log(`${element.receipeVar.keys[element.index]}-${element.index2}`)

    return (
        //Literally wait for all the variables to load in.
        Object.keys(stateElement).length > 0 ? (
            <Container
            //Sets the key to be something like alcohol-1
            key={`${props.receipeVar.keys[props.index]}-${props.index2}`}
            
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 'solid 2px #2c2c2c',
                p: '8px',
                userSelect: 'auto',
                pointerEvents: 'auto'
            }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CircleIcon sx={{ mr: '4px', color: props.colors[props.index2] }} />
                    
                {readytoCook ? 
                 (
                    <>
                        <TextField color = 'accent' variant="outlined" placeholder='Name' value = {elementName} onChange={handleNameFieldChange} ></TextField>
                        <TextField color = 'accent' variant="outlined" placeholder='Amount' value = {elementAmount} type="number" onChange={handleNumberFieldChange}></TextField>
                        <TextField color = 'accent' variant="outlined" placeholder='Units' value = {elementUnit} onChange={handleUnitFieldChange}></TextField>
                    </>             
                ) : (
                    <Box>
                        <Typography variant="h7">{props.element.name}</Typography>
                        <Typography color='accent'>{props.element.amount}</Typography>
                    </Box>
                    )}
                </Box>
            </Container>
        
        ) :(
                null) 
    )
}

export default IngredientBox