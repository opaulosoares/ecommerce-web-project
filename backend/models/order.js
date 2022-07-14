const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
    },
    amount: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    products: {
        type: [productSchema],
        required: true,
    }, // TO DO: Ver como replicar JSON Server nesse campo
    subtotal: {
        type: Number,
        required: true,
    },
    shipping: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;