import axios from 'axios';

class AjaxServiceSignForm {
        registerNewUser(users){
                return axios.post(`http://localhost:8080/register`,users);
        }
}

export default new AjaxServiceSignForm();