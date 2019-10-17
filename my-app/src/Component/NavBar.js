import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./css/style.css"
import "./css/NavBar.css"
import SideDrawer from "./SideDrawer";

class NavBar extends React.Component {
        constructor() {
                super();
                this.state = {
                        openState: false,
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
        render() {
                return (
                        <>
                                <div className="navigation-healthy" id="navbar">
                                        <div className="title-healthy"><a href="/">Healthy</a></div>
                                        <div className="menu-healthy hidden-xs">
                                                <ul>
                                                        <li><a href="/recipe">Recipe</a></li>
                                                        <li><a href="/menu">Menu</a></li>
                                                        <li><a href="/favorite">Favorite</a></li>
                                                        <li><a href="/catelogue">Catelogue</a></li>
                                                        <li><a href="/aboutus">About Us</a></li>
                                                </ul>
                                        </div>
                                        <div className="menu-healthy cart hidden-xs">
                                                <ul>
                                                        <li><a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                                                        <li>
                                                                <form action="" className="input-search">
                                                                        <input type="text" name="search" />
                                                                        <button type="button" className="button-search"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                                </form>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div className="navigation-sm hidden-sm hidden-md hidden-lg">
                                                <span onClick={this.openNav}>&#9776;</span>
                                        </div>
                                        <SideDrawer show={this.state.openState} onNav={this.openNav} />


                                </div>
                        </>
                );
        }
}

export default NavBar;