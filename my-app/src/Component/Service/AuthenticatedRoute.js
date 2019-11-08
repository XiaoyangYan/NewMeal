import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";
import {Route, Redirect} from 'react-router-dom';

class AuthenticationRoute extends Component{
        render(){
                if (AuthenticationService.isUserLoggedIn()){
                        return <Route {...this.props}/>
                } else {
                        return <Redirect to="/login"/>
                }
        }
}
export default  AuthenticationRoute;