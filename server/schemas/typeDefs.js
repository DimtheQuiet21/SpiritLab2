const typeDefs = `
type Inventory {
    _id: ID
    name: String
    url : String
    type: String
    handle: String
    tags: [String]
    proof: String
    image: String
    price: String
    icon: Int
    }

type Formulas {
    _id: ID
    name: String
    type : String
    glass: String
    icon: String
    alcohol: [Ingredient]
    liquid: [Ingredient]
    garnish: [Ingredient]
    assembly: String
    favoritesCount: Int
}

type Ingredient {
    name: String
    amount: String
    technique: String
}

type DayDrink {
    name: String
    ingredients: [String]
    icon: String
}

type Cocktail {
    name: String
    ingredients: [String]
    image: String
}

type DrinkFavorite {
    name: String!
    icon: String
    ingredients: Ingredients
    assembly: String
  }
  
  type Ingredients {
    alcohol: [Ingredient]
    liquid: [Ingredient]
    garnish: [Ingredient]
  }
  
  input IngredientsInput {
    alcohol: [IngredientInput]
    liquid: [IngredientInput]
    garnish: [IngredientInput]
  }
  
  input IngredientInput {
    name: String
    amount: String
    technique: String
  }

type Drink {
    name: String
    ingredients: [String]
    icon: String
  }

type User {
    _id: ID
    userName: String
    email: String
    password: String
    favoriteDrinks: [DrinkFavorite]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    inventory: [Inventory]
    inventorybyterms(terms:[String]!):[Inventory]
    formulas:[Formulas]
    formulasbytype(type: String!):[Formulas]
    formulasbyingredient(terms:[String]!):[Formulas]
    formula(name: String!): Formulas
    randomDrink: Formulas
    allGlassTypes: [String]
    searchCocktail(name: String!): Cocktail
    drinkOfDay: DayDrink
    users: [User]
    user(userName: String!): User
    userFavorites(userId: ID!): [DrinkFavorite]
    allDrinks: [Drink]

}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToFavorites(userId: ID!, drink: String!, ingredients: IngredientsInput!): DrinkFavorite
    removeFavoriteDrink(userId: ID!, drink: String!): DrinkFavorite
}
`
module.exports = typeDefs;