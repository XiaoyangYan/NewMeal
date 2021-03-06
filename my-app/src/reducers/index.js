import {combineReducers} from "redux";
import users from "./users"
import menu from "./changeSide";
import food from "./planner";
import calendar,  {cautions, selfRecipe,myRecipe} from "./calendar";

export default combineReducers({
        users,
        menu,
        food,
        calendar,
        cautions,
        selfRecipe,
        myRecipe
});