import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation AddToFavorites($userId: ID!, $drink: String!, $ingredients: [String]!) {
    addToFavorites(userId: $userId, drink: $drink, ingredients: $ingredients) {
      name
      ingredients
    }
  }
`;

export const REMOVE_FAVORITE_DRINK = gql`
  mutation RemoveFavoriteDrink($userId: ID!, $drink: String!) {
    removeFavoriteDrink(userId: $userId, drink: $drink) {
      name
    }
  }
`;
