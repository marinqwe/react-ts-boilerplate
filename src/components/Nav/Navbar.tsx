import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className='nav'>
    <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to='/'>Home</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to='/about'>About</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to='/login'>Login</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')} to='/register'>Register</NavLink>
  </nav>
)
