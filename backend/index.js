const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


mongoose.connect("mongodb://localhost:27017/fluffshop")
    .then(() => console.log('Conectou ao mongodb'))
    .catch(e => console.error(e));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Routes


// Start app
const port = 3001;
const server = app.listen(
    port, 
    () => console.log(`Listening on localhost:${port}`)
);
