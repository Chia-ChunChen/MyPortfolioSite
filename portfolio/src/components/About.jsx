import image from "../assets/about-profile.jpg";

export default function About() {
  return (
    <div className="page aboutLayout">
      {/* Left: Photo */}
      <div className="aboutLeft">
        <img src={image} alt="Chloe profile" className="aboutPhoto" />
      </div>

      {/* Right: Text */}
      <div className="aboutRight">
        <h2>About Me</h2>

        <ul className="aboutList">
          <li>
            I am a Software and Manufacturing Systems Engineer 
            with <strong>over three years of experience</strong> supporting 
            semiconductor manufacturing systems, where I have worked 
            extensively with MES platforms, data integration pipelines, 
            and AI-driven defect detection solutions.

          </li>
          <li>
            I hold a <strong>Master’s degree</strong> in Biomedical Informatics, 
            which equipped me with a solid foundation in data analytics, 
            machine learning, databases, and system integration. 
            I am currently studying Digital Health Engineering Technology, 
            with a focus on applying software engineering principles to healthcare and enterprise systems.

          </li>
          <li>
            With strong analytical and critical thinking abilities, 
            I thrive in technically complex environments 
            and <strong>continuously seek to expand my skill</strong> set by 
            learning new tools, frameworks, and technologies.
          </li>
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="aboutResumeLink"
        >
          View My Resume (PDF)
        </a>
      </div>
    </div>
  );
}
