import { NavLink } from "react-router-dom";
import image_logo from "../assets/image_logo.jpg";

export default function Layout() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">
          <img src={image_logo} alt="Logo" className="logo" />
          <div>
            <h1 className="title">Chia Chun Chen</h1>
            <p className="subtitle">Software Engineer</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end className="navLink">
            Home
          </NavLink>
          <NavLink to="/about" className="navLink">
            About
          </NavLink>
          <NavLink to="/projects" className="navLink">
            Projects
          </NavLink>
          <NavLink to="/services" className="navLink">
            Services
          </NavLink>
          <NavLink to="/contact" className="navLink">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
