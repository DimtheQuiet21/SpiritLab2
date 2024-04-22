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
const fetchRandomCocktail = async () => {
  try {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const data = await response.json();
    if (!data.drinks || data.drinks.length === 0) {
      throw new Error("No random cocktail found");
    }
    const randomCocktail = data.drinks[0];
    const ingredients = [];
    // Collect up to 15 ingredients
    for (let i = 1; i <= 15; i++) {
      const ingredient = randomCocktail[`strIngredient${i}`];
      if (!ingredient) break; // Stop if there are no more ingredients
      ingredients.push(ingredient);
    }
    return {
      name: randomCocktail.strDrink,
      ingredients: ingredients.filter(Boolean) // Filter out any empty strings
    };
  } catch (error) {
    console.error("Error fetching random cocktail:", error);
    throw new Error("Failed to fetch random cocktail");
  }
};

fetchPreciseCocktail = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const drink = data.drinks[0];
    if (!data.drinks || data.drinks.length === 0) {
      throw new Error("No drink found");
    }

    
    const ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
    ].filter(Boolean);

    return {
      name: drink.strDrink,
      ingredients: ingredients,
      image: drink.strDrinkThumb,
    };
  } catch (error) {
    console.error("Error fetching precise cocktail:", error);
    throw new Error("Failed to fetch precise cocktail");
  }
};

const resolvers = {
  Query: {
    inventory: async () => {
      return Inventory.find({});
    },
    allDrinks: async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        return data.drinks.map(drink => ({
          name: drink.strDrink,
          ingredients: [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6 ].filter(Boolean),
          image: drink.strDrinkThumb
        }));
      } catch (error) {
        throw new Error('Failed to fetch all drinks');
      }
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
      const encodedName = encodeURIComponent(name);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedName}`;
      return fetchPreciseCocktail(url);
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
            // Fetch a random cocktail to get names and ingredients
            const randomCocktail = await fetchRandomCocktail();
            // Return the random cocktail data with the favorite drink's name
            return {
              name: favoriteDrink.name,
              ingredients: randomCocktail.ingredients
            };
          })
        );

        return favoriteDrinksWithIngredients;
      } catch (err) {
        console.error(err);
        throw new Error("Failed to get user favorites with ingredients: " + err.message);
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
            ]
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
    addToFavorites: async (parent, { userId, drink }) => {
      try {
        // add the drink to the user's favorites list in the database
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User does not exist");
        }
        if (!user.favoriteDrinks) {
          user.favoriteDrinks = [];
        }
        // Check if the drink is already in the user's favorites list
        if (!user.favoriteDrinks.includes(drink)) {
          // Add the drink to the favorites list
          user.favoriteDrinks.push({ name: drink });

          // Save the updated user
          await user.save();
        }

        return { name: drink };
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
