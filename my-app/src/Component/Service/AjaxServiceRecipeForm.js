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

        deleteSaveRecipe(email, label){
                return axios.delete(`http://localhost:8080/recipe/delete/${email}/${label}`);
        }

        createSelfRecipe(createRecipe){
                return axios.post(`http://localhost:8011/recipe/create`, createRecipe);
        }

        getAllSelfRecipe(){
                return axios.get(`http://localhost:8011/recipe/findAll`);
        }
}
export default new AjaxServiceRecipeForm();