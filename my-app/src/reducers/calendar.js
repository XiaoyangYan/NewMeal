import {ADD_RECIPE, REMOVE_FROM_CALENDER, ADD_CAUTIONS, 
        REMOVE_CAUTIONS, RESET_ALL, SET_PERSONAL_RECIPE, SET_MY_RECIPE} from "../actions"

const INITIAL_MENU = {
        breakfast: null,
        lunch: null,
        dinner:null,
}

const initialCalendarState = {
        monday: {...INITIAL_MENU},
        tuesday: {...INITIAL_MENU},
        wednesday: {...INITIAL_MENU},
        thursday: {...INITIAL_MENU},
        friday: {...INITIAL_MENU},
};

const calendarReducer = (state =initialCalendarState, action) => {
        const {day, recipe, meal} = action;
        switch(action.type){
                case ADD_RECIPE:
                        return {
                                ...state,
                                [day]:{
                                        ...state[day],
                                        [meal]:recipe.label,
                                }
                        };
                        case REMOVE_FROM_CALENDER:
                                return {
                                        ...state,
                                        [day]:{
                                                ...state[day],
                                                [meal]:null,
                                        }
                                }
                        case RESET_ALL:
                                state = initialCalendarState;
                                return state;
                        default:
                                return state;
        }
}
export const  cautions = (state =[], action) =>{
        const {caution} = action;
        switch(action.type){
                case ADD_CAUTIONS:
                       return [...state, caution];
                case REMOVE_CAUTIONS:
                        var newState = state;
                        return newState.filter(function(res){
                                return res.trim() != caution.trim();
                        })
                case RESET_ALL:
                        state = [];
                        return state;
                default:
                        return state;
        }
}

export const selfRecipe = (state = [], action) => {
        const {recipeMessage} = action;
        switch(action.type){
                case SET_PERSONAL_RECIPE:
                        state = recipeMessage;
                        return state;
                default:
                        return state;
        }
}

export const myRecipe = (state = {}, action) => {
        const {recipeOne} = action;
        switch(action.type){
                case SET_MY_RECIPE:
                        state = {...state, recipeOne};
                        return {...state, recipeOne};
                default:
                        return state;
        }
}
export default calendarReducer;