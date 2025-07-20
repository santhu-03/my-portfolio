import React from 'react';
import './App.css';
import photo from './assets/photo.jpg';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <img src={photo} alt="Santosh" className="profile-pic" />
        <h1>Santosh M Kulkarni</h1>
        <p>Tech Innovator | Digital & Traditional Artist | Integrating Code with Creativity</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/santosh-m-kulkarni" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" className="icon" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" className="icon" />
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>Objective</h2>
        <p>
          Seeking an opportunity to work with the organization that enhances my skills and abilities while contributing to its growth, fostering creativity, and enabling continuous learning.
        </p>
      </section>

      <section id="academics" className="section">
        <h2>Academics</h2>
        <ul>
          <li><strong>MCA</strong> – BMS Institute of Technology & Management (Pursuing), CGPA: 8.2</li>
          <li><strong>BCA</strong> – Vivekananda Institute Of Management (2024), CGPA: 8.6</li>
          <li><strong>PUC</strong> – Seshadripuram Composite PU College (2021), 49%</li>
          <li><strong>SSLC</strong> – Bapu High School (2018), 72.96%</li>
        </ul>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>C</li>
          <li>Java</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Express.js</li>
          <li>Networking</li>
          <li>Generative AI Prompt Design</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>Adobe Animate</li>
          <li>Adobe Audition</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li><strong>Fake Indian Currency Detection</strong> – Using CNN and Xception Architecture</li>
          <li><strong>Hunger Aid</strong> – Surplus Food Management System</li>
        </ul>
      </section>

      <section id="achievements" className="section">
        <h2>Achievements</h2>
        <ul>
          <li>Participated in Hackverse – Intra Department Hackathon Event</li>
          <li>Coordinated Faculty Development Program on Mobile App Development</li>
          <li>Organized Inter College Fest – AAKRITI</li>
          <li>1st Prize in Poster Design – Vivekananda Institute Of Management</li>
          <li>Part-time Lecturer at Arts Film Academy (2023 – Present)</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:santoshmkulkarni09@gmail.com">santoshmkulkarni09@gmail.com</a></p>
        <p>Phone: +91 8722856553</p>
      </section>

      <section className="section">
        <h2>Hobbies</h2>
        <ul>
          <li>Drawing</li>
          <li>Painting</li>
          <li>Cooking</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Santosh M Kulkarni</p>
      </footer>
    </div>
  );
}

export default App;
