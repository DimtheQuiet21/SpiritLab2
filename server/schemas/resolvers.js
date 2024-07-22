const { Inventory, Formulas, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    inventory: async () => {
      return Inventory.find({});
    },

    formulas: async () => {
      return Formulas.find({});
    },

    formula: async (parent, { name }) => {
      return Formulas.findOne({ name: name });
    },

    formulasbytype: async (parent, { type }) => {
      return Formulas.find({ type: type });
    },

    formulasbyingredient: async (parent, { terms }) => {
      const regex = terms.map((term) => new RegExp(term, "i")); // this creates an array of regex expressions that are not case sensitive.
      return Formulas.find({
        $or: [
          { "alcohol.name": { $in: regex } },
          { "liquid.name": { $in: regex } },
          { "garnish.name": { $in: regex } },
        ],
      });
    },

    inventorybyterms: async (parent, { terms }) => {
      const regex = terms.map((term) => new RegExp(term, "i")); // this creates an array of regex expressions that are not case sensitive.
      return Inventory.find({
        $or: [
          { name: { $in: regex } }, //This will look to see if there is a partial match between the regex object and the name of a inventory object.
          { "tags.type": { $in: regex } },
        ],
      });
    },

    randomDrink: async () => {
      const count = await Formulas.countDocuments(); // get the count of all formulas
      const random = Math.floor(Math.random() * count); // get random number between 0 and count
      return Formulas.findOne().skip(random); // skip to the random number and return that formula
    },

    users: async (parent, { userName }) => {
      return User.find();
    },

    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },
    
    userFavorites: async (parent, { userId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User does not exist");
        }

        // Populate the ingredients for each favorite drink
        const favoriteDrinksWithIngredients = await Promise.all(
          user.favoriteDrinks.map(async (favoriteDrink) => {
            try {
              // Fetch the formula to get names, ingredients, and icon
              const formula = await Formulas.findOne({
                name: favoriteDrink.name,
              });
              if (!formula) {
                console.warn(`Formula ${favoriteDrink.name} not found`);
                return null;
              }
              // Return the formula data with the favorite drink's name and icon
              return {
                name: favoriteDrink.name,
                ingredients: [
                  ...formula.alcohol.map((ingredient) => ingredient.name),
                  ...formula.liquid.map((ingredient) => ingredient.name),
                  ...formula.garnish.map((ingredient) => ingredient.name),
                ],
                icon: formula.icon,
              };
            } catch (err) {
              console.error(
                `Error fetching formula for ${favoriteDrink.name}:`,
                err
              );
              return null;
            }
          })
        );

        // Filter out any drinks that were not found
        // Filter out duplicates based on name
        const uniqueFavoriteDrinks = favoriteDrinksWithIngredients.filter(
          (drink, index, self) =>
            index === self.findIndex((d) => d && drink && d.name === drink.name)
        );

        return uniqueFavoriteDrinks;
      } catch (err) {
        console.error(err);
        throw new Error(
          "Failed to get user favorites with ingredients: " + err.message
        );
      }
    },

    allFavoriteDrinks: async () => {
        try {
          // Fetch all formulas from the database
          const formulas = await Formulas.find({});
  
          // Map the fetched formulas to return only the required fields
          return formulas.map(formula => ({
            name: formula.name,
            favorites: formula.totalFavorites, // Assuming totalFavorites is calculated correctly
            ingredients: [
              ...formula.alcohol.map(ingredient => ingredient.name),
              ...formula.liquid.map(ingredient => ingredient.name),
              ...formula.garnish.map(ingredient => ingredient.name)
            ],
            icon: formula.icon
          }));
        } catch (error) {
          console.error("Error fetching all drinks:", error);
          throw new Error("Failed to fetch all drinks");
        }
    },
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      // Check if the username already exists
      const existingUser = await User.findOne({ userName });
      if (existingUser) {
        throw new Error("Username already exists");
      }

      // Check if the username is null or empty
      if (!userName) {
        throw new Error("Username cannot be null or empty");
      }

      // Create the new user
      const user = await User.create({ userName, email, password });
      console.log(user);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(password);

      if (!user) {
        console.log("User not found");
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);

      if (!correctPw) {
        console.log("Incorrect password");
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addToFavorites: async (parent, { userId, drink, ingredients }) => {
      try {
        // add the drink to the user's favorites list in the database
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User does not exist");
        }

        // Ensure favoriteDrinks is an array
        if (!Array.isArray(user.favoriteDrinks)) {
          user.favoriteDrinks = [];
        }
        // Check if the drink is already in the user's favorites list
        const alreadyExists = user.favoriteDrinks.some(
          (fav) => fav.name === drink
        );
        if (!alreadyExists) {
          // Ensure ingredients is always an array
          const validIngredients = ingredients || [];
          user.favoriteDrinks.push({
            name: drink,
            ingredients: validIngredients,
          });
          await user.save();
        }

        return { name: drink, ingredients: ingredients || [] };
      } catch (err) {
        console.error(err);
        throw new Error("Failed to add drink to favorites" + err.message);
      }
    },
    removeFavoriteDrink: async (parent, { userId, drink }) => {
      try {
        // remove the drink from the user's favorites list in the database
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User does not exist");
        }
        if (!user.favoriteDrinks) {
          user.favoriteDrinks = [];
        }

        // Remove the drink from the favorites list
        user.favoriteDrinks = user.favoriteDrinks.filter(
          (favDrink) => favDrink.name !== drink
        );

        // Save the updated user
        await user.save();

        return { name: drink };
      } catch (err) {
        console.error(err);
        throw new Error("Failed to remove drink from favorites" + err.message);
      }
    },
  },
};

module.exports = resolvers;
