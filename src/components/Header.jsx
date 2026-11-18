
import React, { useState, useEffect } from "react";
import { links } from "../data/navigation.js";

function Header({ theme, setTheme }) {
  const [active, setActive] = useState("home");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  const sections = links.map((link) =>
    link.href.replace("#", "")
  );

  const handleClick = (section) => {
    setActive(section);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const activationLine = window.innerHeight * 0.3;

        const visibleSection = sections
          .map((id) => document.getElementById(id))
          .filter(Boolean)
          .find((section) => {
            const rect = section.getBoundingClientRect();

            return (
              rect.top <= activationLine &&
              rect.bottom > activationLine
            );
          });

        if (visibleSection) {
          setActive(visibleSection.id);
        }
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px -1px 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="header">
      <nav className="navbar">

        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
        >
          <span className="brand-icon">
            <i className="fa-solid fa-code" />
          </span>

          <span className="brand-name">
            My<span>Portfolio</span>
          </span>
        </a>

        <div className="nav-menu">
          {links.map((link) => {
            const section = link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`navLinks ${
                  active === section ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(section);
                }}
              >
                <i className={link.icon} /> {link.label}
              </a>
            );
          })}
        </div>

        <button
          id="themeToggle"
          className="nav-cta theme-toggle"
          type="button"
          aria-label={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } mode`}
          onClick={toggleTheme}
        >
          <i
            className={`fas ${
              theme === "dark" ? "fa-sun" : "fa-moon"
            }`}
          />
          <span>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

      </nav>
    </header>
  );
}

export default Header;
