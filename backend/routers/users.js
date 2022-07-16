const express = require("express");
const User = require("../models/user");
const mongoose = require("mongoose");

const router = express.Router();

const INVALID_ID = "Invalid UserID";
const USER_NOT_FOUND = "User not found";

// Get all users
// or Get a specific user by email (user query: users?email=user_email)
router.get('/', async(req, res) => {
    users = await User.find({})

    if (req.query.email !== undefined) {
        users = users.filter(el => el.email === req.query.email)[0]
    }

    if (users.length === 0) {
        return res.status(404).send({error: USER_NOT_FOUND});
    } else {
        return res.status(200).send(users);
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({ error: INVALID_ID });

    const targetUser = await User.findById(req.params.id).exec();
    if (targetUser === null)
        return res.status(404).send({ error: USER_NOT_FOUND });

    return res.status(200).send(targetUser);
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({ error: INVALID_ID });

    const targetUser = await User.findByIdAndDelete(req.params.id).exec();
    if (targetUser === null)
        return res.status(404).send({ error: USER_NOT_FOUND });

    return res.status(200).send();
});

// Create a new user
router.post('/', async(req, res) => {
    try {
        const newUser = new User({ ...req.body });
        await newUser.save();
        return res.status(200).send(newUser);
    }
    catch (e) {
        return res.status(400).send({ error: e });
    }
});  

// Edit an existent user by ID
router.patch('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
        return res.status(400).send({ error: INVALID_ID });

    let targetUser = await User.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { returnDocument: "after" }
    ).exec();

    if (targetUser === null)
        return res.status(404).send({ error: USER_NOT_FOUND });

    return res.status(200).send(targetUser);
});

module.exports = router;