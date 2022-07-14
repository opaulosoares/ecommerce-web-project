const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    petSpecie: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    petAge: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    onStock: {
        type: Number,
        required: true,
    }
})

const Product = mongoose.model("Product", schema);
module.exports = Product;