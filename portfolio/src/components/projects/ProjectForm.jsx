const ProjectForm = ({ project, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={project.title || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Completion Date</label>
        <input
          type="date"
          name="completion"
          value={
            project.completion
              ? project.completion.substring(0, 10)
              : ""
          }
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={project.description || ""}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Save Project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;