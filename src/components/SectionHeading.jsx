import React from "react";

function SectionHeading({ eyebrow, title, accent, description }) {
  return <div className="section-heading">
    <span>{eyebrow}</span>
    <h2>{title} <span>{accent}</span></h2>
    {description && <p>{description}</p>}
  </div>;
}

export default SectionHeading;
