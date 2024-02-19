const {Inventory} = require ('../models');

const resolvers = {
    Query: {
        inventory: async () => {
            return Inventory.find()
        }
    }
}

module.exports = resolvers;