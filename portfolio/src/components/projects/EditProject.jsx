import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readOne, update } from "../../datasource/api-projects";
import ProjectForm from "./ProjectForm";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    readOne(id)
      .then((res) => {
        if (res?.success) {
          setProject(res.data);
        } else {
          setErrorMsg(res?.message);
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    update(project, id)
      .then((res) => {
        if (res?.success) {
          navigate("/projects/list");
        } else {
          setErrorMsg(res?.message);
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Edit Project</h1>
        <p className="form-subtitle">
          Update your project information below.
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

export default EditProject;