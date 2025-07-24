import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to ="/">Lenana School</Link>
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