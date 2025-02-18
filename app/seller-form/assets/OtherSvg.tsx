import React from "react";

function OtherSvg() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "32px",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 512 512"
    >
      <title>ionicons-v5-o</title>
      <line x1="160" y1="144" x2="448" y2="144" style={svgStyle} />
      <line x1="160" y1="256" x2="448" y2="256" style={svgStyle} />
      <line x1="160" y1="368" x2="448" y2="368" style={svgStyle} />
      <circle cx="80" cy="144" r="16" style={svgStyle} />
      <circle cx="80" cy="256" r="16" style={svgStyle} />
      <circle cx="80" cy="368" r="16" style={svgStyle} />
    </svg>
  );
}

export default OtherSvg;
