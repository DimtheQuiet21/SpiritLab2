import { useState, useEffect, useContext, useMemo } from 'react';
import { Autocomplete, Button, List, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Container, Box, ButtonGroup, IconButton, getFormControlLabelUtilityClasses, TextField } from '@mui/material';
import { useGlobalContext } from "../../../../globalProvider"

function IngredientAdd ({parameters, setPopUpState, setIngredientState, updateIngredientCategory, searchList}) {
    
    // What I need parameters to be is a object prepared to have all 
    // the things added to it like on the current iteration of the 
    // add function in Ingredient Div. One thing to remember is that
    // SearchList is an array of objects. The Autocomplete can only take in the names.

    const [open, setOpen] = useState(true);
    const [localState, setLocalState] = useState({});

    console.log(searchList.searchList)

    const handleClose = () => {
    setOpen(false);
    setPopUpState(false);
    };

    function handleAddition() {
        
        const newArray = [...parameters.state];
        newArray.push(
            {
                _typename: "Ingredient",
                name:"ingredient",
                amount:"0 oz",
                technique:"",
                sliderValue : 1,
                value : 0,
                unit :"oz",
                altUnit : ""
            });

        console.log("This is the New Array", newArray)
        setIngredientState(newArray)
        //buildDrinkData(newArray)
        updateIngredientCategory (newArray, parameters.type)
    }

    const searchTerms = searchList.searchList.map((e) => {
        //console.log(e.name)
        return e.name
    })

    console.log(searchList)
    console.log(searchTerms)

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event) => {
                event.preventDefault();
                handleAddition();
                handleClose();
              },
            }}>
    
            <DialogTitle>Choose a New Ingredient</DialogTitle>
            <DialogContent>
    
                <DialogContentText>
                
                </DialogContentText>
                <Autocomplete
                        disablePortal
                        id="combo-box"
                        options={searchTerms}
                        sx={{ width: "330px" }}
                        onChange={(event, value) => setLocalState(value)}
                        renderInput={(params) => (
                            <TextField {...params} />
                        )}
                />
                <DialogActions>
                    
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Confirm</Button>
                </DialogActions>
    
            </DialogContent>
    
        </Dialog>
    )

}



export default IngredientAdd