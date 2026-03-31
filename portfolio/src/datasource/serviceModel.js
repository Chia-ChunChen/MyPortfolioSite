class ServiceModel {
  constructor(data = {}) {
    this.title = data.title || "";
    this.description = data.description || "";
    this.id = data.id || "";
  }
}

export default ServiceModel;