import { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML",            pct: 98, icon: "🌐", color: "#fff4e0", desc: "Semantic, accessible markup"         },
  { name: "CSS",             pct: 97, icon: "🎨", color: "#e8f0ff", desc: "Responsive layouts, animations"     },
  { name: "JavaScript",      pct: 95, icon: "⚡", color: "#fffbe0", desc: "ES6+, DOM manipulation, APIs"       },
  { name: "Bootstrap",       pct: 95, icon: "🅱️", color: "#f0e8ff", desc: "Grid system, components, utilities" },
  { name: "Git & GitHub",    pct: 94, icon: "🔧", color: "#e8f5e9", desc: "Version control, collaboration"     },
  { name: "React / Vite",    pct: 97, icon: "⚛️", color: "#e0f7f4", desc: "Hooks, state management, SPA"       },
  { name: "MySQL",           pct: 98, icon: "🐬",  color: "#e0f7f4", desc:"Database design, queries, joins, CRUD operations"},
  { name: "Java",            pct: 98, icon: "☕", color: "#f0e8ff", desc: "Object-oriented programming, data structures" },
  { name: "SpringBoot",      pct: 98, icon: "🌱", color: "#e8f5e9", desc: "RESTful APIs, dependency injection, MVC" },
];

function SkillCard({ skill, index }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.width = skill.pct + "%";
          }, index * 80);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [skill.pct, index]);

  return (
    <div className={`skill-card fade-up fade-up-${(index % 6) + 1}`}>
      <div className="skill-icon" style={{ background: skill.color }}>
        {skill.icon}
      </div>
      <div className="skill-body">
        <div className="skill-top">
          <p className="skill-name">{skill.name}</p>
          <span className="skill-pct">{skill.pct}%</span>
        </div>
        <p className="skill-desc">{skill.desc}</p>
        <div className="skill-bar">
          <div className="skill-bar-fill" ref={barRef} style={{ width: "0%" }} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="section" style={{ paddingTop: "7rem" }}>
      <div className="section-header fade-up fade-up-1">
        <span className="section-num">01</span>
        <h2 className="section-title">My Skills</h2>
        <div className="section-line" />
      </div>

      <p className="skills-intro fade-up fade-up-2">
        A passionate Java Full Stack Developer with hands-on experience developing responsive frontend applications and scalable backend systems using Java, Spring Boot, React.js, REST APIs, Hibernate, and MySQL, with a strong focus on clean code and user-centric design.
      </p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>

      <div className="skills-footer fade-up">
        <div className="skills-footer-card">
          <p className="sfc-label">Always learning</p>
          <p className="sfc-text">Currently exploring TypeScript, Next.js, and advanced React patterns.</p>
        </div>
        <div className="skills-footer-card">
          <p className="sfc-label">Tools I use</p>
          <p className="sfc-text">VS Code, Vercel, npm.</p>
          <p className="sfc-text">Figma, Postman, GitHub.</p>
        </div>
        <div className="skills-footer-card">  
        <p className="sfc-label">Soft skills</p>
          <p className="sfc-text">Problem-solving, communication, teamwork, Ai, adaptability.</p>
        </div>

      </div>

        </div>
  );
}
