import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const githubUsername = "mr-inamdar";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState({ type: "loading", message: "Loading GitHub repositories..." });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function loadProjects() {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc&per_page=100`);
        if (!response.ok) throw new Error("Unable to fetch GitHub repositories.");
        const repos = (await response.json()).filter(repo => !repo.fork).slice(0, 6);
        if (!repos.length) { setStatus({ type: "error", message: "No public repositories found." }); return; }
        const data = await Promise.all(repos.map(async repo => {
          let languages = [];
          try {
            const res = await fetch(repo.languages_url);
            if (res.ok) languages = Object.keys(await res.json());
          } catch { /* Keep the project card even if language data is unavailable. */ }
          return { ...repo, languages };
        }));
        if (!cancelled) { setProjects(data); setStatus(null); setCurrent(0); }
      } catch (error) {
        if (!cancelled) setStatus({ type: "error", message: `${error.message} Please visit my GitHub profile.` });
      }
    }
    loadProjects();
    return () => { cancelled = true; };
  }, []);

  return <section className="projects-section" id="projects">
    <SectionHeading eyebrow="MY RECENT WORK" title="Featured" accent="Projects" description="Explore my projects directly from GitHub." />
    <div className="github-profile">
      <div className="github-icon"><i className="fa-brands fa-github" /></div>
      <div><h3>GitHub Repositories</h3><a href="https://github.com/mr-inamdar" target="_blank" rel="noreferrer">github.com/mr-inamdar ↗</a></div>
      <span className="github-status">Public Profile</span>
    </div>
    <div className="repo-section">
      <div className="projects-carousel">
        <button id="prevProject" className="carousel-btn prev-btn" aria-label="Previous projects" disabled={current === 0 || !projects.length}
          onClick={() => setCurrent(value => Math.max(0, value - 1))}>&#10094;</button>
        <div className="projects-viewport">
          <div className="projects-grid" id="github-projects" style={{ transform: `translateX(-${current * 100}%)` }}>
            {status ? <div className={status.type === "loading" ? "projects-loading" : "projects-error"}>{status.message}</div> : projects.map(repo => (
              <article className="project-card" key={repo.id}>
                <div className="project-preview">
                  <img src={`https://opengraph.githubassets.com/1/${repo.full_name}`} alt={`${repo.name} GitHub repository`} loading="lazy"
                    onError={event => { event.currentTarget.style.display = "none"; }} />
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{repo.name}</h3>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">↗ GitHub</a>
                  </div>
                  <p className="project-description">{repo.description || "No description available."}</p>
                  <div className="technology-used">
                    <strong>Technologies Used:</strong>
                    <div className="technology-list">
                      {(repo.languages.length ? repo.languages : ["Not specified"]).map(language => <span className="technology-tag" key={language}>{language}</span>)}
                    </div>
                  </div>
                  <div className="project-actions">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="project-link secondary">GitHub Repo ↗</a>
                    {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer" className="project-link">Live Demo ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button id="nextProject" className="carousel-btn next-btn" aria-label="Next projects" disabled={!projects.length || current >= projects.length - 1}
          onClick={() => setCurrent(value => Math.min(projects.length - 1, value + 1))}>&#10095;</button>
      </div>
      <div className="carousel-indicators" id="project-indicators">
        {projects.map((repo, index) => <button key={repo.id} className={`carousel-dot ${index === current ? "active" : ""}`}
          aria-label={`View project ${index + 1}`} onClick={() => setCurrent(index)} />)}
      </div>
    </div>
    <a href="https://github.com/mr-inamdar?tab=repositories" target="_blank" rel="noreferrer" className="all-projects-btn">View All Repositories ↗</a>
  </section>;
}

export default Projects;
