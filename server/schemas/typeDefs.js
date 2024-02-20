const typeDefs = `
type Inventory {
    _id: ID
    name: String
    url : String
    type: String
    handle: String
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
    icon: Int 
}

type Ingredient {
    name: String
    amount: String
}

type Query {
    inventory: [Inventory]
    formulas:[Formulas]
}

`
module.exports = typeDefs;