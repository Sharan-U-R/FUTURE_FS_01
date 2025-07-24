import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const form = e.target;
    const formData = new FormData(form);
    
    // Convert FormData to regular object
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Using Web3Forms (free alternative)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f4922cc5-5e54-44a3-990f-818ed734fe25',
          name: data.name,
          email: data.email,
          message: data.message,
          to: 'sharanur174@gmail.com'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title white">Get In Touch</h2>
          <div className="section-divider white"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p className="contact-desc">
              I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and web development.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon email-contact"><i className="fas fa-envelope"></i></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:sharanur174@gmail.com" className="contact-link">sharanur174@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon phone-contact"><i className="fas fa-phone"></i></div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+919538304519" className="contact-link">+91 9538304519</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon github-contact"><i className="fab fa-github"></i></div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a href="https://github.com/Sharan-U-R" target="_blank" rel="noopener noreferrer" className="contact-link">https://github.com/Sharan-U-R</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon linkedin-contact"><i className="fab fa-linkedin"></i></div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/sharan-u-r-9b4924296" target="_blank" rel="noopener noreferrer" className="contact-link">https://linkedin.com/in/sharan-u-r...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="form-status success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-status error">
                  <i className="fas fa-exclamation-circle"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;