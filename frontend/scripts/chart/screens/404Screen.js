export const get404Screen = () => {
  fetch("/404.svg")
    .then((response) => response.text())
    .then((svgContent) => {
      // Create a new DOMParser object
      const parser = new DOMParser();
      // Parse the SVG content as an XML document
      const doc = parser.parseFromString(svgContent, "image/svg+xml");
      // Extract the desired elements from the document
      const group = doc.querySelector("#err404");
      const crossGroup = group.querySelector("#cross");
      const line1 = crossGroup.querySelector("#Line1");
      const line2 = crossGroup.querySelector("#Line2");

      // Append the elements to the existing SVG element
      const svg = document.getElementById("svg");
      svg.innerHTML = "";
      svg.appendChild(group);
      svg.appendChild(crossGroup);
      crossGroup.appendChild(line1);
      crossGroup.appendChild(line2);
    });
};
