import {GET_ALL_FORMULAS} from "../../utils/queries"
import { useQuery } from '@apollo/client';
import {Autocomplete, TextField, ToggleButton, Button, ToggleButtonGroup} from '@mui/material';
import { useState, useEffect } from 'react';


function Search() {

    const [searchToggle, setToggle] = useState(false);
    const [searchLabel, setLabel] = useState('Formulas');
    const [searchOptions, setOptions] = useState([]);
    const [searchTerm, setTerm] = useState("");
    const { loading, data, error } = useQuery (GET_ALL_FORMULAS);

    useEffect(() => {
        if (!loading && data) {
            
            const formulaArray = data.formulas

            if (searchToggle === false){
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

    const handleToggle = (event, newToggle) => {
        if (newToggle !== null) {
            setToggle(!searchToggle); //Just inverse the boolean to alternate
            if (searchLabel === "Formulas") {
                setLabel("Ingredients")
            } else {
                setLabel("Formulas")
            }
        }    
    };
    
    const handleOptionSelect = (event,value) => {
        const newTerm = document.getElementById("combo-box-demo").value
        console.log(newTerm)
        setTerm(newTerm);
        console.log(searchTerm);
      };

    return (
        <div>
            <h2>I am the search component. I will be toggleable.</h2>
            <ToggleButtonGroup
                value = {searchToggle}
                exclusive
                onChange = {handleToggle}
                label = "Search By:"
            >
                <ToggleButton value="Formulas" aria-label="formulas">
                </ToggleButton>
                <ToggleButton value="Ingredients" aria-label="ingredients">
                    
                </ToggleButton>  
            </ToggleButtonGroup> 


            {loading ? 
                ( 
                    <div>Loading...</div> 
                ) : (
                    <div>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={searchOptions || {}}
                            sx={{ width: 300 }}
                            onChange = {handleOptionSelect}
                            renderInput={(params) => 
                                <TextField
                                    {...params}
                                    label={searchLabel}
                                    
                                />}
                        />
                        <Button variant="contained">Contained</Button>
                    </div>
                )
            }
            {searchToggle ?(
                <div>Hi</div>
                ):(
                <div></div>)
            }
        </div>
    )}

  
  export default Search