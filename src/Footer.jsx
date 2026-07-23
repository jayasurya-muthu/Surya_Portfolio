import "./Footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark-f">JM</span>
              <span>jayasurya.M</span>
            </div>
            <p>
  Passionate Java Full Stack Developer specializing in Java, Spring Boot, React.js, REST APIs, and MySQL to build high-performance, user-friendly web applications.
</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            {["home","skills","about","projects","contact"].map(p => (
              <button key={p} onClick={() => navigate(p)} className="footer-link">
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn ↗</a>
            <a href="mailto:jayasuriyamuthu004@gmail.com" className="footer-link">Email ↗</a>
            <a href="https://drive.google.com/file/d/1zw5YeLX2EhhgtkeLnjTxNkNRLe1iuVEH/view?usp=sharing" target="_blank" rel="noreferrer" className="footer-link">Resume ↗</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Jayasurya.M · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
