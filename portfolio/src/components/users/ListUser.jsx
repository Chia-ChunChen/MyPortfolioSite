import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../../datasource/api-users";
import ListUserItem from "./ListUserItem";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const load = () => {
    list().then((res) => {
      if (res?.success) setUsers(res.data || []);
      else setErrorMsg(res?.message || "Load failed");
    });
  };

  useEffect(() => { load(); }, []);

  const deleteUser = (id) => {
    if (!window.confirm("Delete this user?")) return;
    remove(id).then((res) => {
      if (res?.success) setUsers((p) => p.filter(u => u.id !== id));
      else setErrorMsg(res?.message || "Delete failed");
    });
  };

  return (
    <section className="project-page">
      <div className="project-card">
        <div className="project-header">
       
          <div>
            <h1 className="project-title">User Management</h1>
          </div>
          <Link to="/users/add" className="add-project-btn">+ Add User</Link>
        </div>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <table className="project-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <ListUserItem key={u.id} user={u} deleteUser={deleteUser} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}