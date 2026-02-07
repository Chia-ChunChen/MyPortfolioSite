import { Link } from "react-router-dom";
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
          <Link to="/" end className="navLink">
            Home
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/projects" className="navLink">
            Projects
          </Link>
          <Link to="/services" className="navLink">
            Services
          </Link>
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
