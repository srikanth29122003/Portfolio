import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title slide-up">About Me</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content slide-up">
              <p className="lead mb-4">
                I'm <strong>Srikanth</strong>, a passionate full-stack developer skilled in both 
                frontend and backend development. I specialize in Java, SQL, React, and web 
                technologies like HTML, CSS, and JavaScript.
              </p>
              <p className="mb-4">
                As a fresher, I bring energy, dedication, and a constant desire to learn. 
                I've developed real-time projects including a <strong>Blood Connect website, 
                Login Authentication system, and a Shopping Cart using external APIs.</strong>
              </p>
              <p className="mb-4">
                I'm currently looking for entry-level opportunities where I can grow and 
                contribute to impactful development work.
              </p>
              
              <div className="row mt-4">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <strong><i className="fas fa-graduation-cap text-primary me-2"></i>Education:</strong>
                    <p className="mb-0">Electronics and Communication Engineering (ECE) Graduate</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <strong><i className="fas fa-map-marker-alt text-primary me-2"></i>Location:</strong>
                    <p className="mb-0">Available for Remote/Onsite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-stats slide-up">
              <div className="row">
                <div className="col-6">
                  <div className="stat-item text-center p-3 mb-3 bg-light rounded">
                    <h3 className="text-primary mb-1">5+</h3>
                    <p className="mb-0">Projects Completed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item text-center p-3 mb-3 bg-light rounded">
                    <h3 className="text-primary mb-1">3+</h3>
                    <p className="mb-0">Technologies Mastered</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item text-center p-3 mb-3 bg-light rounded">
                    <h3 className="text-primary mb-1">100%</h3>
                    <p className="mb-0">Dedication</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item text-center p-3 mb-3 bg-light rounded">
                    <h3 className="text-primary mb-1">∞</h3>
                    <p className="mb-0">Learning Mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
