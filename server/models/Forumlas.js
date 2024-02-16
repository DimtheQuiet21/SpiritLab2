const mongoose = require ('mongoose');

const { Schema } = mongoose;

const formulaSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    
    alcohol: [{
        type:Schema.Types.ObjectId,
        ref: 'Alcohols',
        required:true
    }],

    liquid: [{
        type:Schema.Types.ObjectId,
        ref: 'Liquids',
        required:true
    }],

    icon:{
        type:Number,
        required: false,
    }
})

module.exports = formulaSchema;