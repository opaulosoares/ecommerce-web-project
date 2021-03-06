const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");
const mongoose = require("mongoose");

const router = express.Router();

const INVALID_ID = "Invalid ObjectID";
const ORDER_NOT_FOUND = "Order(s) not found";
const PRODUCT_OUT_OF_STOCK = "Product is out of stock";

// Get all orders
// or Get a specific set of orders made by a user (user query: orders?user=user_id)
router.get("/", async (req, res) => {
    orders = await Order.find({});
    if (req.query.user !== undefined) {
        orders = orders.filter((el) => el.user_id == req.query.user);
    }

    if (orders === undefined) {
        return res.status(404).send({ error: ORDER_NOT_FOUND });
    } else {
        return res.status(200).send(orders);
    }
});

// Create new order
router.post("/", async (req, res) => {
    try {
        for (product of req.body.products) {
            // check if there is enough products on stock
            const targetProduct = await Product.findById(
                product.product_id
            ).exec();
            if (targetProduct.onStock - product.amount < 0) {
                return res.status(400).send({
                    error: PRODUCT_OUT_OF_STOCK,
                    product: product.name,
                    current_stock: targetProduct.onStock,
                });
            }
        }

        await Promise.all(
            req.body.products.map((product) =>
                Product.findByIdAndUpdate(
                    product.product_id,
                    { $inc: { onStock: -product.amount } } // Removing purchased amount from product stock
                )
            )
        );

        const order = new Order({ ...req.body });
        await order.save();

        return res.status(200).send(order);
    } catch (e) {
        return res.status(400).send({ error: e.message });
    }
});

// Get Order by ID
router.get("/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({ error: INVALID_ID });

    const targetOrder = await Order.findById(req.params.id).exec();
    if (targetOrder === null)
        return res.status(404).send({ error: ORDER_NOT_FOUND });

    return res.status(200).send(targetOrder);
});

// Delete a Order by ID
router.delete("/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({ error: INVALID_ID });

    const targetOrder = await Order.findByIdAndDelete(req.params.id).exec();
    if (targetOrder === null)
        return res.status(404).send({ error: ORDER_NOT_FOUND });

    return res.status(200).send();
});

module.exports = router;
