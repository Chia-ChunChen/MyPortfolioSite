import { Link } from "react-router-dom";

export default function ListUserItem({ user, deleteUser }) {
  return (
    <tr>
      <td>{user.firstname} {user.lastname}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/users/edit/${user.id}`} className="edit-btn">Edit</Link>
        <button className="delete-btn" onClick={() => deleteUser(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}