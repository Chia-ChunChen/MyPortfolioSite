import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { signin } from "../../datasource/api-auth";
import { authenticate } from "./auth-helper";

const Signin = () => {
  const { state } = useLocation();
  const from = state?.from || "/";

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signin(user).then((res) => {
      if (res?.success) {
        authenticate(res.token, () => {
          navigate(from, { replace: true });
        });
      } else {
        setErrorMsg(res?.message || "Signin failed");
      }
    });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Sign In</h1>
        <p className="form-subtitle">Log in to access the management pages.</p>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn">Sign In</button>

          <p style={{ marginTop: "12px" }}>
            No account? <Link to="/users/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signin;