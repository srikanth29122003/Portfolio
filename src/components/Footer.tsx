
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              © {currentYear} Srikanth E M | Designed with 💙 using React & Bootstrap
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/srikanth-em/" className="text-white me-3" target='_blank'>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/srikanth29122003/" className="text-white me-3" target='_blank'>
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:srikanthmarimuthu29@gmail.com" className="text-white">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
