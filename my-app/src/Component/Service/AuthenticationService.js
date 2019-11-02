
export const  AUTHENTICATED_USER =  "authenticatedUser";
export const AUTHENTICATED_EMAIL = "authenticatedEmail"
class AuthenticationService {
        registerSuccessfulLogin(email, username){
                sessionStorage.setItem(AUTHENTICATED_EMAIL, email);
                sessionStorage.setItem(AUTHENTICATED_USER, username);
        }

        recordLogin( email){
                sessionStorage.setItem(AUTHENTICATED_EMAIL, email);
        }
        recordUserName(username){
                sessionStorage.setItem(AUTHENTICATED_USER, username);
        }
        logout(){
                sessionStorage.removeItem(AUTHENTICATED_USER);
                sessionStorage.removeItem(AUTHENTICATED_EMAIL);
        }

        isUserLoggedIn(){
                let email = sessionStorage.getItem(AUTHENTICATED_EMAIL);
                console.log(email);
                if (email == null) return false;
                return true;
        }

        getUserName(){
                return sessionStorage.getItem(AUTHENTICATED_USER);
        }

        getEmail(){
                return sessionStorage.getItem(AUTHENTICATED_EMAIL);
        }
}

export default new AuthenticationService();