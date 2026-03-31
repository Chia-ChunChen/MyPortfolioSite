import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-users";
import UserForm from "./UserForm";
import UserModel from "../../datasource/userModel";

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(new UserModel());
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(user).then((res) => {
      if (res?.success) navigate("/users/list");
      else setErrorMsg(res?.message || "Create failed");
    });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1>Add User</h1>
        {errorMsg && <p className="project-error">{errorMsg}</p>}
        <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}