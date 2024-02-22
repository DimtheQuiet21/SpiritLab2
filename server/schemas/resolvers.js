const { Inventory, Formulas, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {

    inventory: async () => {
      return Inventory.find();
    },

    formulas: async () => {
      return Formulas.find();
    },

    formula: async (parent, { name }) => {
      return Formulas.findOne({name: name})
    },

    formulasbytype: async (parent, { type }) => {
      return Formulas.find({type: type})
    },

    formulasbyingredient: async (parent, {alcohol, liquid, garnish}) => {
      return Formulas.find({
        $or: [
          {"alcohol.name":alcohol},
          {"liquid.name":liquid},
          {"garnish.name" : garnish}
        ]
      })
    },

    inventorybyterms: async (parent, {terms}) => {
      const regex = terms.map(term => new RegExp(term, 'i')); // this creates an array of regex expressions that a not case sensitive. 
      return Inventory.find({
        $or: [
          {"name": {$in: regex}}, //This will look to see if there is a partial match between the regex object and the name of a inventory object.
          {"tags.type":{$in: regex}}
        ]
      })
    },

    users: async (parent, { userName }) => {
      return User.find();
    },

    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },

  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      // Check if the username already exists
      const existingUser = await User.findOne({ userName });
      if (existingUser) {
        throw new Error('Username already exists');
      }
  
      // Check if the username is null or empty
      if (!userName) {
        throw new Error('Username cannot be null or empty');
      }
  
      // Create the new user
      const user = await User.create({ userName, email, password });
      console.log(user);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
