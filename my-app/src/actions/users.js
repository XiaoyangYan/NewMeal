import AuthenticationService from "../Component/Service/AuthenticationService";

export const LoginUser = ({email, password,username}) => {
        AuthenticationService.recordLogin(email);
       return {
                type: "USER_LOGIN",
                password: password,
                email: email,
                username: username,
        };
}

export const GetUserName = () => {
        return {
                type: "GET_USER_NAME",
        }
}

export const DeleteUser = () => {
        return {
                type: "DELETE_USER",
        }
}
