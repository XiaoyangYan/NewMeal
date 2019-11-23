import axios from "axios";
class AjaxServiceReviewForm {
        saveNewReview(review, email, label){
                return axios.post(`http://localhost:8080/review/create/${email}/${label}`, review);
        }

        getRecipeReview(label){
                return axios.get(`http://localhost:8080/review/get/${label}`);
        }

        getRecipeReviewByUser(email){
                return axios.get(`http://localhost:8080/review/getE/${email}`)
        }

        deleteRecipeReviewById(id) {
                return axios.delete(`http://localhost:8080/review/delete/${id}`)
        }
}
export default new AjaxServiceReviewForm();