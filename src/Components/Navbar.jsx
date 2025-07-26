import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import "./Navbar.css"
export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Lenana Jss Logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/academics">Academics</NavLink></li>
        <li><NavLink to="/staff">Staff</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}