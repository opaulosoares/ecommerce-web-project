const express = require("express");
const Product = require("../models/product");
const {default: mongoose } = require("mongoose");

const router = express.Router();

// Get All Products
router.get('/', async(req, res) => {
    res.status(200).send(
        await Product.find({})
    )
});

module.exports = router;