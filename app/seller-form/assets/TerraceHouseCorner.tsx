import React from "react";

function TerraceHouseCorner() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>house-retro</title>
      <path
        d="M2.5,13.5v7a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1v-7"
        style={svgStyle}
      />
      <path
        d="M8.5,13.5H1.258A.5.5,0,0,1,.8,12.8l2.571-6a.5.5,0,0,1,.46-.3H9.652"
        style={svgStyle}
      />
      <path
        d="M14.348,6.5H20.17a.5.5,0,0,1,.46.3l2.571,6a.5.5,0,0,1-.459.7H15.5"
        style={svgStyle}
      />
      <line x1="4.5" y1="2.5" x2="4.5" y2="6.5" style={svgStyle} />
      <line x1="6.5" y1="6.5" x2="6.5" y2="2.5" style={svgStyle} />
      <line x1="3.516" y1="2.5" x2="7.5" y2="2.5" style={svgStyle} />
      <line x1="17.5" y1="2.5" x2="17.5" y2="6.5" style={svgStyle} />
      <line x1="19.5" y1="6.5" x2="19.5" y2="2.5" style={svgStyle} />
      <line x1="16.516" y1="2.5" x2="20.5" y2="2.5" style={svgStyle} />
      <line x1="8.5" y1="10.5" x2="8.5" y2="21.5" style={svgStyle} />
      <line x1="15.5" y1="21.5" x2="15.5" y2="10.5" style={svgStyle} />
      <path
        d="M11.607,4.019a.5.5,0,0,1,.786,0l4.469,5.672a.5.5,0,0,1-.393.809H7.531a.5.5,0,0,1-.393-.809Z"
        style={svgStyle}
      />
      <rect x="17.5" y="15.5" width="2" height="2" style={svgStyle} />
      <rect x="4.5" y="15.5" width="2" height="2" style={svgStyle} />
      <path d="M13.5,21.5V17a1.5,1.5,0,0,0-3,0v4.5" style={svgStyle} />
    </svg>
  );
}

export default TerraceHouseCorner;
