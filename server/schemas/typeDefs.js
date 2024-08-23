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

type Comment {
  _id: ID
  userName: String
  post: String
  timestamp: String
  isLiked: Boolean
  likeCount: Int
  likedBy: [ID] 
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
    likeCount: Int
    dislikeCount: Int
    likedBy: [ID]
    dislikes: [ID]
    comments: [Comment]
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
    favoriteDrinks: [Formulas]
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
    userFavorites(userId: ID!): [Formulas]
    allDrinks: [Drink]
    getLikes(formulaId: ID!): Formulas
    getDislikes(formulaId: ID!): Formulas
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToFavorites(userId: ID!, drink: String!): Formulas
    removeFavoriteDrink(userId: ID!, drink: String!): Formulas
    addCommentToFormula(userId: ID!, formulaId: ID!, post: String!): Formulas
    removeCommentFromFormula(userId: ID!, commentId: ID!): Formulas
    editCommentOnFormula(userId: ID!, commentId: ID!, newPost: String!): Formulas
    likeDrink(userId: ID!, formulaId: ID!): Formulas
    dislikeDrink(userId: ID!, formulaId: ID!): Formulas
    likeComment(userId: ID!, commentId: ID!): Comment
}
`
module.exports = typeDefs;