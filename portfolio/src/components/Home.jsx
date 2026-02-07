import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h2>Welcome</h2>

      <p>
        Hi, I’m Chia Chun Chen, also known as Chloe. This is my portfolio website built with React.
      </p>

      <p>
        I have experience in system development, data integration, and web
        applications.
      </p>

      <p>
        Feel free to explore my projects and services.
      </p>
      {/* go to about */}
      <div className="homeActions">
        <Link to="/about" className="btnPrimary">
          About Me
        </Link>
      </div>
    </div>
  );
}
