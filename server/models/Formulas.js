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
        }
    ],

    icon:{
        type:Number,
        required: false,
    }
})

const Formulas = model('Formulas', formulaSchema); 

module.exports = Formulas;