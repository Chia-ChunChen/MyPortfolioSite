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
          <Link to="/" className="navLink">Home</Link>
          <Link to="/about" className="navLink">About</Link>
          <Link to="/projects" className="navLink">Project</Link>
          <Link to="/services" className="navLink">Service</Link>

          {/* Manage Dropdown Start */}
          <div className="dropdown">
            <span className="navLink">Manage ▾</span>

            <div className="dropdownMenu">
              <Link to="/projects/list" className="dropdownItem">
                Projects
              </Link>
              <Link to="/services/list" className="dropdownItem">
                Services
              </Link>
              <Link to="/users/list" className="dropdownItem">
                Users
              </Link>
              <Link to="/references/list" className="dropdownItem">
                References
              </Link>
            </div>
          </div>
          {/* Manage Dropdown End */}

          <Link to="/contact" className="navLink">Contact</Link>
        </nav>
      </div>
    </header>
  );
}