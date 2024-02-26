const { Inventory, Formulas, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const fetchCocktail = async (url) => {
  // For resusability, this makes a fetch request to the cocktail API and returns the data
  const response = await fetch(url);
  const data = await response.json();
  const drink = data.drinks[0]; // Will get us the first drink from the array
  if (!drink) {
    throw new Error("No drink found");
  }
  return {
    name: drink.strDrink,
    ingredients: [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
    ].filter(Boolean), // This will remove any null or undefined values from array (in case the drink has less than 6 ingredients)
    image: drink.strDrinkThumb,
  };
};

fetchPreciseCocktail = async (url) => {
  // For resusability, this makes a fetch request to the cocktail API and returns the data
  const response = await fetch(url);
  const data = await response.json();
    // Check if drinks array exists and is not empty
    if (!data.drinks || data.drinks.length === 0) {
      throw new Error("No drink found");
    }
  
    const drink = data.drinks[0]; // Get the first drink object
    // const ingredients = [];
    // for (let i = 1; i <= 15; i++) {
    //   const ingredient = drink[`strIngredient${i}`];
    //   if (ingredient) {
    //     ingredients.push(ingredient);
    //   } else {
    //     break; // Stop looping if no more ingredients
    //   }
    // }
    console.log(drink.strDrink);
    return {
      name: drink.strDrink,
      ingredients:[],
      image: drink.strDrinkThumb,
    };
  };



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

    users: async (parent, { userName }) => {
      return User.find();
    },

    user: async (parent, { userName }) => {
      return User.findOne({ userName });
    },

    randomCocktail: async () => {
      return fetchCocktail(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
    },
    drinkOfDay: async () => {
      return fetchPreciseCocktail(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
    },
    searchCocktail: async (parent, { name }) => {
      const encodedName = encodeURIComponent(name)
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedName}`
      return fetchPreciseCocktail (url)
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
