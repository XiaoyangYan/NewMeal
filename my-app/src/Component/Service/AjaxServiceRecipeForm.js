import axios from "axios";

class AjaxServiceRecipeForm {
        saveNewFood(recipe,email){
                return axios.post(`http://localhost:8080/recipe/create/${email}`, recipe); 
        }
}
export default new AjaxServiceRecipeForm();