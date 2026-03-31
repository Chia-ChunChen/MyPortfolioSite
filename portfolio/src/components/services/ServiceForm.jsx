const ServiceForm = ({ service, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={service.title || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={service.description || ""}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Save Service
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;