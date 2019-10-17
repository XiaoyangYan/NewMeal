import axios from 'axios';

class AjaxServiceSignForm {
        registerNewUser(username, password, email){
                return axios.post(`http://localhost:8080/users/${username}/`, password, email);
        }
}

export default new AjaxServiceSignForm();