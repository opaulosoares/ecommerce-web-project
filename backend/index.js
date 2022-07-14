const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const productsRouter = require("./routers/products");
const productRouter = require("./routers/product");
const usersRouter = require("./routers/users");
const categoriesRouter = require("./routers/categories");

// Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/fluffshop")
    .then(() => console.log('Conectou ao mongodb'))
    .catch(e => console.error(e));

// Instantiating App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Registering Routers
app.use("/products", productsRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);


// Start app
const port = 3000;
const server = app.listen(
    port, 
    () => console.log(`Listening on http://localhost:${port}`)
);
