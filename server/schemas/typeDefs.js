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
    icon: String
    alcohol: [Ingredient]
    liquid: [Ingredient]
    garnish: [Ingredient]
    assembly: String
}

type Ingredient {
    name: String
    amount: String
    technique: String
}

type DayDrink {
    name: String
    ingredients: [String]
    image: String
}

type Cocktail {
    name: String
    ingredients: [String]
    image: String
}

type DrinkFavorite {
    name: String!
    icon: String
    ingredients: [String]!
}

type PopularDrink {
    name: String!
    favorites: Int!
    ingredients: [String]!
}

type Drink {
    name: String
    ingredients: [String]
    image: String
  }

type User {
    _id: ID
    userName: String
    email: String
    password: String
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
    randomCocktail: Cocktail
    searchCocktail(name: String!): Cocktail
    drinkOfDay: DayDrink
    users: [User]
    user(userName: String!): User
    userFavorites(userId: ID!): [DrinkFavorite]
    allFavoriteDrinks: [PopularDrink]!
    allDrinks: [Drink]

}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToFavorites(userId: ID!, drink: String!, ingredients: [String]!): DrinkFavorite
    removeFavoriteDrink(userId: ID!, drink: String!): DrinkFavorite
}
`
module.exports = typeDefs;