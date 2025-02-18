import React from "react";

function DetachedHouseIcon() {
  const svgStyle = {
    fill: "none",
    stroke: "red",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs></defs>
      <title>house-3</title>
      <line x1="0.5" y1="21.189" x2="23.5" y2="21.189" style={svgStyle} />
      <line x1="3.5" y1="11.189" x2="3.5" y2="21.189" style={svgStyle} />
      <line x1="20.5" y1="21.189" x2="20.5" y2="11.189" style={svgStyle} />
      <path
        d="M12.3,2.909a.5.5,0,0,0-.594,0L1.72,10.287a.5.5,0,0,0,.3.9H21.982a.5.5,0,0,0,.3-.9Z"
        style={svgStyle}
      />
      <path
        d="M20.5,8.98V4.689a.5.5,0,0,0-.5-.5H18a.5.5,0,0,0-.5.5V6.767"
        style={svgStyle}
      />
      <path
        d="M10.5,19.189v-4.5a.5.5,0,0,0-.5-.5H7a.5.5,0,0,0-.5.5v4.5"
        style={svgStyle}
      />
      <rect
        x="13.5"
        y="14.189"
        width="5"
        height="4"
        rx="0.5"
        ry="0.5"
        style={svgStyle}
      />
      <path
        d="M5.5,21.189v-1.5a.5.5,0,0,1,.5-.5h5a.5.5,0,0,1,.5.5v1.5"
        style={svgStyle}
      />
    </svg>
  );
}

export default DetachedHouseIcon;
