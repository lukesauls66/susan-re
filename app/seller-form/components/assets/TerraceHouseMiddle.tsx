import React from "react";

function TerraceHouseMiddle() {
  const svgStyle = {
    fill: "none",
    stroke: "#C8373E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>house-apartment</title>
      <path
        d="M1.5,10.5V23a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5V10.5"
        style={svgStyle}
      />
      <path
        d="M7.527,10.5a.5.5,0,0,0,.5-.444,4,4,0,0,1,7.952,0,.5.5,0,0,0,.5.444h6.288a.5.5,0,0,0,.465-.686l-3.6-9A.5.5,0,0,0,19.161.5H4.839a.5.5,0,0,0-.465.314l-3.6,9a.5.5,0,0,0,.465.686Z"
        style={svgStyle}
      />
      <path
        d="M13.5,11a1.5,1.5,0,0,0-3,0v3a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5Z"
        style={svgStyle}
      />
      <path d="M10.5,23.5V20a1.5,1.5,0,0,1,3,0v3.5" style={svgStyle} />
      <rect
        x="16.5"
        y="17.5"
        width="4"
        height="3"
        rx="0.5"
        ry="0.5"
        style={svgStyle}
      />
      <rect
        x="16.5"
        y="12.5"
        width="4"
        height="3"
        rx="0.5"
        ry="0.5"
        style={svgStyle}
      />
      <rect
        x="3.5"
        y="17.5"
        width="4"
        height="3"
        rx="0.5"
        ry="0.5"
        style={svgStyle}
      />
      <rect
        x="3.5"
        y="12.5"
        width="4"
        height="3"
        rx="0.5"
        ry="0.5"
        style={svgStyle}
      />
    </svg>
  );
}

export default TerraceHouseMiddle;
