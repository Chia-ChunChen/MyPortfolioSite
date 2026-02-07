import DataList from "./DataList";
import mesImg from "../assets/project-mes.png";
import fdcImg from "../assets/project-fdc.png";
import aiImg from "../assets/project-ai.png";

export default function Projects() {
  const projects = [
    {
      title: "MES Enhancement",
      image: mesImg,
      alt: "MES Enhancement",
      description:
        "Maintained and enhanced a Manufacturing Execution System for high-volume production, focusing on performance and reliability.",
      tags: ["C#", "VB", ".NET", "SQL", "Oracle", "MES"],
    },
    {
      title: "Fault Detection & Classification (FDC)",
      image: fdcImg,
      alt: "FDC System",
      description:
        "Built analytics and visualization modules to identify trends, anomalies, and support root-cause insights.",
      tags: ["Regression", "Clustering", "Dimensionality Reduction", "Visualization"],
    },
    {
      title: "AI-Driven Image Segmentation",
      image: aiImg,
      alt: "AI Segmentation",
      description:
        "Developed a PyTorch segmentation system and improved performance through GAN integration and analysis modules.",
      tags: ["Python", "PyTorch", "GAN", "CNN", "Deep Learning"],
    },
  ];

  return (
    <div className="page">
      <h2>Projects</h2>

      <DataList
        items={projects}
        className="projectsGrid"
        getKey={(p) => p.title}
        renderItem={(p) => (
          <div className="projectCard">
            <img src={p.image} alt={p.alt} className="projectImage" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            <div className="projectSkills">
              {p.tags.map((t) => (
                <span className="skillTag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
}
