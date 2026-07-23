import "./About.css";

const stats = [
  { num: "6+", lbl: "Skills Mastered" },
  { num: "3+", lbl: "Live Projects" },
  { num: "98%", lbl: "HTML Proficiency" },
  { num: "97%", lbl: "React Proficiency" },
];

const techStack = ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "Vite", "Git", "GitHub", "VS Code", "Vercel", "MySQL", "Java", "Spring Boot", "Hibernate", "REST APIs", "Figma", "Postman"];

export default function About({ navigate }) {
  return (
    <div className="section" style={{ paddingTop: "7rem" }}>
      <div className="section-header fade-up fade-up-1">
        <span className="section-num">02</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-left fade-up fade-up-2">
          <div className="about-avatar">
            <div className="about-initials">JM</div>
            <div className="about-av-detail">
              <p className="av-name">Jayasurya.M</p>
              <p className="av-role">Full Stack Developer</p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.lbl} className="about-stat">
                <span className="as-num">{s.num}</span>
                <span className="as-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right fade-up fade-up-3">
          <h3 className="about-sub">Who I am</h3>
          <p>
            <p>
  I am a passionate <strong>Java Full Stack Developer</strong> skilled in Java,
  Spring Boot, Hibernate, REST APIs, HTML, CSS, Bootstrap, JavaScript, React.js,
  and MySQL. I enjoy building scalable, responsive, and user-friendly web
  applications by developing both robust backend services and modern frontend
  interfaces.
</p>

<p>
  My goal is to create <strong>secure, high-performance full-stack applications</strong>
  by writing clean, maintainable, and well-structured code. I have experience
  designing RESTful APIs, integrating databases with MySQL, implementing backend
  logic using Spring Boot and Hibernate, and developing interactive user
  interfaces with React.js.
</p>

<p>
  Based in <strong>Chennai, Tamil Nadu</strong>, I am open to exciting
  opportunities, internships, and collaborations as a <strong>Java Full Stack
  Developer</strong>. I am eager to contribute to innovative projects while
  continuously enhancing my skills in Java, Spring Boot, Microservices, React.js,
  and cloud-based application development.
</p>
          </p>

          <h3 className="about-sub" style={{ marginTop: "2rem" }}>Tech Stack</h3>
          <div className="tech-stack">
            {techStack.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <div className="about-btns">
            <a
              href="https://drive.google.com/file/d/1zw5YeLX2EhhgtkeLnjTxNkNRLe1iuVEH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Download Resume ↗
            </a>
            <button className="btn btn-outline" onClick={() => navigate("contact")}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
