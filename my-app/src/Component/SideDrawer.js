
import React from "react";


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

export default SideDrawer;
