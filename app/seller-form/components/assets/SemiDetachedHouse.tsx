import React from "react";

function SemiDetachedHouse() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>buildings-modern</title>
      <path
        d="M11,23a.5.5,0,0,1-.5.5h-8A.5.5,0,0,1,2,23V6.825a.5.5,0,0,1,.3-.457l8-3.556a.5.5,0,0,1,.7.457Z"
        style={svgStyle}
      />
      <path
        d="M8,23.5V21a.5.5,0,0,0-.5-.5h-2A.5.5,0,0,0,5,21v2.5"
        style={svgStyle}
      />
      <line x1="5" y1="0.5" x2="5" y2="5.167" style={svgStyle} />
      <line x1="11" y1="9.5" x2="7" y2="9.5" style={svgStyle} />
      <line x1="11" y1="11.5" x2="5" y2="11.5" style={svgStyle} />
      <line x1="11" y1="7.5" x2="8" y2="7.5" style={svgStyle} />
      <path
        d="M22,23a.5.5,0,0,1-.5.5h-7A.5.5,0,0,1,14,23V8.4a.5.5,0,0,1,.765-.424L22,12.5Z"
        style={svgStyle}
      />
      <path d="M21,11.875V9a.5.5,0,0,0-.5-.5H15.6" style={svgStyle} />
      <polyline points="19 23.5 19 20.5 17 20.5 17 23.5" style={svgStyle} />
      <line x1="14" y1="13.5" x2="17" y2="13.5" style={svgStyle} />
      <line x1="14" y1="15.5" x2="19" y2="15.5" style={svgStyle} />
    </svg>
  );
}

export default SemiDetachedHouse;
