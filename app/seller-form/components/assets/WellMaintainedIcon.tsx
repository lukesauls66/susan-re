import React from "react";

function WellMaintainedIcon() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>house-heart</title>
      <path
        d="M3.5,13v9a1,1,0,0,0,1,1h15a1,1,0,0,0,1-1V13.5"
        style={svgStyle}
      />
      <polyline points="0.5 12.5 12 1 23.5 12.5" style={svgStyle} />
      <path d="M16,2h3a.5.5,0,0,1,.5.5v3" style={svgStyle} />
      <path
        d="M17,13.61C17,16.2,12.859,19.3,12.305,19.7l-.024.019a.475.475,0,0,1-.562,0L11.7,19.7C11.141,19.3,7,16.2,7,13.61a2.834,2.834,0,0,1,2.73-2.98A2.657,2.657,0,0,1,12,12a2.657,2.657,0,0,1,2.27-1.37A2.834,2.834,0,0,1,17,13.61Z"
        style={svgStyle}
      />
    </svg>
  );
}

export default WellMaintainedIcon;
