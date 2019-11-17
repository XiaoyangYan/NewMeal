export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDAR';
export const ADD_CAUTIONS = "ADD_CAUTIONS";
export const REMOVE_CAUTIONS = "REMOVE_CAUTIONS";
export const RESET_ALL = "RESET_ALL";
export const SET_PERSONAL_RECIPE = "SET_PERSONAL_RECIPE";
export const SET_MY_RECIPE = "SET_MY_RECIPE";
export function addRecipe({day, recipe, meal}){
        return {
                type:ADD_RECIPE,
                day,
                recipe,
                meal,
        };
}

export function removeFromCalendar({day, meal}){
        return {
                type:REMOVE_FROM_CALENDER,
                meal,
                day,
        };
}

export function addCautions({caution}){
        return {
                type:ADD_CAUTIONS,
                caution,
        }
}

export function removeCautions({caution}){
        return {
                type:REMOVE_CAUTIONS,
                caution,
        }
}

export function resetAllT(){
        return {
                type: RESET_ALL
        }
}

export function setPersonalRecipe({recipeMessage}){
        return {
                type: SET_PERSONAL_RECIPE,
                recipeMessage
        }
}

export function setMyRecipe({recipeOne}){
        return {
                type:SET_MY_RECIPE,
                recipeOne
        }
}