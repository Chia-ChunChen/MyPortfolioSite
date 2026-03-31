import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-projects";
import ProjectForm from "./ProjectForm";
import ProjectModel from "../../datasource/projectModel";

const AddProject = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(new ProjectModel());
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    create(project)
      .then((res) => {
        if (res?.success) {
          navigate("/projects/list");
        } else {
          setErrorMsg(res?.message || "Failed to add project.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Add Project</h1>
        <p className="form-subtitle">
          Create a new project for your portfolio.
        </p>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <ProjectForm
          project={project}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default AddProject;