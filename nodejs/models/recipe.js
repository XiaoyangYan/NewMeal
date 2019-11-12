const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
        userEmail:{type:String, trim: true},
        userName:{type: String, trim: true},
        title:{type:String},
        cautions:[
                {type:String}],
        recipeDescription:{
                type:String
        }
})

module.exports = mongoose.model("recipes", recipeSchema);