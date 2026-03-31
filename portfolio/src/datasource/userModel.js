class UserModel {
  constructor(data = {}) {
    this.firstname = data.firstname || "";
    this.lastname = data.lastname || "";
    this.email = data.email || "";
    this.password = data.password || "";
    this.id = data.id || "";
  }
}
export default UserModel;