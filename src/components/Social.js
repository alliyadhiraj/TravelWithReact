import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Social() {
  return (
    <div>
      
      <div class="social">
            <ul>
                <li>  <NavLink to= "https://facebook.com"><i class="fa fa-facebook"></i></NavLink></li>
                <li> <NavLink to="https://twitter.com"> <i class="fa fa-twitter"></i></NavLink></li>
                <li> <NavLink to="https://instagram.com"> <i class="fa fa-instagram"></i></NavLink></li>
            </ul>
        </div>

    </div>
  )
}
