
export const  AUTHENTICATED_USER =  "authenticatedUser";
export const AUTHENTICATED_EMAIL = "authenticatedEmail"
class AuthenticationService {
        registerSuccessfulLogin(email, password){
                sessionStorage.setItem(AUTHENTICATED_EMAIL, email);
        }

        recordLogin( email){
                sessionStorage.setItem(AUTHENTICATED_EMAIL, email);
        }

        logout(){
                sessionStorage.removeItem(AUTHENTICATED_USER);
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