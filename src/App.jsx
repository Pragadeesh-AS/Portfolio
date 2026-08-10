import React, { useState, useEffect } from 'react';
import { Award, Mail, Phone, User, Code, Download } from 'lucide-react';
import { motion } from "framer-motion";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './index.css';
import profileImage from './assets/image.jpeg';
import resumePdf from './assets/Pragadeesh Resume.pdf';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy logic to update active section
      const sections = ['about', 'experience', 'projects', 'skills'];
      let current = 'about';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to trigger slightly before it hits the top
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-brand">Pragadeesh A S</div>
        <div className="nav-links">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>Home</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')}>Experience</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</a>
        </div>
        <a href={resumePdf} download="Pragadeesh_Resume.pdf" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          Resume <Download size={18} />
        </a>
      </nav>
    </div>
  );
}

const bgSkills = [
  'ReactJS', 'NodeJS', 'MongoDB', 'Python', 
  'Java', 'C++', 'AWS', 'Spring Boot', 
  'Express', 'JavaScript'
];

function TechBackground() {
  return (
    <div className="tech-bg-container">
      {bgSkills.map((skill, index) => (
        <div key={skill} className={`floating-skill skill-${index}`}>
          {skill}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="about" className="hero container">
      <div className="hero-content">
        <h1>Hello, I'm <br/><span className="text-accent-cyan">Pragadeesh A S</span></h1>
        <p>Full-stack developer building on the MERN stack & a competitive programmer sharpening algorithms one rating point at a time.</p>
        
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <a href="tel:+916264606598" className="btn-primary">📞 +91 6264606598</a>
          <a href="https://www.linkedin.com/in/pragadeesh-a-s-840931314" target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
          <a href="https://github.com/Pragadeesh-AS" target="_blank" rel="noreferrer" className="btn-primary">GitHub</a>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <img 
          src={profileImage} 
          alt="Pragadeesh A S" 
          className="hero-image"
        />
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about-me" className="section-padding container">
      <div style={{ marginBottom: '40px' }}>
        <span className="text-accent-cyan" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>// 01 - ABOUT ME</span>
        <h2 className="section-title" style={{ borderBottom: 'none', fontSize: '3rem', margin: '10px 0 0 0', display: 'block' }}>Who Am I?</h2>
      </div>
      <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
          I'm a passionate Full Stack Developer with hands-on experience building production-grade web applications using React, Node.js, and MongoDB. I thrive at the intersection of clean UI and robust backend architecture.
        </p>
        <p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
          My interest in AI/ML drives me to integrate intelligent features into real-world applications — from plant disease detection systems to secure digital voting platforms powered by modern algorithms.
        </p>
        <p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
          I hold a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, and Computer Networks — enabling me to write efficient, maintainable, and scalable code.
        </p>
        <p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
          I'm always learning, always building, and always looking for the next challenge that pushes the boundaries of what's possible.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-padding container">
      <h2 className="section-title">Internship Experience</h2>
      <div className="glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Aptitude Guru Hem</h3>
          <span className="text-accent-cyan" style={{ fontWeight: 'bold' }}>2025</span>
        </div>
        <p className="desc-text">
          Developed a full-stack fitness tracking web application with secure login and a personalized dashboard. Built the backend using Node.js, Express.js, MongoDB with JWT authentication and bcrypt encryption.
        </p>
        <div className="pill-container">
          {['React.js', 'Responsive UI Design', 'React Hooks', 'Node.js', 'Express.js', 'RESTful API', 'JWT Auth', 'MongoDB Atlas', 'Render', 'Production Build'].map(skill => (
            <span key={skill} className="pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding container">
      <h2 className="section-title">Projects</h2>
      <div className="grid-2">
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 className="text-accent-cyan">Bus Booking (BusFlow)</h3>
            <span>2025</span>
          </div>
          <a href="#" className="text-accent-purple" style={{ fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>GitHub ↗</a>
          <p className="desc-text">
            BusFlow is a MERN-based booking platform with role-driven access for admins, operators, and users. Integrates JWT authentication, Mongoose data models, and Express controllers with a React context-powered frontend for real-time seat selection, payments, refunds, and QR-based ticket generation.
          </p>
          <div className="pill-container">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB'].map(s => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>

        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 className="text-accent-cyan">Battery Life Predictor</h3>
            <span>2025</span>
          </div>
          <a href="#" className="text-accent-purple" style={{ fontSize: '14px', marginBottom: '16px', display: 'inline-block' }}>GitHub ↗</a>
          <p className="desc-text">
            A machine learning-based estimation tool designed to forecast device battery longevity based on usage patterns and hardware metrics. Integrates comprehensive data preprocessing pipelines, exploratory data analysis, and advanced regression models.
          </p>
          <div className="pill-container">
            {['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Linear Regression'].map(s => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-padding container">
      <h2 className="section-title">Education</h2>
      <div className="glass-panel" style={{ padding: '32px' }}>
        <div className="list-group">
          <div className="list-item">
            <div>
              <h4 style={{ margin: '0 0 4px 0' }}>Sri Eshwar College of Engineering</h4>
              <span className="sub-text">B.E. Computer Science</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="text-accent-cyan" style={{ fontWeight: 'bold' }}>8.01 CGPA</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>2024-2028</div>
            </div>
          </div>
          <div className="list-item">
            <div>
              <h4 style={{ margin: '0 0 4px 0' }}>Skv Vidhyaashram</h4>
              <span className="sub-text">Class XII (CBSE)</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="text-accent-cyan" style={{ fontWeight: 'bold' }}>76.8%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>2022-2024</div>
            </div>
          </div>
          <div className="list-item">
            <div>
              <h4 style={{ margin: '0 0 4px 0' }}>Skv Vidhyaashram</h4>
              <span className="sub-text">Class X (CBSE)</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="text-accent-cyan" style={{ fontWeight: 'bold' }}>84.8%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>2021-2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodingProfiles() {
  return (
    <section className="section-padding container">
      <div style={{ marginBottom: '40px' }}>
        <span className="text-accent-cyan" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>// CODING JOURNEY</span>
        <h2 className="section-title" style={{ borderBottom: 'none', fontSize: '3rem', margin: '10px 0 0 0', display: 'block' }}>Coding Profiles</h2>
      </div>
      
      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-header">LeetCode</div>
          <div className="profile-stat">100+</div>
          <div className="profile-label">Problems Solved</div>
          <div className="profile-subtext">Max Rating: 1323</div>
          <a href="#" className="profile-link">View Profile &rarr;</a>
        </div>
        <div className="profile-card">
          <div className="profile-header">CodeChef</div>
          <div className="profile-stat">400+</div>
          <div className="profile-label">Problems Solved</div>
          <div className="profile-subtext">Max Rating: 1100</div>
          <a href="#" className="profile-link">View Profile &rarr;</a>
        </div>
        <div className="profile-card">
          <div className="profile-header">Codeforces</div>
          <div className="profile-stat">30+</div>
          <div className="profile-label">Problems Solved</div>
          <div className="profile-subtext">Max Rating: 1000 (Pupil)</div>
          <a href="#" className="profile-link">View Profile &rarr;</a>
        </div>
        <div className="profile-card">
          <div className="profile-header">SkillRack</div>
          <div className="profile-stat">1240+</div>
          <div className="profile-label">Problems Solved</div>
          <div className="profile-subtext">13 Certificates</div>
          <a href="#" className="profile-link">View Profile &rarr;</a>
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  const credentials = [
    { title: "SQL Basic Certification", issuer: "HackerRank", year: "2025" },
    { title: "Problem Solving in C", issuer: "NPTEL", year: "2025" },
    { title: "DSA using C & C++", issuer: "Udemy", year: "2025" },
    { title: "AWS AI Practitioner", issuer: "Udemy", year: "2025" },
    { title: "AWS Cloud Practitioner", issuer: "AWS", year: "2024" },
    { title: "Java from Zero to First Job", issuer: "Udemy", year: "2024" },
    { title: "Creonix Hackathon Finalist", issuer: "Easwari College", year: "2025" },
    { title: "HACKSPORA Participant", issuer: "Karpagam College", year: "2025" },
    { title: "ADOBE Hackathon", issuer: "Adobe", year: "2024" }
  ];

  return (
    <section className="section-padding container">
      <div style={{ marginBottom: '40px' }}>
        <span className="text-accent-cyan" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>// 05 - CREDENTIALS</span>
        <h2 className="section-title" style={{ borderBottom: 'none', fontSize: '3rem', margin: '10px 0 0 0', display: 'block' }}>Certifications & Achievements</h2>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <CertificateCarousel credentials={credentials} loop autoplay />
      </div>
    </section>
  );
}

const CertificateCarousel = ({ credentials, loop = true, autoplay = true }) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    padding-bottom: 60px !important;
    padding-top: 20px !important;
  }
  .Carousal_003 .swiper-slide {
    width: 260px;
    height: auto;
    display: flex;
    justify-content: center;
  }
  .swiper-pagination-bullet {
    background-color: var(--text-muted) !important;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--accent-cyan) !important;
    opacity: 1;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      style={{ position: 'relative', width: '100%', maxWidth: '1000px', padding: '0 20px' }}
    >
      <style>{css}</style>
      <Swiper
        autoplay={autoplay ? { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={loop}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        className="Carousal_003"
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {credentials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="credential-card" style={{ width: '100%' }}>
              <div className="cred-icon">
                <Award size={28} />
              </div>
              <div className="cred-title">{item.title}</div>
              <div className="cred-issuer">{item.issuer}</div>
              <div className="cred-year">{item.year}</div>
              <div className="cred-badge">VERIFIED</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding container">
      <div style={{ marginBottom: '40px' }}>
        <span className="text-accent-cyan" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>// 07 - CONTACT</span>
        <h2 className="section-title" style={{ borderBottom: 'none', fontSize: '3rem', margin: '10px 0 0 0', display: 'block' }}>Get In Touch</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="desc-text" style={{ marginBottom: '32px', fontSize: '16px' }}>
            Open to opportunities, collaborations, and conversations about tech. Let's build something impactful together.
          </p>
          
          <div className="contact-cards">
            <a href="mailto:pragadeesh.as2024cse@sece.ac.in" className="contact-card" style={{ textDecoration: 'none' }}>
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">pragadeesh.as2024cse@sece.ac.in</div>
              </div>
            </a>
            <a href="tel:+916264606598" className="contact-card" style={{ textDecoration: 'none' }}>
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 6264606598</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/pragadeesh-a-s-840931314" target="_blank" rel="noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
              <div className="contact-icon"><User size={20} /></div>
              <div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">pragadeesh-a-s</div>
              </div>
            </a>
            <a href="https://github.com/Pragadeesh-AS" target="_blank" rel="noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
              <div className="contact-icon"><Code size={20} /></div>
              <div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">Pragadeesh-AS</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section id="skills" className="section-padding container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="glass-panel" style={{ padding: '32px' }}>
        <div className="grid-3">
          <div>
            <div className="text-accent-cyan" style={{ fontSize: '14px', marginBottom: '8px' }}>Languages</div>
            <div className="pill-container" style={{ marginTop: '0' }}>
              {['C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'NodeJS'].map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
          <div>
            <div className="text-accent-cyan" style={{ fontSize: '14px', marginBottom: '8px' }}>Frameworks</div>
            <div className="pill-container" style={{ marginTop: '0' }}>
              {['Express', 'ReactJS', 'Spring Boot'].map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
          <div>
            <div className="text-accent-cyan" style={{ fontSize: '14px', marginBottom: '8px' }}>Databases</div>
            <div className="pill-container" style={{ marginTop: '0' }}>
              {['SQL', 'MongoDB'].map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
          <div>
            <div className="text-accent-cyan" style={{ fontSize: '14px', marginBottom: '8px' }}>Tools</div>
            <div className="pill-container" style={{ marginTop: '0' }}>
              {['Git', 'GitHub', 'Postman', 'Vercel', 'AWS'].map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-container">
      <TechBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
      <CodingProfiles />
      <CredentialsSection />
      <TechnicalSkills />
      <Contact />
      
      <footer className="footer container">
        <p>Pragadeesh A S · Built from Resume · 2026</p>
      </footer>
    </div>
  );
}

export default App;
