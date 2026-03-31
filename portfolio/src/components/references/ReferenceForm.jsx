const ReferenceForm = ({ reference, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={reference.firstname || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={reference.lastname || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={reference.email || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Position</label>
        <input
          type="text"
          name="position"
          value={reference.position || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={reference.company || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-btn">
          Save Contact
        </button>
      </div>
    </form>
  );
};

export default ReferenceForm;