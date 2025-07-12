import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Blood Connect Website",
      description: "A web platform where users can register as blood donors or search for nearby donors by location and blood group. Includes login, search, and filter functionalities.",
      technologies: ["HTML", "CSS", "React JS", "External APIs"],
      icon: "fas fa-heart",
      color: "text-danger",
      animation: "fade-up"
    },
    {
      title: "Login Authentication System",
      description: "Implemented a secure login and registration system with form validation and password handling, built with React and mock API integration.",
      technologies: ["Java", "JDBC", "JSP", "Servlets", "MySQL"],
      icon: "fas fa-user-lock",
      color: "text-secondary",
      animation: "fade-right"
    },
    {
      title: "Shopping Cart Website",
      description: "Frontend cart system where users can add products, view total cost, and remove items dynamically with modern UI/UX.",
      technologies: ["HTML", "CSS", "JavaScript", "External APIs"],
      icon: "fas fa-shopping-cart",
      color: "text-warning",
      animation: "fade-left"
    },
    {
      title: "Portfolio Website",
      description: "A stylish and modern portfolio website built using React, Bootstrap, and animations to showcase skills, projects, and resume.",
      technologies: ["React JS", "Bootstrap", "HTML", "CSS", "JavaScript"],
      icon: "fas fa-user-circle",
      color: "text-info",
      animation: "zoom-in-up"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="row mb-4" data-aos="fade-down">
          <div className="col-12 text-center">
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-6 col-md-6 mb-4"
              data-aos={project.animation}
            >
              <div className="project-card h-100 shadow-sm border rounded p-3 bg-white">
                <div className="card-body d-flex flex-column">
                  <div className="text-center mb-3">
                    <i
                      className={`${project.icon} ${project.color}`}
                      style={{ fontSize: '3rem' }}
                    ></i>
                  </div>
                  <h5 className="card-title text-center mb-3">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>

                  <div className="technologies mb-3">
                    <h6 className="mb-2">
                      <i className="fas fa-cog text-primary me-2"></i>
                      Technologies:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-light text-dark border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <button
                      className="btn btn-primary flex-fill"
                      onClick={() => alert(`${project.title} - Demo functionality can be added here`)}
                    >
                      <i className="fas fa-eye me-2"></i>
                      View Demo
                    </button>
                    <button
                      className="btn btn-outline-primary flex-fill"
                      onClick={() => alert(`${project.title} - GitHub link can be added here`)}
                    >
                      <i className="fab fa-github me-2"></i>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="text-center p-5 bg-light rounded"
              data-aos="fade-up"
            >
              <i className="fas fa-file-download text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h3 className="mb-3">📜 Resume</h3>
              <p className="lead mb-4">
                Looking for entry-level roles in Java, Web Development, or Full Stack. Available immediately.
              </p>
              <a
                href="/Srikanth_resume (2).pdf"
                className="btn btn-primary btn-lg"
                download
              >
                <i className="fas fa-download me-2"></i>
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
