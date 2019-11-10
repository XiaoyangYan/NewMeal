const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.user(bodyParser.json());
require("dotenv").config();

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
        console.log("DB connected");
})
const recipeRouter = require("./router/recipe");
app.use("/recipe", recipeRouter);
app.listen(process.env.PORT);
console.log("Hello World");

