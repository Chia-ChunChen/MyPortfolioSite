import { Link, useNavigate } from "react-router-dom";
import image_logo from "../assets/image_logo.jpg";
import { clearJWT, isAuthenticated, getFirstname } from "./auth/auth-helper";

export default function Layout() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();
  const firstname = getFirstname();

  const handleSignout = () => {
    clearJWT();
    navigate("/users/signin");
  };

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

          {loggedIn && (
            <div className="dropdown">
              <span className="navLink">Manage ▾</span>
              <div className="dropdownMenu">
                <Link to="/projects/list" className="dropdownItem">Projects</Link>
                <Link to="/services/list" className="dropdownItem">Services</Link>
                <Link to="/users/list" className="dropdownItem">Users</Link>
                <Link to="/references/list" className="dropdownItem">References</Link>
              </div>
            </div>
          )}

          <Link to="/contact" className="navLink">Contact</Link>

          {!loggedIn ? (
            <>
              <Link to="/users/signin" className="navLink">Sign In</Link>
             
            </>
          ) : (
            <>
              <span className="navLink">Hi, {firstname || "User"}</span>
              <button
                onClick={handleSignout}
                className="navLink"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Sign Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}