import React from "react";

function Skills(props) {
  return (
    <div className="skill-card" key={`${props.name}-${props.index}`}>
      <i className={props.icon} aria-hidden="true" />
      <h3>{props.name}</h3>
    </div>
  );
}

export default Skills;
