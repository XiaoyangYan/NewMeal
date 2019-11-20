import React from 'react';
import "./css/style.css"
import "./css/NavBar.css"
import SideDrawer from "./SideDrawer";
import AuthenticationService from './Service/AuthenticationService';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {LoginUser, GetUserName, DeleteUser, resetAllT} from "../actions";
class NavBar extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        openState: false,
                        userName:" ",
                        loggedIn: false,
                        isUserLoggedIn: this.props.isUserLoggedIn,
                }
        }
        componentDidMount(){
                setInterval(() => {
                        var navHeight = document.getElementById('navbar').scrollHeight- 10;
                        if (window.scrollY > navHeight){
                                document.getElementById('navbar').className = "navigation-healthy fixed";
                        }  else {
                                document.getElementById('navbar').className = "navigation-healthy";
                        }
                }, 10);
        }
        openNav = (e) => {
                this.setState((prevState) => {
                        return {
                                openState: !prevState.openState,
                        }
                })
        }
        handleLogout = (e) => {
                AuthenticationService.logout();
                this.props.DeleteUser();
                this.props.resetAllT();
        }
        componentWillUpdate(nextState){
		if (this.state !== nextState){
			this.state = nextState;
		}
        }
        render() {
                const {isUserLoggedIn} = this.state;
                console.log(isUserLoggedIn);
                const {email} = this.props;
                console.log(email);
                return (
                        <div className="navigation-healthy" id="navbar">
                                <div className="title-healthy"><a href="/">Healthy</a></div>
                                <div className="menu-healthy hidden-xs">
                                        <ul>
                                                <li><Link to="/dash">Main</Link></li>
                                                {(email) &&<li> <Link to="/plan">Self-Planner</Link></li>}
                                                {(email)  &&<li> <Link to="/user">MyPage</Link></li>}
                                                {(email)  &&<li><Link to="/advanced">Advanced-Planner</Link></li>}
                                        </ul>
                                </div>
                                <div className="menu-healthy cart hidden-xs">
                                        <ul>
                                                {/* <li><a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                                                <li>
                                                        <form action="" className="input-search">
                                                                <input type="text" name="search" />
                                                                <button type="button" className="button-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                        </form>
                                                </li> */}
                                                {!email&&  <li>< Link to="/login" className="logged-button">Sign In</Link></li>}
                                                {email   &&<li> <Link to="/login" onClick={this.handleLogout} className="logged-button" >Logged Out</Link></li>}
                                        </ul>
                                </div>

                                <div className="navigation-sm hidden-sm hidden-md hidden-lg">
                                        <span onClick={this.openNav}>&#9776;</span>
                                </div>
                                <SideDrawer show={this.state.openState} onNav={this.openNav} />
                        </div>
                );
        }
}
const mapStateToProps = (state) => {
        return {
                email: state.users.email,
                username: state.users.username,
                password: state.users.password
        }
}


export default connect(
        mapStateToProps,
        {
                LoginUser,
                GetUserName,
                DeleteUser,
                resetAllT
        }
)(NavBar);