//This script is holding graphics object to be rendered

//svg uri
const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace URI

//blue rect
export const getBlueRect = () => {
  const blueRect = document.createElementNS(svgNS, "rect");
  blueRect.setAttribute("x", "10");
  blueRect.setAttribute("y", "10");
  blueRect.setAttribute("width", "30");
  blueRect.setAttribute("height", "30");
  blueRect.setAttribute("stroke", "blue");
  blueRect.setAttribute("fill", "transparent");
  blueRect.setAttribute("stroke-width", "5");
  return blueRect;
};

//red circle
export const getRedCircle = () => {
  const redCircle = document.createElementNS(svgNS, "circle");
  redCircle.setAttribute("cx", "25");
  redCircle.setAttribute("cy", "75");
  redCircle.setAttribute("r", "20");
  redCircle.setAttribute("stroke", "red");
  redCircle.setAttribute("fill", "transparent");
  redCircle.setAttribute("stroke-width", "5");
  return redCircle;
};

export const getMarker = (x, y) => {
  const marker = document.createElementNS(svgNS, "circle");
  marker.setAttribute("r", "5");
  marker.setAttribute("cx", x);
  marker.setAttribute("cy", y);
  marker.setAttribute("stroke", "black");
  marker.setAttribute("fill", "white");
  marker.setAttribute("stroke-width", "2");
  return marker;
};

export const getLine = (startX, startY, endX, endY) => {
  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", `${startX}`);
  line.setAttribute("x2", `${endX}`);
  line.setAttribute("y1", `${startY}`);
  line.setAttribute("y2", `${endY}`);
  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("fill", "none");
  return line;
};
