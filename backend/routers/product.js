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

// Delete one Product by ID
router.delete('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({error: INVALID_ID});
    
    const targetProduct = await Product.findByIdAndDelete(req.params.id).exec();
    if (targetProduct === null)
        return res.status(404).send({error: PRODUCT_NOT_FOUND});
    
    return res.status(200).send();
});

// Create Product
router.post('/', async(req, res) => {
    try {
        const newProduct = new Product({...req.body});
        await newProduct.save();
        return res.status(200).send(newProduct);
    } catch(e) {
        return res.status(400).send({error: e});
    }
});

// Edit Product by ID
router.patch('/:id', async(req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({error: INVALID_ID});
    
    try {
        let targetProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {...req.body},
            {returnDocument: "after"} // returns the updated Product
        ).exec();

        if (targetProduct === null)
            return res.status(404).send({error: PRODUCT_NOT_FOUND});
        
        return res.status(200).send(targetProduct);
    } catch (e) {
        return res.status(400).send({error: e});
    }
});

module.exports = router;