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

//To make this query run, the body of the request must have req.body = {"name":"THE ACTUAL FORMULA NAME"}
export const GET_FORMULA_BY_NAME = gql`
  query Query($name: String!) {
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

// To make this query run, the body of the quest must have req.body = {"name" : [ARRAY OF TERMS IN SEARCH BAR], "liquid": [ARRAY OF TERMS IN SEARCH BAR], "garnish": [ARRAY OF TERMS IN SEARCH BAR]}
export const SEARCH_FORMULA_BY_INGREDIENT = gql`
  query Query($alcohol: [String]!, $liquid: [String]!, $garnish: [String]!) {
    formulasbyingredient(alcohol: $alcohol, liquid: $liquid, garnish: $garnish) {
      name
    }
  }
`;
