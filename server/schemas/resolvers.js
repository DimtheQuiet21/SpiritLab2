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
      if (count === 0) {
        throw new Error("No formulas available");
      }
      const random = Math.floor(Math.random() * count); // get random number between 0 and count
      return Formulas.findOne().skip(random); // skip to the random number and return that formula
    },
    
    allGlassTypes: async () => {
      const glassTypes = await Formulas.distinct('glass');
      return glassTypes.filter(glass => glass !== null); // Filter out null values if any
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
              const formula = await Formulas.findOne({ name: favoriteDrink.name });
              if (!formula) {
                console.warn(`Formula ${favoriteDrink.name} not found`);
                return null;
              }
              
              // Return the formula data
              return {
                name: favoriteDrink.name,
                icon: formula.icon,
                ingredients: {
                  alcohol: formula.alcohol,
                  liquid: formula.liquid,
                  garnish: formula.garnish,
                },
              };
            } catch (err) {
              console.error(`Error fetching formula for ${favoriteDrink.name}:`, err);
              return null;
            }
          })
        );
    
        return favoriteDrinksWithIngredients.filter(Boolean);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to get user favorites with ingredients: " + err.message);
      }
    }
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
        const alreadyExists = user.favoriteDrinks.some(fav => fav.name === drink);
        if (!alreadyExists) {
          const formula = await Formulas.findOne({ name: drink });
          if (!formula) {
            throw new Error("Drink not found");
          }
    
          user.favoriteDrinks.push({
            name: drink,
            icon: formula.icon,
            ingredients: {
              alcohol: formula.alcohol,
              liquid: formula.liquid,
              garnish: formula.garnish,
            },
          });
          await user.save();
          // Update the favoritesCount for the drink
          await Formulas.findOneAndUpdate(
            { name: drink },
            { $inc: { favoritesCount: 1 } }
          );
        }
    
        return {
          name: drink,
          icon: user.favoriteDrinks.find(fav => fav.name === drink).icon,
          ingredients,
        };
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
        // Get the current favorites count
        const formula = await Formulas.findOne({ name: drink });
        if (formula && formula.favoritesCount > 0) {
            // we making sure the count can't go below 0
            await Formulas.findOneAndUpdate(
                { name: drink },
                { $inc: { favoritesCount: -1 } },
                { new: true }
            );
        }

        return { name: drink };
      } catch (err) {
        console.error(err);
        throw new Error("Failed to remove drink from favorites" + err.message);
      }
    },
  },
};

module.exports = resolvers;
