import axios from 'axios';

class AjaxServiceSignForm {
        registerNewUser(users){
                return axios.post(`http://localhost:8080/register`,users);
        }

        loginExistUser(email, password){
                console.log(email);
                console.log(password);
                return axios.get(`http://localhost:8080/login/${email}/${password}`);
        }
}

export default new AjaxServiceSignForm();