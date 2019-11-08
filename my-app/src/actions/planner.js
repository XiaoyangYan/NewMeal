export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDAR';
export const ADD_CAUTIONS = "ADD_CAUTIONS";
export const REMOVE_CAUTIONS = "REMOVE_CAUTIONS";

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
