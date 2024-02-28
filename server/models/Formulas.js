const mongoose = require ('mongoose');

const { model, Schema } = mongoose;

const formulaSchema = new Schema ({
    name: {
        type: String,
        required: false,
        trim: true,
    },

    type: {
        type:String,
        required:false,
        trim: true,
    },

    icon: {
        type: String, // 
        required: false,
        trim: true,
    },

    alcohol: [
        {
            name:{
                type: String,
                required: true,
                trim: true
            },
            amount: {
                type: String,
                required: false,
                trim: true
            },
            technique :{
                type: String,
                required: false,
                trim: true
            }
        }
    ],

    liquid: [
        {
            name:{
                type: String,
                required: false,
                trim: true
            },
            amount: {
                type: String,
                required: false,
                trim: true
            },
            technique :{
                type: String,
                required: false,
                trim: true
            }
        }
    ],

    garnish: [
        {
            name:{
                type: String,
                required: false,
                trim: true
            },
            amount: {
                type: String,
                required: false,
                trim: true
            },
            technique :{
                type: String,
                required: false,
                trim: true
            }
        }
    ],

    assembly: {
        type: String,
        required: false,
        trim: true
    },
})
formulaSchema.virtual('totalFavorites').get(function() {
    let total = 0;
    // Loop through all alcohol, liquid, and garnish arrays and sum up the favorites
    this.alcohol.forEach(ingredient => {
      if (ingredient.favorites) {
        total += ingredient.favorites;
      }
    });
    this.liquid.forEach(ingredient => {
      if (ingredient.favorites) {
        total += ingredient.favorites;
      }
    });
    this.garnish.forEach(ingredient => {
      if (ingredient.favorites) {
        total += ingredient.favorites;
      }
    });
    return total;
  });

const Formulas = model('Formulas', formulaSchema); 

module.exports = Formulas;