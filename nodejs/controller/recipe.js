const Recipe = require("../models/recipe");
const status = require("http-status");

const recipeController = {
        create: async (req, res) => {
                try {
                        const newRecipe = new Recipe(req.body);
                        await newRecipe.save();
                        res.status(status.CREATED).send(newRecipe);
                } catch(e){
                        res.status(500).send(e.message);
                }
        }
}

module.exports = recipeController;
