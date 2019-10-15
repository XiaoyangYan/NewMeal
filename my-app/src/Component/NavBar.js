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
                                <div className="navigasi-healty">
                                        <div className="title-healty"><a href="#">Healthy</a></div>
                                        <div className="menu-healty hidden-xs">
                                                <ul>
                                                        <li><a href="/recipe">Recipe</a></li>
                                                        <li><a href="/menu">Menu</a></li>
                                                        <li><a href="/favorite">Favorite</a></li>
                                                        <li><a href="/catelogue">Catelogue</a></li>
                                                        <li><a href="/aboutus">About Us</a></li>
                                                </ul>
                                        </div>
                                        <div className="menu-healty cart hidden-xs">
                                                <ul>
                                                        <li><a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                                                        <li>
                                                                <form action="" className="input-search">
                                                                        <input type="text" name="search" />
                                                                        <button type="button" className="button-serch"><i className="fa fa-search" aria-hidden="true"></i></button>
                                                                </form>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div className="navigasi-sm hidden-sm hidden-md hidden-lg">
                                                <span onClick={this.openNav}>&#9776;</span>
                                        </div>
                                        <SideDrawer show={this.state.openState} onNav={this.openNav} />


                                </div>
                        </>
                );
        }
}

export default NavBar;