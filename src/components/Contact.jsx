import React from "react";
import SectionHeading from "./SectionHeading.jsx";

function Contact() {
  return <section className="contact-section" id="contact">
    <SectionHeading eyebrow="GET IN TOUCH" title="Let's" accent="Connect" description="Have a project or an idea? Feel free to contact me." />
    <div className="contact-container">
      <div className="contact-info">
        <h3>Let's Work Together</h3>
        <p>I'm always interested in discussing new projects, creative ideas and opportunities.</p>
        <div className="contact-detail"><div className="contact-icon">@</div><div><span>Email Me</span><a href="mailto:zinamdar2602@gmail.com">zinamdar2602@gmail.com</a></div></div>
        <div className="contact-detail"><div className="contact-icon">GH</div><div><span>GitHub</span><a href="https://github.com/mr-inamdar" target="_blank" rel="noreferrer">github.com/mr-inamdar</a></div></div>
        <div className="contact-detail"><div className="contact-icon">in</div><div><span>LinkedIn</span><a href="https://www.linkedin.com/in/zeeshan-inamdar-349b95377/" target="_blank" rel="noreferrer">Connect with me</a></div></div>
      </div>
      <form className="contact-form" action="https://formsubmit.co/zinamdar2602@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
        <input type="hidden" name="_captcha" value="false" />
        <div className="form-row">
          <div className="form-group"><label htmlFor="name">Your Name</label><input type="text" id="name" name="name" placeholder="Enter your name" required /></div>
          <div className="form-group"><label htmlFor="email">Your Email</label><input type="email" id="email" name="email" placeholder="Enter your email" required /></div>
        </div>
        <div className="form-group"><label htmlFor="subject">Subject</label><input type="text" id="subject" name="subject" placeholder="Enter subject" required /></div>
        <div className="form-group"><label htmlFor="message">Your Message</label><textarea id="message" name="message" rows="6" placeholder="Write your message here..." required /></div>
        <button type="submit" className="send-btn">Send Message ↗</button>
      </form>
    </div>
  </section>;
}

export default Contact;
