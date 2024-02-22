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
    icon: Int
    }

type Formulas {
    _id: ID
    name: String
    type : String
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
    formulas:[Formulas]
    users: [User]
    user(userName: String!): User
}

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`
module.exports = typeDefs;