import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToGoogle = new FormData();
    formDataToGoogle.append('entry.1951864752', formData.name);     // Name
    formDataToGoogle.append('entry.690577127', formData.email);     // Email
    formDataToGoogle.append('entry.1330645395', formData.message);  // Message

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSePfjR1HBkE0Va1Q58gle7DOiP8BOFcxV-FAqNNS2EmNr7Ccg/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToGoogle,
      });

      alert(`Thank you ${formData.name}! Your message has been submitted.`);
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'srikanthmarimuthu29@gmail.com',
      link: 'mailto:srikanthmarimuthu29@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Connect with me on LinkedIn',
      link: 'https://www.linkedin.com/in/srikanth-em/'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'Check out my repositories',
      link: 'https://github.com/srikanth29122003/'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title slide-up">Let's Connect!</h2>
            <p className="text-center lead mb-5">
              Have a project or opportunity? Feel free to reach out.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-6 mb-4">
            <div className="contact-info slide-up">
              <h4 className="mb-4">
                <i className="fas fa-address-card text-primary me-2"></i>
                Get In Touch
              </h4>

              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <i className={info.icon}></i>
                  <div>
                    <h6 className="mb-1">{info.label}</h6>
                    <a
                      href={info.link}
                      className="text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <h6 className="mb-3">Follow Me:</h6>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/__.sk.___07"
                    className="btn btn-outline-danger btn-sm me-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100023554880806"
                    className="btn btn-outline-primary btn-sm me-2 mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-info form-custom slide-up">
              <h4 className="mb-4">
                <i className="fas fa-paper-plane text-primary me-2"></i>
                Send Message
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="you can send message...."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
