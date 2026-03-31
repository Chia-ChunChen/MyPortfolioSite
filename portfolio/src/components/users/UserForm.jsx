const UserForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <label>First Name</label>
        <input name="firstname" value={user.firstname || ""} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input name="lastname" value={user.lastname || ""} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={user.email || ""} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={user.password || ""} onChange={handleChange} required />
      </div>

      <button type="submit" className="primary-btn">Save User</button>
    </form>
  );
};

export default UserForm;