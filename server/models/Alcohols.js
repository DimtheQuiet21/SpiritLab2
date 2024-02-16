const mongoose = require ('mongoose');

const { Schema } = mongoose;

const alcoholSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    alcoholMin:{
        type: Number,
        required: true,
    },
    alcoholMax:{
        type: Number,
        required: true,
    },
    icon:{
        type:Number,
        required: false,
    }
})

module.exports = alcoholSchema;