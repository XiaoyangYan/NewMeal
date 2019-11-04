export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDAR';

export function addRecipe({day, recipe, meal}){
        console.log(recipe);
        console.log(meal);
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