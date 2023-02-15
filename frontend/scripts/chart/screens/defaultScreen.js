export const getDefaultScreen = () => {
  fetch("/default.svg")
    .then((response) => response.text())
    .then((svgContent) => {
      // Create a new DOMParser object
      const parser = new DOMParser();
      // Parse the SVG content as an XML document
      const doc = parser.parseFromString(svgContent, "image/svg+xml");
      // Extract the desired elements from the document
      const group = doc.querySelector("#default");
      const backGroup = group.querySelector("#back");
      const centerCircle = group.querySelector("#center");
      const spinRect = group.querySelector("#spin");

      // Append the elements to the existing SVG element
      const svg = document.getElementById("svg");
      svg.innerHTML = "";
      svg.appendChild(group);
      backGroup.appendChild(centerCircle);
      backGroup.appendChild(spinRect);
    });
};
