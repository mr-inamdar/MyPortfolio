import React from "react";

function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">
        <h2>M.Zeeshan Inamdar<span>.</span></h2>
        <p>Creating meaningful digital experiences through creativity, technology and innovation.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/zeeshan-inamdar-349b95377/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" /></a>
          <a href="https://github.com/mr-inamdar/" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
          <a href="https://www.instagram.com/zeeshan.26_" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
          <a href="#projects">↗</a>
        </div>
      </div>
      <div className="footer-links"><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About Me</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      <div className="footer-links"><h3>My Skills</h3><a href="#about">Web Development</a><a href="#about">Frontend Development</a><a href="#about">Backend Development</a><a href="#about">Problem Solving</a></div>
      <div className="footer-contact"><h3>Let's Connect</h3><p>Have a project or collaboration idea?</p><a href="mailto:hello@example.com" className="email-link">hello@example.com</a><a href="mailto:hello@example.com" className="footer-btn">Let's Talk ↗</a></div>
    </div>
    <div className="footer-bottom"><p>© 2026 M.Zeeshan Inamdar. All Rights Reserved.</p><p>Made with <span>♥</span> and creativity.</p><a href="#home">Back to Top ↑</a></div>
  </footer>;
}

export default Footer;
