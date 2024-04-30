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



const IngredientDiv = ({ingredients, type, index}) => {

    //console.log(props, ingredientMatrix, ingredientType)
    
    const [open, setOpen] = useState(false);
    const [drinkData, setDrinkData] = useState([]);
    const [ingredientState, setIngredientState] = useState([])
    const {updateIngredientCategory} = useGlobalContext()

    // function handleDelete ( element, index, index2, matrix) {

    //     // the array alcohol,liquid,garnish is the 1st index
    //     // the place in that array is the 2nd index
        
    //     console.log("Delete this", element, index, index2, matrix);
    //     const newStateObject = {...globalState};
    //     const newArray = [...newStateObject[matrix]];
        
    //     //We have to tell the splice function where to start and how many things to delete
    //     newArray.splice(index2, 1);
    //     newStateObject[matrix] = newArray;
    //     console.log(newArray)
    //     setGlobalState(newStateObject)
    //     // setlocalState(newStateObject)
    
    //     // CHECK THE SLICE FUNCTION. DOES IT KILL EVERYTHING BEYOND THE POINT?
    // }

    // console.log(ingredients, type, index, localState, localState[type])

    const buildDrinkData = (data) => {

        console.log("Building Drink Data", data)
        const initSliderValues = [];
        data.forEach(ingredient => {
            const newUnit = ingredient.amount.match(/[a-zA-Z]+/);
            const newQty = Number(ingredient.amount.match(/[0-9_.-]+/));
    
            let sliderValue = 0;
            let value = 0;
            let unit = '';
            let altUnit = '';
            
            // Set unitOfMeasure + sliderValue
            if (newUnit == 'oz') {
                unit = 'oz';
                sliderValue = newQty*2;
                value = newQty;
            } else if (newUnit == 'ml') {
                unit = 'ml';
                sliderValue = (newQty/30)*2;
                value = newQty;
            } else if (newUnit == null) {
                unit = '';
                sliderValue = newQty;
                value = newQty;
            } else {
                unit = ''
                altUnit = `${newUnit}`;
            }
    
            if (newQty == 0) {
                sliderValue = 1;
                value = 1;
            }

            initSliderValues.push({
                name: ingredient.name,
                sliderValue: sliderValue,
                value: value,
                unit: unit,
                altUnit: altUnit
            });
        });

        setDrinkData(initSliderValues);
    };

    useEffect (() => {
        if (ingredients.length !== 0) {
            setIngredientState(ingredients)
        }
    }, [])

    useEffect(() => {
        if (ingredients.length !== 0) {
            buildDrinkData(ingredients);
        }
    }, []);

    function handleAddition(matrix) {
        
        // const selectIngredients = ingredients[matrix]
        // const newStateObject = {...localState};
        const newArray = [...ingredientState];
        newArray.push(
            {
                _typename: "Ingredient",
                name:"ingredient",
                amount:"0 oz",
                technique:""
            });
        // newStateObject[matrix] = newArray;
        console.log("This is the New Array", newArray)
        setIngredientState(newArray)
        buildDrinkData(newArray)
        updateIngredientCategory (newArray, matrix)
    }

    const listRender = useMemo(() => {
        //console.log(drinkData)
        console.log(drinkData.length, ingredientState.length);
        if (drinkData.length === ingredientState.length){
            return ingredientState.map((ingredient, index) => {
                return (
                    <Box key={index}>
                        <Box className="ingredientHeader">
                            <Box className="ingredientTitle">
                                <Typography>{`${ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}`}</Typography>
                            </Box>
                            <ButtonGroup variant="contained" className="titleButtons">
                                <Button><EditIcon fontSize="small" /></Button>
                                <Button><DeleteIcon fontSize="small" /></Button>
                            </ButtonGroup>
                        </Box>
                        
                        <Box className="ingredientContainer">
                            <IngredientSlider
                                sliderIndex={index}
                                drinkData={drinkData}
                                setDrinkData={setDrinkData}
                            />
                        </Box>
                    </Box>
                );
            });
        } else {
            return null
        }
    }, [ingredientState , drinkData]);

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
                {drinkData.length === ingredientState.length ? listRender : (<></>)}
                <Button size="small" onClick={() => handleAddition(type)} endIcon = {<AddIcon />}></Button>
            </Collapse>
        </> 
        
    )
}

export default IngredientDiv;