import React from "react";
import { NavLink } from "react-router-dom";
const HomePage = ()=>(

    <div class="showcase">  
        {/* <div class="navbar">
            <a href="#" class="logo">Travel Blog</a>  

            <ul>
                <li> <NavLink to="/">Home</NavLink>  </li>
                <li> <NavLink to="/services">Services</NavLink>  </li>
                <li> <NavLink to="/places">Places</NavLink>  </li>
                <li> <NavLink to="/about">About</NavLink>  </li>
                <li> <NavLink to="/contact">Contact</NavLink>  </li>
                <li><a href="services.html"> Services </a> </li>
                <li><a href="places.html"> Places </a> </li>
                <li><a href="about.html"> About Us  </a> </li>
                <li><a href="contact.html"> Contact </a> </li> 
            </ul>
        </div> */}

        <div class="showcase-content">
            <h1> Photography | Videography </h1>
            <p>Traveling to different places </p> 

            <div>
                <a href="#" class="btn"> Watch More</a>
                <a href="#" class="btn"> Subscribe</a>
            </div>
        </div>

        <div class="social">
            <ul>
                <li> <a href="#"> <i class="fa fa-facebook"></i></a></li>
                <li> <a href="#"> <i class="fa fa-twitter"></i></a></li>
                <li> <a href="#"> <i class="fa fa-instagram"></i></a></li>
            </ul>
        </div>


    </div>
);

export default HomePage;