import {ADD_RECIPE, REMOVE_FROM_CALENDER, ADD_CAUTIONS, REMOVE_CAUTIONS} from "../actions"

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
                        default:
                                return state;
        }
}
export var cautions = (state =[], action) =>{
        const {caution} = action;
        console.log(caution);
        switch(action.type){
                case ADD_CAUTIONS:
                       console.log( [...state, action.caution]);
                       return [...state, caution];
                case REMOVE_CAUTIONS:
                        return state.filter(res => res != caution)
                default:
                        return state;
        }
}
export default calendarReducer;