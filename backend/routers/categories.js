const express = require("express");
const Category = require("../models/category");

const router = express.Router();

// Get All Categories
router.get('/', async(req, res) => {
    res.status(200).send(
        await Category.find({})
    )
});

module.exports = router;