const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Product",
        required: true
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
    price: {
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
        ref: "User",
        required: true
    },
    products: {
        type: [productSchema],
        required: true,
    },
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