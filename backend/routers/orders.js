const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");
const mongoose = require("mongoose");

const router = express.Router();

const INVALID_ID = "Invalid ObjectID";
const PRODUCT_NOT_FOUND = "Order not found";

// Get all Orders (`?user=user_id` query can be supplied)
router.get('/', async(req, res) => {
    if (req.query.user === undefined || req.query.user === "") {
        return res.status(200).send(
            await Order.find({})
        );
    } else {
        try {
            return res.status(200).send(
                await Order.find({user_id: req.query.user})
            );
        } catch(e) {
            return res.status(404).send({error: e});
        }
    } 
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

// Get Order by ID
router.get('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({error: INVALID_ID});
    
    const targetOrder = await Order.findById(req.params.id).exec();
    if (targetOrder === null)
        return res.status(404).send({error: PRODUCT_NOT_FOUND});
    
    return res.status(200).send(targetOrder);
});

module.exports = router;