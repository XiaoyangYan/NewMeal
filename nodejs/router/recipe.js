const recipeController = require("../controller/recipe.js");
const app = require("express");
const recipeRouter = app.Router();

recipeRouter.get("/findAll", recipeController.findAll);
recipeRouter.post("/create", recipeController.create);
recipeRouter.put("/editOne", recipeController.editOne);

recipeRouter.delete("/delete:deleteId", recipeController.delete);
module.exports = recipeRouter;