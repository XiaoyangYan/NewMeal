import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./css/style.css"
import "./css/NavBar.css"

const SideDrawer = props => {
        console.log(props.show);
        return (
                <>
                <div className={props.show ?  'bg-sidebar-all open': 'bg-sidebar-all'}></div>
                <div className={!props.show ?  'sidenav': 'sidenav navopen'}>
                        <a href="#" className="closebtn" onClick={props.onNav}>&times;</a>
                        <div className="search-sm">
                                <form action="">
                                        <input type="text" />
                                        <button className="button-serch"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                                <a href="cart.html">Cart <i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
                        </div>
                        <div className="navigasi-mb-sm">
                                <a href="">Recipe</a>
                                <a href="">Menu</a>
                                <a href="">Favourite</a>
                                <a href="">Catelogue</a>
                                <a href="">About Us</a>
                        </div>
                </div>
                </>
        );
}

class NavBar extends React.Component {
        constructor() {
                super();
                this.state = {
                        openState: false,

                }
        }

        openNav = (e) => {
                this.setState((prevState) => {
                                return{
                                        openState: !prevState.openState,
                                }
                        }
                )

        }
        render() {
                return (
                        <>
                                
                                <div className="navigasi-healty">
                                        <div className="title-healty"><a href="#">Healthy</a></div>
                                        <div className="menu-healty hidden-xs">
                                                <ul>
                                                        <li><a href="">Recipe</a></li>
                                                        <li><a href="">Menu</a></li>
                                                        <li><a href="">Favourite</a></li>
                                                        <li><a href="">Catelogue</a></li>
                                                        <li><a href="">About Us</a></li>
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
                                        <SideDrawer show={this.state.openState}  onNav = {this.openNav}/>


                                </div>
                        </>
                );
        }
}

export default NavBar;