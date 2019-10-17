

export const  AUTHENTICATED_USER =  "authenticatedUser";
class AuthenticationService {


        registerSuccessfulLogin(username, password){
                sessionStorage.setItem(AUTHENTICATED_USER, username);
        }

        logout(){
                sessionStorage.removeItem(AUTHENTICATED_USER);
        }

        isUserLoggedIn(){
                let user = sessionStorage.getItem(AUTHENTICATED_USER);
                if (user == null) return false;
                return true;
        }
}

export default new AuthenticationService();