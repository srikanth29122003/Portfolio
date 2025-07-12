import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const technicalSkills = [
    { name: 'Java', level: 85, icon: 'fab fa-java' },
    { name: 'React.js', level: 80, icon: 'fab fa-react' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'SQL & JDBC', level: 75, icon: 'fas fa-database' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' }
  ];

  const tools = [
    { name: 'VS Code', icon: 'fas fa-code' },
    { name: 'Eclipse IDE', icon: 'fas fa-laptop-code' },
    { name: 'MySQL Workbench', icon: 'fas fa-database' },
    { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
    { name: 'Swagger UI', icon: 'fas fa-book' },
    { name: 'React Dev Tools', icon: 'fab fa-react' }
  ];

  const softSkills = [
    'Team Collaboration',
    'Problem Solving',
    'Quick Learner',
    'Communication',
    'Time Management',
    'Adaptability'
  ];

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">

        <div className="row" data-aos="fade-up">
          <div className="col-12 text-center">
            <h2 className="section-title slide-up">Skills & Technologies</h2>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-right">
            <h3 className="h4 mb-4">
              <i className="fas fa-code text-primary me-2"></i>
              Technical Skills
            </h3>
          </div>

          {technicalSkills.map((skill, index) => (
            <div key={index} className="col-lg-6 mb-4" data-aos="zoom-in">
              <div className="skill-item p-3 bg-white shadow-sm rounded">
                <div className="d-flex align-items-center mb-3">
                  <i className={`${skill.icon} skill-icon me-3`}></i>
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{skill.name}</h5>
                    <div className="progress" style={{ height: '8px' }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin={0} 
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <span className="badge bg-primary ms-2">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-left">
            <h3 className="h4 mb-4">
              <i className="fas fa-tools text-primary me-2"></i>
              Tools & Software
            </h3>
          </div>

          {tools.map((tool, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-3" data-aos="flip-up">
              <div className="skill-item text-center p-3 bg-white shadow rounded">
                <i className={`${tool.icon} skill-icon fs-3`}></i>
                <h6 className="mt-2 mb-0">{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="row" data-aos="fade-up">
          <div className="col-12 text-center">
            <h3 className="h4 mb-4">
              <i className="fas fa-user-friends text-primary me-2"></i>
              Soft Skills
            </h3>
          </div>

          <div className="col-12">
            <div className="row justify-content-center">
              {softSkills.map((skill, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-3" data-aos="zoom-in-up">
                  <div className="badge bg-primary p-3 w-100">
                    <i className="fas fa-check-circle me-2"></i>
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
