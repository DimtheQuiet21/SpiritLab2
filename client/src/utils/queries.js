import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_ALL_FORMULAS = gql`
  query getFormulaNames {
    formulas {
      name
      icon
      glass
      alcohol {
        name
        amount
        technique
      }
      liquid {
        name
        amount
        technique
      }
      garnish {
        name
        amount
        technique
      }
      assembly
      favoritesCount
    }
  }
`;

export const GET_TOP_FAVORITE_DRINKS = gql`
  query GetTopFavoriteDrinks {
    formulas {
      name
      icon
      favoritesCount
      alcohol {
        name
        amount
        technique
      }
      liquid {
        name
        amount
        technique
      }
      garnish {
        name
        amount
        technique
      }
      assembly
    }
  }
`;

//To make this query run, the body of the request must have req.body = {"name":"THE ACTUAL FORMULA NAME"}
export const GET_FORMULA_BY_NAME = gql`
  query getFormulaByName($name: String!) {
    formula(name: $name) {
      name
      type
      icon
      alcohol {
        name
        amount
        technique
      }
      liquid {
        name
        amount
        technique
      }
      garnish {
        name
        amount
        technique
      }
      assembly
      _id
    }
  }
`;

export const GET_INVENTORY = gql`
query getInventoryData($terms: [String]!) {
  inventorybyterms(terms: $terms) {
    name
    url
    type
    proof
    image
    handle
    price
  }
}
`

export const RANDOM_DRINK_QUERY = gql`
  query RandomDrink {
    randomDrink {
      _id
      name
      type
      icon
      alcohol {
        name
        amount
        technique
      }
      liquid {
        name
        amount
        technique
      }
      garnish {
        name
        amount
        technique
      }
      assembly
    }
  }
`;

export const GET_ALL_GLASS_TYPES = gql`
  query GetAllGlassTypes {
    allGlassTypes
  }
`;

export const GET_ALL_DRINKS = gql`
  query GetAllDrinks {
    allDrinks {
      name
      ingredients
      image
    }
  }
`;

export const GET_SEARCH_COCKTAIL = gql`
query GetSearchCocktail($name: String!) {
  searchCocktail(name: $name) {
    name
    image
  }
}
`
export const GET_USER_FAVORITE_DRINKS = gql`
query GetUserFavoriteDrinks($userId: ID!) {
  userFavorites(userId: $userId) {
    name
    ingredients
    icon
  }
}
`;

export const GET_ALL_FAVORITE_DRINKS = gql`
  query GetAllFavoriteDrinks{
    allFavoriteDrinks {
      name
      favorites
      ingredients
    }
  }
`;

export const GET_ALL_INGREDIENTS = gql`
  query Formulas {
    formulas {
      alcohol {
        name
      }
      liquid {
        name
      }
      garnish {
        name
      }
    }
  }
`;

// To make this query run, the body of the quest must have req.body = {"name" : [ARRAY OF TERMS IN SEARCH BAR], "liquid": [ARRAY OF TERMS IN SEARCH BAR], "garnish": [ARRAY OF TERMS IN SEARCH BAR]}
// export const GET_FORMULA_INGREDIENTS = gql`
//   query getFormulasByIngredients($terms: [String]!) {
//     formulas(terms: $terms) {
//       name
      
//     }
//   }
// `;

