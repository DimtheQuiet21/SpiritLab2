const mongoose = require ('mongoose');

const { Schema } = mongoose;

const liquidSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    icon:{
        type:Number,
        required: false,
    }
})

module.exports = liquidSchema;