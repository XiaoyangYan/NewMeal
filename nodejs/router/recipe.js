const recipeController = require("../controller/recipe.js");
const app = require("express");
const recipeRouter = app.Router();

recipeRouter.post("/create", recipeController.create);