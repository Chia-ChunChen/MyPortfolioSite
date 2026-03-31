class ProjectModel {
  constructor(data = {}) {
    this.title = data.title || "";
    this.completion = data.completion
      ? String(data.completion).substring(0, 10)
      : "";
    this.description = data.description || "";
    this.id = data.id || "";
  }
}

export default ProjectModel;