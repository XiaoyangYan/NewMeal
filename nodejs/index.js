const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();
const recipeRouter = require("./router/recipe");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
        console.log("DB connected");
})
app.use("/recipe", recipeRouter);
app.listen(process.env.PORT);
console.log("Hello World");

