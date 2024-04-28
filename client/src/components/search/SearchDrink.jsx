// import {GET_SEARCH_COCKTAIL} from "../../utils/queries";
// import { useQuery } from '@apollo/client';
// import { Box, Typography} from '@mui/material';
// import DrinkImage from "../randoDrink/DrinkImage";

// function convertString(str) {
//     // Convert the string to lowercase
//     if (typeof str === "string") {
//         const lowerCaseStr = str.toLowerCase();
//         // Replace all spaces with underscores
//         const replacedStr = lowerCaseStr.replace(/\s+/g, '_');
//         return replacedStr;
//     }
//   }

// function SearchDrink ({cocktail}) {
//     if (cocktail){
//         const searchCocktail = convertString(cocktail)

//         const { loading, data, error } =  useQuery(GET_SEARCH_COCKTAIL, {
//             variables: {name: searchCocktail}
//         });
//         if(data){
//             console.log(data);
//             console.log(data.searchCocktail.image)
//         } else {
//             console.log("no data found")
//         }
    
//         if (loading) return <p>Loading...</p>;
//         if (error) return; //<p>Error: {error.message}</p>; Nobody needs to know
//         if (!data) return; //Nobody needs to know we were even here
        
//         return (
//             <div>
//                 <p>Prepare the Laboratory</p>
//                 <br/>
//                 <DrinkImage image = {data.searchCocktail.image} sx = {{width: '100% !important'}} />
//             </div>
//         )
//     } else {
//         return
//     }
// }

// export default SearchDrink