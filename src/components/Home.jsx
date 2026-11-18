import React from "react";
import profile from "../data/Zeeshan.jpeg"

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="intro">Myself</p>
        <h1>
          M.Zeeshan
          <br />
          Inamdar
        </h1>
        <p className="description">
          I'm a creative web developer, working with passion and dedication to
          create beautiful and user-friendly digital experiences.
        </p>
        <a href="#projects" className="portfolio-btn">
          View Portfolio <span>↗</span>
        </a>
      </div>
      
      <div className="home-image">
        <img src={profile} alt="My Profile" />
        <div className="social-links">
          <a href="https://www.instagram.com/zeeshan.26_" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="https://github.com/mr-inamdar/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/zeeshan-inamdar-349b95377/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
