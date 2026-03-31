class ReferenceModel {
  constructor(data = {}) {
    this.firstname = data.firstname || "";
    this.lastname = data.lastname || "";
    this.email = data.email || "";
    this.position = data.position || "";
    this.company = data.company || "";
    this.id = data.id || "";
  }
}

export default ReferenceModel;