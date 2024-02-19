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

  type Query {
    inventory: [Inventory]
  }

`
module.exports = typeDefs;