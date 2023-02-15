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
