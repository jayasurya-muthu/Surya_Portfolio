import "./Projects.css";

const projects = [
  {
    id: 1,
    emoji: "🚗",
    bg: "#f5ede0",
    color: "#c8a96e",
    title: "Luxury Car Rental Management",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A web-based rental system for luxury vehicles (BMW, Audi, Mercedes). Users can select a car, enter rental duration, and instantly calculate total cost with real-time validation.",
    link: "https://car-rent-eta-umber.vercel.app/",
    year: "2025",
    type: "Web App",
  },
  {
    id: 2,
    emoji: "💼",
    bg: "#e8f0e8",
    color: "#2a5c24",
    title: "Personal Portfolio Website",
    tags: ["HTML", "CSS", "JavaScript","React.js"],
    desc: "A fully responsive portfolio website showcasing skills, projects, and professional information. Features smooth navigation, form validation, and dynamic content display.",
    link: "https://surya-portfolio-three-phi.vercel.app/",
    year: "2025",
    type: "Portfolio",
  },
  {
    id: 3,
    emoji: "🌿",
    bg: "#edf5e8",
    color: "#3a7d1e",
    title: "Global Agriculture Product",
    tags: ["React.js", "useState", "useEffect", "Vite", "CSS", "Bootstrap", "JavaScript", "HTML", "MySQL", "SpringBoot", "REST APIs", "Hibernate", "Figma", "Postman", "Git", "GitHub", "VS Code", "Vercel", "npm"],
    desc: "A responsive React application for marketing agricultural products with product listing, search, filtering, and add-to-cart. Built with React hooks for efficient state management.",
    link: "https://natural-world-five.vercel.app/",
    year: "2025",
    type: "Web App",
  },
];

export default function Project() {
  return (
    <div className="section" style={{ paddingTop: "7rem" }}>
      <div className="section-header fade-up fade-up-1">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <p className="projects-intro fade-up fade-up-2">
        A selection of projects I've built — from vanilla JavaScript applications to
        full React-powered web apps, all deployed live.
      </p>

      <div className="projects-list">
        {projects.map((p, i) => (
          <div key={p.id} className={`project-card fade-up fade-up-${i + 2}`}>
            <div className="project-thumb" style={{ background: p.bg, color: p.color }}>
              <span className="project-emoji">{p.emoji}</span>
              <div className="project-meta-overlay">
                <span className="p-year">{p.year}</span>
                <span className="p-type">{p.type}</span>
              </div>
            </div>

            <div className="project-body">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <a
                href={p.link}
                target={p.link === "#" ? "_self" : "_blank"}
                rel="noreferrer"
                className="project-link"
              >
                {p.link === "#" ? "Currently Viewing" : "View Live Project"} →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta fade-up">
        <p>More projects coming soon. Follow my GitHub for updates.</p>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-outline">
          GitHub Profile ↗
        </a>
      </div>
    </div>
  );
}
