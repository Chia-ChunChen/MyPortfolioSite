export default function Services() {
  const services = [
    {
      title: "Programming Languages",
      items: ["C#", "Java", "Python", "SQL"],
      icon: "💻",
    },
    {
      title: "Web Technologies",
      items: ["HTML / CSS", "JavaScript", "jQuery", "React"],
      icon: "🌐",
    },
    {
      title: "Frameworks & Platforms",
      items: [".NET", "ASP.NET", "Oracle Database"],
      icon: "🧱",
    },
    {
      title: "Data Science / AI",
      items: ["Classification", "Convolutional Neural Networks", "Generative Adversarial Network"],
      icon: "🧠",
    },
    {
      title: "Development Tools & IDEs",
      items: ["Visual Studio", "Visual Studio Code", "Eclipse"],
      icon: "🛠",
    },
    {
      title: "Version Control",
      items: ["Git","GitHub"],
      icon: "🔄",
    },
  ];

  return (
    <div className="page">
      <h2>Services</h2>
      <p className="muted">
        Here are the technical areas I can support based on my skills and project experience.
      </p>

      <div className="servicesGrid">
        {services.map((s) => (
          <div className="serviceCard" key={s.title}>
            <div className="serviceTop">
              <div className="serviceIcon">{s.icon}</div>
              <h3>{s.title}</h3>
            </div>

            <ul className="serviceList">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <p className="serviceNote">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
