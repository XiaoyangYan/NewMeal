import axios from "axios";
class AjaxServiceReviewForm {
        saveNewReview(review, email, label){
                return axios.post(`http://localhost:8080/review/create/${email}/${label}`, review);
        }

        getRecipeReview(label){
                return axios.get(`http://localhost:8080/review/get/${label}`);
        }
}
export default new AjaxServiceReviewForm();