const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Get All Users
router.get('/', async(req, res) => {
    res.status(200).send(
        await User.find({})
    )
});

module.exports = router;