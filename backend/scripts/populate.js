const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const Category = require("../models/category");
const Order = require("../models/order");
let data = require("./db.json");

// For debugging
async function howIsDatabase(schema) {
    const result = await schema.find({});
    console.log("Como está o banco de dados:");
    console.log(result);
}

async function populateDB() {
    mongoose.connect("mongodb://localhost:27017/fluffshop")
        .then(() => console.log('Populando a base de dados ...'))
        .catch(e => console.error(e));

    // Cleaning
    await User.deleteMany({}).exec();
    await Product.deleteMany({}).exec();
    await Category.deleteMany({}).exec();
    await Order.deleteMany({}).exec();

    let user_id; // ObjectID will be used for orders
    for (user of data["users"]) {
        user_id = (await new User(user).save())._id;
    }

    for (product of data["products"]) {
        await new Product(product).save();
    }

    for (category of data["categories"]) {
        await new Category(category).save();
    }

    for (order of data["orders"]) {
        order.user_id = user_id;
        await new Order(order).save();
    }

    mongoose.connection.close();
}

populateDB();