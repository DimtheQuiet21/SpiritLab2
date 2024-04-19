import {
    useState,
    useContext,
    useEffect
} from "react";

import {
    Box,
    Divider,
    Typography
} from "@mui/material";

import GlobalContext from "../../utils/globalContext";

import IngredientSlider from "./subcomponents/ingredientSlider/IngredientSlider";
import DrinkSVG from "./subcomponents/drinkSvg/DrinkSVG";

import './drinkRenderer.css';

const DrinkRenderer = () => {

    const [assembledFormula, setAssembledFormula] = useState([])

    //Access global state and store it in a state
    const { globalState, setGlobalState } = useContext(GlobalContext);

    //Build assembled ingredient list on load
    useEffect(() => {
        assembleFormula();
    })

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
    }

    const assembleFormula = () => {
        formulaData.alcohol.forEach(element => {
            assembledFormula.push(element);
        });
        formulaData.liquid.forEach(element => {
            assembledFormula.push(element);
        });
        formulaData.garnish.forEach(element => {
            assembledFormula.push(element);
        });
        console.log(assembledFormula);
    }

    return (
        <>
            {/* Rendered Drink */}
            {assembledFormula.map((ingredient, index) => {
                return (
                    <Box key={`${index}-${ingredient.name}`}>
                        <Box className="ingredientTitle">
                            <Typography>{`${ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}`}</Typography>
                        </Box>
                        <Box className="ingredientContainer">
                            <IngredientSlider ingredient={ingredient.name} amount={ingredient.amount}/>
                        </Box>
                    </Box>
                    
                )
            })}

            <Divider color='text.secondary' sx={{mt: '12pt'}}>RESULTS</Divider>

            {/* Drink SVG */}
            <Box>
                <DrinkSVG ingredients={assembledFormula} />
            </Box>
        </>
    );
}

export default DrinkRenderer;