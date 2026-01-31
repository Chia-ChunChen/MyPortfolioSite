import mesImg from "../assets/project-mes.png";
import fdcImg from "../assets/project-fdc.png";
import aiImg from "../assets/project-ai.png";

export default function Projects() {
  return (
    <div className="page">
      <h2>Projects</h2>

      <div className="projectsGrid">
        {/* Card 1 */}
        <div className="projectCard">
          <img src={mesImg} alt="MES Enhancement" className="projectImage" />
          <h3>MES Enhancement</h3>
          <p>
            Maintained and enhanced a Manufacturing Execution System for
            high-volume production, focusing on performance and reliability.
          </p>
        </div>

        {/* Card 2 */}
        <div className="projectCard">
          <img src={fdcImg} alt="FDC System" className="projectImage" />
          <h3>Fault Detection & Classification (FDC)</h3>
          <p>
            Built analytics and visualization modules to identify trends,
            anomalies, and support root-cause insights.
          </p>
        </div>

        {/* Card 3 */}
        <div className="projectCard">
          <img src={aiImg} alt="AI Segmentation" className="projectImage" />
          <h3>AI Image Segmentation & GAN System</h3>
          <p>
            Developed a PyTorch segmentation system and improved performance
            through GAN integration and analysis modules.
          </p>
        </div>
      </div>
    </div>
  );
}
