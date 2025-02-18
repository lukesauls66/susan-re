import React from "react";

function NeedsRenovationIcon() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>color-rolling-brush</title>
      <path
        d="M13,13.5a2,2,0,0,0-2,2v6a2,2,0,0,0,4,0v-6A2,2,0,0,0,13,13.5Z"
        style={svgStyle}
      />
      <path
        d="M5,3.5H4a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h8a1,1,0,0,1,1,1v2.938"
        style={svgStyle}
      />
      <rect
        x="5"
        y="0.5"
        width="15"
        height="6"
        rx="1"
        ry="1"
        style={svgStyle}
      />
      <line x1="20" y1="3.5" x2="21" y2="3.5" style={svgStyle} />
    </svg>
  );
}

export default NeedsRenovationIcon;
