const Recipe = require("../models/recipe");
const status = require("http-status");

const recipeController = {
        create: async (req, res) => {
                try {
                        const newRecipe = new Recipe(req.body);
                        Recipe.create(newRecipe, function(err, data){
                                if (err) throw err;
                        })
                        const findAll = Recipe.find({}, function(err, data){
                                if (err) next(err);
                                res.status(status.CREATED).send(data);
                        });
                } catch(e){
                        res.status(500).send(e.message);
                }
        },
        findAll: async (req, res) => {
                const findAll = Recipe.find({}, function(err, data){
                        if (err) next(err);
                        res.status(status.CREATED).send(data);
                })
        },
        delete: async (req, res) => {
                const id = req.params.deleteId;
                const deleted = await Recipe.remove({_id: id}, function(err,data){
                        if (err) console.log(err);
                        const recipe =  Recipe.find({}, function(err, data){
                                if (err) console.log(err);
                                res.send(data);
                        })
                })

                
        },
        editOne: async (req, res) => {
                const newRecipe = new Recipe(req.body);
                const {email} =  req.body;
                await Recipe.findOne({_id: req.body._id}, function(err, data){
                        if (err) next(err);
                        id = data._id;
                        const recipe = Recipe.findByIdAndUpdate({_id:id}, req.body, function(err,data){
                                if (err) next(err);
                        }).exec();
                })
                const findAll = Recipe.findOne({_id: req.body._id}, function(err, data){
                        if (err) next(err);
                        res.status(status.CREATED).send(data);
                })
        },
}

module.exports = recipeController;
