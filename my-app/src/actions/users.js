import AuthenticationService from "../Component/Service/AuthenticationService";

export const LoginUser = ({email, password}) => {
        AuthenticationService.recordLogin(email);
       return {
                type: "USER_LOGIN",
                password: password,
                email: email,
        };
}

export const GetUserName = ({email, username}) => {
        return {
                type: "GET_USER_NAME",
                email: email,
                username: username,
        }
}

export const DeleteUser = () => {
        return {
                type: "DELETE_USER",
        }
}
