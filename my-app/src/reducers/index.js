import {combineReducers} from "redux";
import users from "./users"
import menu from "./changeSide";
export default combineReducers({
        users,
        menu
});