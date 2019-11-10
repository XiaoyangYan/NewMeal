import axios from 'axios';

class AjaxServiceSignForm {
        registerNewUser(users){
                return axios.post(`http://localhost:8080/register`,users);
        }

        loginExistUser(email, password){
                return axios.get(`http://localhost:8080/login/${email}/${password}`);
        }
        getUserName(email){
                return axios.get(`http://localhost:8080/username/${email}`);
        }
}

export default new AjaxServiceSignForm();