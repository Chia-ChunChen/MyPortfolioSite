import { Link } from "react-router-dom";

const ListServiceItem = ({ service, deleteService }) => {
  return (
    <tr>
      <td className="project-cell-title">{service.title}</td>
      <td className="project-cell-desc">{service.description}</td>
      <td>
        <div className="action-buttons">
          <Link to={`/services/edit/${service.id}`} className="edit-btn">
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => deleteService(service.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListServiceItem;