import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../../datasource/api-projects";
import ListProjectItem from "./ListProjectItem";

const ListProject = () => {
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const loadProjects = () => {
    list()
      .then((res) => {
        if (res?.success) {
          setProjects(res.data || []);
        } else {
          setErrorMsg(res?.message || "Failed to load projects.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const deleteProject = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    remove(id)
      .then((res) => {
        if (res?.success) {
          setProjects((prev) => prev.filter((project) => project.id !== id));
        } else {
          setErrorMsg(res?.message || "Failed to delete project.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <section className="project-page">
      <div className="project-card">
        <div className="project-header">
          <div>
            <h1 className="project-title">Project Management</h1>
          </div>

          <Link to="/projects/add" className="add-project-btn">
            + Add Project
          </Link>
        </div>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        {projects.length === 0 ? (
          <div className="empty-state">
            <h3>No projects found</h3>
            <p>Start by adding your first project.</p>
          </div>
        ) : (
          <div className="project-table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Completion</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <ListProjectItem
                    key={project.id}
                    project={project}
                    deleteProject={deleteProject}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListProject;