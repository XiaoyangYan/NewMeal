export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDAR';
export const CAUTIONS = "CAUTIONS";
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

export function cautions({caution}){
        return {
                type:CAUTIONS,
                caution,
        }
}
