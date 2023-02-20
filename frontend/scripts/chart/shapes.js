//This script is holding graphics object to be rendered

//svg uri
const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace URI

export const getMarker = (x, y) => {
  const marker = document.createElementNS(svgNS, "circle");
  marker.setAttribute("r", "5");
  marker.setAttribute("cx", x);
  marker.setAttribute("cy", y);
  marker.setAttribute("stroke", "black");
  marker.setAttribute("fill", "black");
  marker.setAttribute("stroke-width", "2");
  marker.setAttribute("class", "marker");

  marker.addEventListener("mousemove", (e) =>
    console.log("Marker mouseMove emit")
  );
  marker.addEventListener("mouseout", () => console.log("Maker mouseOut emit"));
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

export const getRect = (x, y, width, height) => {
  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", `${x}`);
  rect.setAttribute("y", `${y}`);
  rect.setAttribute("width", `${width}`);
  rect.setAttribute("height", `${height}`);
  rect.setAttribute("stroke", "none");
  rect.setAttribute("fill", "transparent");
  return rect;
};
export const getText1 = () => {
  const text = document.createElementNS(svgNS, "text");
  return text;
};
