import { useState, useEffect, useContext, useMemo } from 'react';
import { Collapse, Button, List, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { Container, Box, ButtonGroup, IconButton, getFormControlLabelUtilityClasses } from '@mui/material';
import { GET_ALL_INGREDIENTS } from "../../../../utils/queries.js";
import { useQuery } from "@apollo/client";

import IngredientAdd from "./IngredientAdd.jsx";
import IngredientEdit from "./IngredientEdit.jsx"

function IngredientPopUp ({option, parameters, setPopUpState, setIngredientState, updateIngredientCategory, searchList}) {

    //const {loading, data, error} = useQuery(GET_ALL_INGREDIENTS);

    // useEffect(() => {

    //     if (!loading && data) {
    //         const ingredients = [];
    //         console.log(data)
    //         const formulas = data.formulas;
    //         formulas.forEach((el) => {
    //             const receipeVar = [el.alcohol, el.liquid, el.garnish];
    //             receipeVar.forEach((ingredientMat)=>{
    //                 ingredientMat.forEach((ingredient) => {
    //                     ingredients.push(ingredient)
    //                 })
    //             })
    //         })
    //         //This removes duplicates while preserving the objects (we will probably need these later as objects)
    //         const ingredientMap = new Map();
    //         ingredients.forEach((ingredient) => {
    //             if (!ingredientMap.has(ingredient.name)) {
    //                 ingredientMap.set(ingredient.name, ingredient);
    //             }
    //         });
    //         const uniqueIngredients = Array.from(ingredientMap.values());
    //         const newLocalState = {...localState}

    //         newLocalState.ingredients = uniqueIngredients;
    //         console.log(uniqueIngredients)
    //         setLocalState(newLocalState)
    //     }
    // }, [loading, data])


    return (
        <>
            { 
                (option === "Add") ? (
                    <IngredientAdd 
                        parameters = {parameters} 
                        setPopUpState = {setPopUpState}
                        setIngredientState = {setIngredientState}
                        updateIngredientCategory = {updateIngredientCategory}
                        searchList = {searchList}
                    />
                ) : (
                    <IngredientEdit
                        parameters = {parameters} 
                        setPopUpState = {setPopUpState}
                        setIngredientState = {setIngredientState}
                        updateIngredientCategory = {updateIngredientCategory}
                        searchList = {searchList} 
                    />
                )
            }
        </>
        
    )
       

}



export default IngredientPopUp ;
