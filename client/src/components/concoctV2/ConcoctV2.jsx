import {
    useState,
    useContext,
    useEffect
} from "react";

import {
    Box,
    ButtonGroup,
    Button,
    Divider,
    Typography
} from "@mui/material";

import IngredientSlider from "./subcomponents/ingredientSlider/IngredientSlider";
import DrinkSVG from "./subcomponents/drinkSvg/DrinkSVG";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './drinkRenderer.css';

const ConcoctV2 = () => {

    const [ingredients, setIngredients] = useState([]);

    //Gets updated by Ingredient Slider children
    const [drinkData, setDrinkData] = useState([]);

    //Builds ingredient list state
    useEffect(() => {
        assembleFormula();
    }, [])

    //Log Data State
    useEffect(() => {
        // console.log(drinkData);
    }, [drinkData])

    //Test Data
    const formulaData = {
        __typename: 'Formulas',
        name: 'Classic Margarita',
        icon: '043-cuba-libra.png',
        alcohol: [
            {
                __typename: 'Ingredient',
                name: 'silver tequila',
                amount: '45 ml'
            },
            {
                __typename: 'Ingredient',
                name: 'cointreau',
                amount: '1 oz'
            }
        ],
        liquid: [
            {
                __typename: 'Ingredient',
                name: 'lime juice',
                amount: '1.5 oz'
            }
        ],
        garnish: [
            {
                __typename: 'Ingredient',
                name: 'lime wedge',
                amount: '2'
            },
            {
                __typename: 'Ingredient',
                name: 'kosher salt',
                amount: 'rim'
            }
        ],
        assembly: "Rub a wedge of lime around the rim of a chilled margarita glass, and salt the rim. Shake the liquid ingredients vigourously with ice and strain into the prepared glass."
    };

    //Builds ingredient list from data object (currently test data ^ but this will work with any drink formula injected into it)
    const assembleFormula = () => {
        const assembled = [];
        formulaData.alcohol.forEach(e => {
            assembled.push(e);
        });
        formulaData.liquid.forEach(e => {
            assembled.push(e);
        });
        formulaData.garnish.forEach(e => {
            assembled.push(e);
        });
        setIngredients(assembled);
        buildDrinkData(assembled);
    };

    //Builds initial values for children from assembled formula
    const buildDrinkData = (data) => {

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

    return (
        <>
            {/* Rendered Drink */}
            {ingredients.map((ingredient, index) => {
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
                )
            })}

            <Divider color='text.secondary' sx={{mt: '12pt'}}>RESULTS</Divider>

            {/* Drink SVG */}
            <Box>
                <DrinkSVG drinkData={drinkData} formula={formulaData} />
            </Box>
        </>
    );
}

export default ConcoctV2;