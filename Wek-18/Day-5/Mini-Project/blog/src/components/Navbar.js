import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">My Blog</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar