import AuthenticatedService from "../Component/Service/AuthenticationService";
const initialState = {email:"xxx", password:"lll"}
const users = (state = initialState, action) => {
        switch(action.type){
                case "USER_LOGIN":
                        AuthenticatedService.recordLogin(action.email);
                        return {
                                ...initialState,
                                password: action.password,
                                email:action.email,
                        };
                case "GET_USER_NAME":
                        return {
                                ...initialState,
                                email: action.email,
                                username: action.username,
                        };
                case "":
                        return initialState;
                default:
                        return initialState;
        }
}

export default users;