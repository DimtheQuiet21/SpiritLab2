import {GET_ALL_FORMULAS} from "../utils/queries"
import { useQuery } from '@apollo/client';
import {Autocomplete, TextField, ToggleButton, Button, ToggleButtonGroup, ButtonGroup} from '@mui/material';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import SearchDrink from '../components/search/SearchDrink.jsx'

function Search() {

    const [searchToggle, setToggle] = useState(true);
    const [searchLabel, setLabel] = useState('Formulas');
    const [searchOptions, setOptions] = useState([]);
    const [searchTerm, setTerm] = useState("");
    const [formulas, setFormulas] = useState([]);
    const [chosenFormula, setChosenFormula] = useState({});

    const { loading, data, error } = useQuery (GET_ALL_FORMULAS);
    

    useEffect(() => {
            
            if (!loading && data) {
                const formulaArray = data.formulas
                if (searchToggle){
                    const names = formulaArray.map(formula => formula.name);
                    setOptions(names);    
                } else {
                    const alcohols = formulaArray.map(formula => formula.alcohol.map(element=> element.name));
                    const liquids = formulaArray.map(formula => formula.liquid.map(element=> element.name));
                    const garnishes = formulaArray.map(formula => formula.garnish.map(element=> element.name));
                    //So we first concatenate the arrays THEN we flatten them. Apparently, nested arrays don't have their duplicates filtered.
                    //apparently the ... spread function on the concat would also do the trick
                    const ingredients = alcohols.concat(liquids,garnishes).flat(); 
                    //Now we filter out the duplicate ingredients.
                    const uniqueIngredients = ingredients.filter((value, index, self) => self.indexOf(value) === index);
                    setOptions(uniqueIngredients);
                }
            }
    //Anytime the loading, data, or SearchToggle changes, run this UseEffect Again.
    }, [loading, data, searchToggle]);

    // Anytime we complete the updating of the terms, we change the label.
    // This was throwing harsh timing related errors before. I eventually had to give up on updating
    // The multiple property. A simple conditional render is the best way to go.
    //But there will need to be additional options show based on what the 
    useEffect(()=>{

        if (searchLabel === "Formulas") {
            setLabel("Ingredients")
        } else {
            setLabel("Formulas")
        }
    }, [searchOptions])

    useEffect(()=>{
        //I was throwing an error because I alternate between strings and arrays.
        if (searchTerm && Array.isArray(searchTerm)){
            //We go over all the search terms in the array, we go over all Formulas, We go over all ingredients
            const validFormulaArray = [];
            const counts = {};

            function pickBackgroundColor (number) {
                if(number ===1) {
                    return "rgb(18, 18, 18)"
                }
                if(number === 2) {
                    return "rgb(50, 22, 98)"
                }
                if (number === 3){
                    return "rgb(27, 151, 238)"
                }
                if (number > 3) {
                    return "rgb(27, 238, 231)"
                }
            }

            function compareCount (a,b) {
                return b.count - a.count
            }

            searchTerm.forEach(term => {
                const validFormula = data.formulas.filter((formula) =>
                    formula.alcohol.some((element) => element.name.includes(term)) ||
                    formula.liquid.some((element) => element.name.includes(term)) ||
                    formula.garnish.some((element) => element.name.includes(term))
                );
                validFormulaArray.push(...validFormula)
            })

            validFormulaArray.forEach(formula => {
                counts[formula.name] = (counts[formula.name] || 0) + 1;
            });

            const uniqueFormulas = [...new Set(validFormulaArray)];
            const uniqueFormulaNames = uniqueFormulas.map((element) => element.name)
            const uniqueFormulaObjects = uniqueFormulaNames.map((formula) => ({   
                    name:formula,
                    count:counts[formula],
                    backgroundcolor:pickBackgroundColor(counts[formula])
                
            }))

            uniqueFormulaObjects.sort(compareCount)
            console.log(validFormulaArray)
            console.log(uniqueFormulaNames)
            console.log(counts);
            console.log(uniqueFormulaObjects)
            const buttons = uniqueFormulaObjects.map((element,index) => {
                return <Button 
                    sx = {{backgroundColor: element.backgroundcolor}}
                    key = {index}
                    onClick = {() => {
                        handleSetChoice(element.name)
                    }}
                    component={Link} to="/lab/"
                    >{element.name}</Button>
            })
            setFormulas(buttons)
        } else {
            setFormulas([])
        }
        return () => setFormulas([]) //cleansup after unmounting the component







    },[searchTerm])

    function handleSetChoice (choice) {
        if (searchToggle) {
            const formulaMatch= data.formulas.find((element) => {
                return element.name == searchTerm
            })
            setChosenFormula(formulaMatch);
        } else {
            const formulaMatch= data.formulas.find((element) => {
                return element.name == choice
            })
            setChosenFormula(formulaMatch);
            }
        }
    
    useEffect(() => {
        console.log(chosenFormula);
    },[chosenFormula])


    return (
        <div>
            <h2>Select your Drink or Ingrdients!</h2>

            {loading ? 
                ( 
                    <div>Loading...</div> 
                ) : (
                    <div>
                    <ToggleButtonGroup
                        exclusive
                        onChange = {() => {
                            setToggle(!searchToggle);
                        }}
                        label = "Search By:"
                    >
                        <ToggleButton 
                            value="Formulas"
                            aria-label="formulas"
                        > {searchToggle ? 'Switch to Ingredients' : 'Switch to Formulas'}  
                        </ToggleButton>

                    </ToggleButtonGroup> 
                    <br/>
                    <br/>
                    {searchToggle? (
                        <div key = "formulaAutocomplete">
                            <Autocomplete
                            disablePortal
                            id="combo-box"
                            options={searchOptions || {}}
                            sx={{ width: 300 }}
                            onChange = {(event,value) => {
                                console.log(value)
                                setTerm(value);
                            }}
                            renderInput={(params) => 
                                <TextField
                                    {...params}
                                    label={searchLabel}
                                    
                                />}
                            />
                            <br/>
                            
                            <Button 
                                variant="contained"
                                component={Link} to="/lab/"
                                onClick = {(event) => {
                                    handleSetChoice()
                                }}
                                >Concoct
                            </Button>    
                            <div>
                                <SearchDrink cocktail= {searchTerm} />
                            </div>      
                        </div>
                    ):(
                        <div key = "ingredientsAutocomplete">
                        <Autocomplete
                        multiple = {true}
                        disablePortal
                        id="combo-box"
                        options={searchOptions || {}}
                        sx={{ width: 300 }}
                        onChange = {(event,value) => {
                            console.log(value)
                            setTerm(value);
                        }}
                        renderInput={(params) => 
                            <TextField
                                {...params}
                                label={searchLabel}
                                
                            />}
                         />
                         <br/>
                         <div>Pick a Formula with Your Ingredients</div>
                         {formulas? (
                         <ButtonGroup
                         sx={{}}>
                            {formulas}
                         </ ButtonGroup>
                         ):(
                         <div>/</div>
                         )}
                        </div>
                )}
        </div>
        
    )}
</div>
)}
  
  export default Search