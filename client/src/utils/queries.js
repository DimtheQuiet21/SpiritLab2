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

//To make this query run, the body of the request must have req.body = {"name":"THE ACTUAL FORMULA NAME"}
export const GET_FORMULA_BY_NAME = gql`
  query getFormulaByName($name: String!) {
    formula(name: $name) {
      name
      type
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

export const RANDOM_COCKTAIL_QUERY = gql`
  query RandomCocktail {
    randomCocktail {
      name
      ingredients
      image
    }
  }
`;
export const DRINK_OF_DAY_QUERY = gql`
  query GetDayCocktail {
    drinkOfDay {
      name
      ingredients
      image
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

