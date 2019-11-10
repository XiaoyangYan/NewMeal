const recipeController = require("../controller/recipe.js");
const app = require("express");
const recipeRouter = app.Router();

recipeRouter.get("/findAll", recipeController.findAll);

recipeRouter.post("/create", recipeController.create);

module.exports = recipeRouter;