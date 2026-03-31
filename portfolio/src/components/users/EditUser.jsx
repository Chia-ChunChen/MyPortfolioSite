import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readOne, update } from "../../datasource/api-users";
import UserForm from "./UserForm";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    readOne(id).then((res) => {
      if (res?.success) setUser(res.data);
      else setErrorMsg(res?.message || "Load failed");
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(user, id).then((res) => {
      if (res?.success) navigate("/users/list");
      else setErrorMsg(res?.message || "Update failed");
    });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1>Edit User</h1>
        {errorMsg && <p className="project-error">{errorMsg}</p>}
        <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </section>
  );
}