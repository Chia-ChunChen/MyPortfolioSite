import { Link } from "react-router-dom";

const ListProjectItem = ({ project, deleteProject }) => {
  return (
    <tr>
      <td className="project-cell-title">{project.title}</td>
      <td>
        {project.completion
          ? new Date(project.completion).toLocaleDateString()
          : ""}
      </td>
      <td className="project-cell-desc">{project.description}</td>
      <td>
        <div className="action-buttons">
          <Link to={`/projects/edit/${project.id}`} className="edit-btn">
            Edit
          </Link>

          <button
            className="delete-btn"
            onClick={() => deleteProject(project.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListProjectItem;