
export const LoginUser = ({email, password}) => {
       return {
                type: "USER_LOGIN",
                password: password,
                email: email,
        };
}

export const GetUserName = (email, username) => {
        return {
                type: "GET_USER_NAME",
                email: email,
                username: username,
        }
}
