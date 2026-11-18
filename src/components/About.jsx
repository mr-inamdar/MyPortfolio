import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import Skills from "./Skill.jsx";

const skills = [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "C++", icon: "fa-solid fa-code" },
      { name: "C", icon: "fa-solid fa-c" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "HTML", icon: "fa-brands fa-html5" },
      { name: "CSS", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "React JS", icon: "fa-brands fa-react" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "Jinja", icon: "fa-solid fa-code" },
      { name: "Node JS", icon: "fa-brands fa-node-js" },
      { name: "Express JS", icon: "fa-solid fa-server" },
      { name: "Django", icon: "fa-brands fa-python" },
      { name: "Flask", icon: "fa-brands fa-python" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
];

const coreSubjects = [
  { name: "Data Structures & Algorithms", icon: "fa-solid fa-diagram-project" },
  { name: "Object-Oriented Programming", icon: "fa-solid fa-cubes" },
  { name: "Operating Systems", icon: "fa-solid fa-desktop" },
  { name: "Computer Networking", icon: "fa-solid fa-network-wired" },
  { name: "Digital Marketing", icon: "fa-solid fa-bullhorn" },
  { name: "E-Commerce", icon: "fa-solid fa-cart-shopping" },
  { name: "Cloud Computing", icon: "fa-solid fa-cloud" },
  { name: "IoT", icon: "fa-solid fa-microchip" },
  { name: "AIML", icon: "fa-solid fa-brain" },
  { name: "DBMS", icon: "fa-solid fa-database" },
];

const details = [
  {
    number: "01",
    title: "Development",
    description: "Building functional and responsive applications.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description: "Enjoying challenges and finding practical solutions.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description: "Exploring new tools and modern technologies.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <SectionHeading eyebrow="GET TO KNOW ME" title="About" accent="Me" />

      <div className="about-super-container">
        <div className="about-content">
          <div className="about-text">
            <h3>Hello, I'm M.Zeeshan Inamdar</h3>
            <p>
              I'm a passionate developer interested in building modern websites
              and software applications. I enjoy solving problems, learning new
              technologies and transforming ideas into real-world projects.
            </p>
            <p>
              My focus is on writing clean code, developing responsive interfaces
              and creating meaningful digital experiences.
            </p>
            <a href="#contact" className="about-btn">
              Let's Connect ↗
            </a>
          </div>

          <div className="about-details">
            {details.map((detail) => (
              <div className="detail-card" key={detail.number}>
                <span>{detail.number}</span>
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-skils">
          <div className="skils-container">
            <div className="skills-section" id="skills">
              <SectionHeading eyebrow="WHAT I WORK WITH" title="My" accent="Skills" />
              <div className="skills-grid">
                  {skills.map((skill, index)=>(
                      <Skills key={index} index={index} name={skill.name} icon={skill.icon} />
                  ))}
              </div>
            </div>
          </div>
          <div className="core-skils-container">
            <div className="skills-section" id="skills">
              <SectionHeading eyebrow="WHAT I STUDY" title="My" accent="Core Subjects" />
              <div className="skills-grid">
                  {coreSubjects.map((sub, index)=>(
                      <Skills key={index} index={index} name={sub.name} icon={sub.icon} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
