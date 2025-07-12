
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
              <h1 className="hero-title">
                Hi, I'm <span className="text-warning">Srikanth E M</span>
              </h1>
              <h2 className="hero-subtitle">
                Full Stack Developer | Java & React Enthusiast
              </h2>
              <p className="hero-description">
                I build user-friendly, efficient web and Java-based applications. 
                Passionate about learning, solving problems, and building real-world projects.
              </p>
              <div className="hero-buttons">
                <a 
                  href="#projects" 
                  className="btn-custom btn-primary-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <i className="fas fa-eye me-2"></i>
                  View My Work
                </a>
                <a 
                  href="/public/Srikanth_resume (2).pdf"  
                  className="btn-custom btn-outline-custom" download
                >
                  <i className="fas fa-download me-2"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
