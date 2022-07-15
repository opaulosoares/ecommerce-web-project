const express = require("express");
const Product = require("../models/product");
const mongoose = require("mongoose");

const router = express.Router();

const INVALID_ID = "Invalid ObjectID";
const PRODUCT_NOT_FOUND = "Product not found";

// Get Product by ID
router.get('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({error: INVALID_ID});
    
    const targetProduct = await Product.findById(req.params.id).exec();
    if (targetProduct === null)
        return res.status(404).send({error: PRODUCT_NOT_FOUND});
    
    return res.status(200).send(targetProduct);
});

// Deletes one Product by ID
router.delete('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({error: INVALID_ID});
    
    const targetProduct = await Product.findByIdAndDelete(req.params.id).exec();
    if (targetProduct === null)
        return res.status(404).send({error: PRODUCT_NOT_FOUND});
    
    return res.status(200).send();
});

module.exports = router;