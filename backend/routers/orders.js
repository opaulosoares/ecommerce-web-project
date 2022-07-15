const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");

const router = express.Router();

// Get all Orders
router.get('/', async(req, res) => {
    res.status(200).send(
        await Order.find({})
    )
});

// Create new order
router.post('/', async (req, res) => {
    try {
        const order = new Order({...req.body});
        await order.save();
        
        await Promise.all(req.body.products.map(
            product => Product.findByIdAndUpdate(
                product.product_id,
                {$inc: {onStock: - product.amount}} // Removing purchased amount from product stock
            )
        ));

        return res.status(200).send(order);
    } catch (e) {
        return res.status(400).send({error: e});
    }
});

module.exports = router;