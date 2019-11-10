const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
        userEmail:{type:String},
        userName:{type: String},
        title:{type:String},
        cautions:[
                {type:String}],
        recipeDescription:{
                type:String
        }
})

module.exports = mongoose.model("recipes", recipeSchema);