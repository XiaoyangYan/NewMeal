import {combineReducers} from "redux";
import errorReuducers from "./errorReuducers";

export default combineReducers({
        errors: errorReuducers
});