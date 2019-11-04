import axios from "axios";

class AjaxServiceRecipeForm {
        saveNewFood(recipe,email){
                return axios.post(`http://localhost:8080/recipe/create/${email}`, recipe); 
        }

        findFavoriteRecipe(email){
                return axios.get(`http://localhost:8080/recipe/getF/${email}`);
        }

        getDataFromPython(data){
                return axios.post(`http://localhost:7000/recipe/user`, data);
        }

        getSpecialRecipe(label){
                return axios.get(`http://localhost:8080/recipe/getS/${label}`);
        }
}
export default new AjaxServiceRecipeForm();