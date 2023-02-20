import { getLine, getMarker } from "../shapes";

export const linearDiagram = (svg, coordinates) => {
  //creating coordinates

  for (let i = 0; i < coordinates.length - 1; i++) {
    //here should be a group elemet creation
    //-------------------------------------

    //setting start and end points
    const startX =
      coordinates[i][0] -
      (coordinates[i][0] - coordinates[i][0] * 0.8) +
      1024 * 0.1;
    const startY =
      coordinates[i][1] - (coordinates[i][1] - coordinates[i][1] * 0.9);
    const endX =
      coordinates[i + 1][0] -
      (coordinates[i + 1][0] - coordinates[i + 1][0] * 0.8) +
      1024 * 0.1;
    const endY =
      coordinates[i + 1][1] -
      (coordinates[i + 1][1] - coordinates[i + 1][1] * 0.9);
    //creating line
    const line = getLine(startX, startY, endX, endY);

    line.setAttribute("id", `line${i}`);
    line.setAttribute("class", "chartLine");

    //creating marker
    let marker = getMarker(startX, startY);
    svg.appendChild(marker);
    svg.appendChild(line);

    //if it is the last iteration of a loop
    //create an additional last marker
    if (i == coordinates.length - 2) {
      marker = getMarker(endX, endY);

      svg.appendChild(marker);
      svg.appendChild(line);
    }
  }
};
