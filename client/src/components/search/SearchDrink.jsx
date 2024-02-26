import {GET_SEARCH_COCKTAIL} from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Box, Typography} from '@mui/material';
import DrinkImage from "../randoDrink/DrinkImage";

function convertString(str) {
    // Convert the string to lowercase
    const lowerCaseStr = str.toLowerCase();
    // Replace all spaces with underscores
    const replacedStr = lowerCaseStr.replace(/\s+/g, '_');
    return replacedStr;
  }



function searchDrink ({cocktail}) {
    if (cocktail){
        const searchCocktail = convertString(cocktail)

        const { loading, data, error } =  useQuery(GET_SEARCH_COCKTAIL, {
            variables: {name: searchCocktail}
        });
        if(data){
            console.log(data);
            console.log(data.searchCocktail.image)
        } else {
            console.log("no data found")
        }
    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (!data) return ; //Nobody needs to know we were even here
        
        return (
            <div>
                <p>This is your Drink</p>
                <br/>
                <DrinkImage image = {data.searchCocktail.image} />
            </div>
        )
    } else {
        return
    }
}

export default searchDrink