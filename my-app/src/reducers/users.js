import AuthenticationService from "../Component/Service/AuthenticationService";

const initialState = {email:AuthenticationService.getEmail(), password:null, username:AuthenticationService.getUserName()}
const users = (state ={}, action) => {
        switch(action.type){
                case "USER_LOGIN":
                        return {
                                ...state,
                                password: action.password,
                                email:action.email,
                        };
                case "GET_USER_NAME":
                        return {
                                ...state,
                                email: action.email,
                                username: action.username,
                        };
                case "DELETE_USER":
                        return {
                                ...state,
                                email: null,
                                username: null,
                                password: null,
                        }
                default:
                        if (state != null){
                                return state;
                        }
                        return initialState;
        }
}

export default users;