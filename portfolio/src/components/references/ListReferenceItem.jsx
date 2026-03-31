import { Link } from "react-router-dom";

const ListReferenceItem = ({ reference, deleteReference }) => {
  return (
    <tr>
      <td className="project-cell-title">
        {reference.firstname} {reference.lastname}
      </td>

      <td>{reference.email}</td>

      <td>{reference.position}</td>

      <td className="project-cell-desc">{reference.company}</td>

      <td>
        <div className="action-buttons">
          <Link
            to={`/references/edit/${reference.id}`}
            className="edit-btn"
          >
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => deleteReference(reference.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListReferenceItem;