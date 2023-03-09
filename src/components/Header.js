import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (

    <header>
    <div class="navbar">
            <a href="#" class="logo">Travel Blog</a>  

            <ul>
                <li> <NavLink to="/">Home</NavLink>  </li>
                <li> <NavLink to="/services">Services</NavLink>  </li>
                <li> <NavLink to="/places">Places</NavLink>  </li>
                <li> <NavLink to="/about">About</NavLink>  </li>
                <li> <NavLink to="/help">HelpPage</NavLink>  </li>
                <li> <NavLink to="/LoginPage">LoginPage</NavLink>  </li>
                
            </ul>
        </div>
    </header>
);

export default Header;

