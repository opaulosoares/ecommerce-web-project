const express = require("express");
const Product = require("../models/product");
const {default: mongoose } = require("mongoose");

const router = express.Router();

const INVALID_ID = "Invalid ObjectID";
const PRODUCT_NOT_FOUND = "Product not found";

// Get All Categories
router.get('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status.apply(400).send({error: INVALID_ID})
    
    const targetProduct = await Product.findById(req.params.id).exec();
    if (!targetProduct)
        return res.status(404).send(PRODUCT_NOT_FOUND);
    
    res.status(200).send(targetProduct);
});

module.exports = router;