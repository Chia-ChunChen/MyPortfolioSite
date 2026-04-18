import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-users";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (user.password !== user.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    const result = await create({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    });

    if (result?.success) {
      alert("Sign up successful. Please sign in.");
      navigate("/users/signin");
    } else {
      setErrorMsg(result?.message || "Signup failed.");
    }
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Sign Up</h1>
        <p className="form-subtitle">Create a new account.</p>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="primary-btn">
            Sign Up
          </button>

          <p style={{ marginTop: "12px" }}>
            Already have an account? <Link to="/users/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;