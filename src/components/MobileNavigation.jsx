import React, { useState } from "react";
import { links } from "../data/navigation.js";

const colors = ["#f44336", "#ffa117", "#0fc70f", "#2196f3"];
const mobileIcons = [
  "fa-regular fa-house",
  "fa-regular fa-user",
  "fa-duotone fa-solid fa-diagram-project",
  "fa-solid fa-paper-plane",
];

function MobileNavigation() {
  const [active, setActive] = useState("#home");

  return (
    <div className="mobile-navigation">
      <ul>
        {links.map((link, index) => (
          <li
            key={link.href}
            className={`list ${active === link.href ? "active" : ""}`}
            style={{ "--clr": colors[index] }}
          >
            <a
              href={link.href}
              aria-label={link.label}
              onClick={() => setActive(link.href)}
            >
              <span className="icon">
                <i className={mobileIcons[index]} />
              </span>
            </a>
          </li>
        ))}
        <div className="indicator" />
      </ul>
    </div>
  );
}

export default MobileNavigation;
