import "./home.css";

export default function Index({ navigate }) {
  return (
    <section className="home-section">
      <div className="home-bg-orb orb1" />
      <div className="home-bg-orb orb2" />

      <div className="home-inner">
        <div className="hero-content">
          <span className="hero-label fade-up fade-up-1">
            <span className="label-dot" />
            FullStack Developer · Chennai
          </span>

          <h1 className="hero-title fade-up fade-up-2">
            Hello, I'm<br />
            <span className="hero-name">Jayasurya.M</span>
          </h1>

          <p className="hero-bio fade-up fade-up-3">
           I am a <strong>Java Full Stack Developer</strong> passionate about building scalable, responsive, and secure web applications. I specialize in Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, MySQL, HTML, CSS, Bootstrap, JavaScript, and React.js to develop complete end-to-end solutions with clean, maintainable code.
          </p>

          <div className="hero-btns fade-up fade-up-4">
            <button className="btn btn-primary" onClick={() => navigate("projects")}>
              View Projects →
            </button>
            <a
              href="https://drive.google.com/file/d/1zw5YeLX2EhhgtkeLnjTxNkNRLe1iuVEH/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Resume ↗
            </a>
            <button className="btn btn-outline" onClick={() => navigate("contact")}>
              Contact Me
            </button>
          </div>

          <div className="hero-stats fade-up fade-up-5">
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-lbl">Skills</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-lbl">Projects</span>
            </div>
            <div className="stat-div" />
            <div className="stat">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">HTML</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">97%</span>
              <span className="stat-lbl">CSS</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">95%</span>
              <span className="stat-lbl">Bootstrap</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">95%</span>
              <span className="stat-lbl">Javascript</span>
            </div>
          </div>
          <div className="hero-stats fade-up fade-up-5">
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">97%</span>
              <span className="stat-lbl">React / vite</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">94%</span>
              <span className="stat-lbl">Git & GitHub</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">MySQL</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">Java</span>
            </div>
            <div className="stat-div" />
             <div className="stat">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">SpringBoot</span>
            </div>
          </div>
          
        </div>

        <div className="hero-visual fade-up fade-up-3">
  <div className="avatar-card">
    <img src="/prof-photo.png" alt="Profile" className="avatar-img" />
    <div className="avatar-glow" />
  </div>

  <div className="floating-badge badge-role">
    <span className="badge-icon">💻</span>
    <div>
      <p className="badge-value">Frontend Developer</p>
    </div>
  </div>

  <div className="floating-badge badge-role-back">
    <span className="badge-icon">💻</span>
    <div>
      <p className="badge-value">Backend Developer</p>
    </div>
  </div>

  <div className="floating-badge badge-tech">
    <span className="badge-icon">⚛️</span>
    <div>
      <p className="badge-label">Top Skill</p>
      <p className="badge-value">React.js</p>
    </div>
  </div>

  <div className="floating-badge badge-loc">
    <span className="badge-icon">📍</span>
    <div>
      <p className="badge-label">Location</p>
      <p className="badge-value">Chennai</p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
