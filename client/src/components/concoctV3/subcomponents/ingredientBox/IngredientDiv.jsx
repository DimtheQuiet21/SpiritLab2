import { useState, useEffect, useContext, useMemo} from 'react';

import { useGlobalContext } from "../../../../globalProvider.jsx";

// import IngredientBox from './IngredientBox'
// import IngredientList from './IngredientList';


import {Collapse, Button, List} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import { Container, Box, ButtonGroup, IconButton, getFormControlLabelUtilityClasses } from '@mui/material';
// import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import IngredientSlider from './IngredientSlider'



const IngredientDiv = ({ingredients, type, index }) => {

    //console.log(props, ingredientMatrix, ingredientType)
    
    const [open, setOpen] = useState(false);
    const [ingredientState, setIngredientState] = useState([])
    const {updateIngredientCategory} = useGlobalContext()

    //     console.log("Building Drink Data", data)
    //     const initSliderValues = [];
    //     data.forEach(ingredient => {
    //         const newUnit = ingredient.amount.match(/[a-zA-Z]+/);
    //         const newQty = Number(ingredient.amount.match(/[0-9_.-]+/));
    
    //         let sliderValue = 0;
    //         let value = 0;
    //         let unit = '';
    //         let altUnit = '';
            
    //         // Set unitOfMeasure + sliderValue
    //         if (newUnit == 'oz') {
    //             unit = 'oz';
    //             sliderValue = newQty*2;
    //             value = newQty;
    //         } else if (newUnit == 'ml') {
    //             unit = 'ml';
    //             sliderValue = (newQty/30)*2;
    //             value = newQty;
    //         } else if (newUnit == null) {
    //             unit = '';
    //             sliderValue = newQty;
    //             value = newQty;
    //         } else {
    //             unit = ''
    //             altUnit = `${newUnit}`;
    //         }
    
    //         if (newQty == 0) {
    //             sliderValue = 1;
    //             value = 1;
    //         }

    //         initSliderValues.push({
    //             name: ingredient.name,
    //             sliderValue: sliderValue,
    //             value: value,
    //             unit: unit,
    //             altUnit: altUnit
    //         });
    //     });

    //     setDrinkData(initSliderValues);
    // };

    useEffect (() => {
        if (ingredients.length !== 0) {
            setIngredientState(ingredients)
        }
    }, [])

    function handleAddition(matrix) {
        
        const newArray = [...ingredientState];
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
        updateIngredientCategory (newArray, matrix)
    }

    function handleDeletion (matrixindex) {

        const stringArray = matrixindex.split(" ")
        console.log(stringArray)
        const matrix = stringArray[0];
        const indexNum = parseInt(stringArray[1]) 
        const newArray = [...ingredientState];
        const deletedElement = newArray.splice(indexNum,1);
        console.log("This is the Deleted Ingredient", deletedElement)
        setIngredientState(newArray)
        //buildDrinkData(newArray)
        updateIngredientCategory (newArray, matrix)
    }


    const listRender = useMemo(() => {
        console.log(ingredientState.length > 0);
        if (ingredientState.length > 0){
            return ingredientState.map((ingredient, index) => {
                return (
                    <Box key={index}>
                        <Box className="ingredientHeader">
                            <Box className="ingredientTitle">
                                <Typography>{`${ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}`}</Typography>
                            </Box>
                            <ButtonGroup variant="contained" className="titleButtons">
                                <Button id = {`${type} ${index}`}><EditIcon fontSize="small" /></Button>
                                <Button id = {`${type} ${index}`} onClick={() => handleDeletion(`${type} ${index}`)}><DeleteIcon fontSize="small" /></Button>
                            </ButtonGroup>
                        </Box>
                        
                        <Box className="ingredientContainer">
                            <IngredientSlider
                                sliderIndex={index}
                                type = {type}
                                drinkData= {ingredientState}
                                setDrinkData={setIngredientState}
                            />
                        </Box>
                    </Box>
                );
            });
        } else {
            return null
        }

    }, [ingredientState ]);

    const toggleCollapse = (newOpen) => {
        setOpen(newOpen);
        //console.log(newOpen)
      };

    function icon () {
        if (open === true) {
            return <KeyboardDoubleArrowUpIcon />
        } else {
            return <KeyboardDoubleArrowDownIcon />
            }
        }

    return (
        <>
            <Button  onClick={() => toggleCollapse(!open)} endIcon={icon()} >{type}</Button>
            <Collapse in = {open} key = {type} index = {index}>
                {ingredientState.length > 0 ? listRender : (<></>)}
                <Button size="small" onClick={() => handleAddition(type)} endIcon = {<AddIcon />}></Button>
            </Collapse>
        </> 
        
    )
}

export default IngredientDiv;