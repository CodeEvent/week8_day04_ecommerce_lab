import React from 'react';
import '../styles/navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav_box">
                    <span className="my_shop">My shopping</span>
                    <div className="cart">
                        <span>
                        <i className="fa fa-shopping-cart"></i>
                        </span>
                        <span>1</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;



