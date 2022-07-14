const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    species: {
        type: [String],
        required: true,
    },
    subcategories: {
        type: [String],
        required: true,
    }
})

const Product = mongoose.model("Product", schema);
module.exports = Product;