import {GET_ALL_FORMULA_NAMES} from "../../utils/queries"
import { useQuery } from '@apollo/client';
import {Autocomplete, TextField} from '@mui/material';


function Search() {
    const { loading, data } = useQuery(GET_ALL_FORMULA_NAMES);

    if (loading) return "Loading...";   
    
    console.log(data);
    const formulaArray = data?.formulas||[];
    
    const formulaNames = formulaArray.map(formula => formula.name);
    console.log(formulaNames);

    return (
        <div>
            <h2>I am the search component. I will be toggleable.</h2>
            {loading ? (
                    <div>Loading...</div>) : (
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={formulaNames || {}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Formulas" />}
                        />
                    )}
        </div>
    )}

  
  export default Search