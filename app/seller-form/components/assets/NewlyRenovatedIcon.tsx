import React from "react";

function NewlyRenovatedIcon() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>project-plan-pen</title>
      <line x1="7.104" y1="9.396" x2="12.104" y2="9.396" style={svgStyle} />
      <path
        d="M15.1,6.4,20.75.75a.5.5,0,0,1,.707,0L22.75,2.043a.5.5,0,0,1,0,.707L17.1,8.4l-3,1Z"
        style={svgStyle}
      />
      <line x1="15.104" y1="6.396" x2="17.104" y2="8.396" style={svgStyle} />
      <path
        d="M3.1,16.2V22.9a.5.5,0,0,0,.5.5h8a.5.5,0,0,0,.5-.5V16.2"
        style={svgStyle}
      />
      <path
        d="M1.1,17.9,7.281,12.67a.5.5,0,0,1,.646,0L14.1,17.9"
        style={svgStyle}
      />
      <path d="M9.1,23.4h-3v-3a1.5,1.5,0,1,1,3,0Z" style={svgStyle} />
      <line x1="5.104" y1="9.396" x2="4.104" y2="9.396" style={svgStyle} />
    </svg>
  );
}

export default NewlyRenovatedIcon;
