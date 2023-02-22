import { getText1, getLine, getRect } from "../../shapes";
import { dataObj } from "../../../dataController";

let toggleX = document.getElementById("yCrosshairToggle");
let toggleY = document.getElementById("xCrosshairToggle");

toggleX.addEventListener("change", () => {
  dataObj.methods.crosshair.setX();
});
toggleY.addEventListener("change", () => {
  dataObj.methods.crosshair.setY();
});

//This script is to show tooltip, when it is hovered over the marker
export const getCrosshair = (svg) => {
  const rectPos = document.getElementById("triggerBox").getBoundingClientRect();

  // create the vertical and horizontal line and add it to the SVG
  const verticalLine = getLine(0, 0, 0, 0);
  const horizontalLine = getLine(0, 0, 0, 0);

  //config Horizontal line
  horizontalLine.setAttribute("stroke", "black");
  horizontalLine.setAttribute("stroke-width", 2);
  horizontalLine.setAttribute("display", "none");
  horizontalLine.style.pointerEvents = "none";
  svg.appendChild(horizontalLine);

  //config Vertical line
  verticalLine.setAttribute("stroke", "black");
  verticalLine.setAttribute("stroke-width", 2);
  verticalLine.setAttribute("display", "none");
  verticalLine.style.pointerEvents = "none";
  svg.appendChild(verticalLine);

  // add event listeners to show and update the vertical line
  triggerBox.addEventListener("mousemove", (e) => {
    const x = e.clientX - rectPos.left;
    const y = e.clientY - rectPos.top;
    // if the mouse in the area of "plot" - show lines
    if (
      x > 10 &&
      x < Math.floor(triggerBox.width.animVal.value) - 10 &&
      y > 10 &&
      y < Math.floor(triggerBox.height.animVal.value) - 10
    ) {
      //vertical lines position
      if (dataObj.data.crosshair.lineX) {
        verticalLine.setAttribute("x1", x + 1024 * 0.1);
        verticalLine.setAttribute("x2", x + 1024 * 0.1);
        verticalLine.setAttribute("y1", 0);
        verticalLine.setAttribute("y2", 512 * 0.9);
        verticalLine.style.display = "block";
      } else {
        verticalLine.style.display = "none";
      }

      //horizontal lines position
      if (dataObj.data.crosshair.lineY) {
        horizontalLine.setAttribute("x1", 0 + 1024 * 0.1);
        horizontalLine.setAttribute("x2", 1024 - 1024 * 0.1);
        horizontalLine.setAttribute("y1", y);
        horizontalLine.setAttribute("y2", y);
        horizontalLine.style.display = "block";
      } else {
        horizontalLine.style.display = "none";
      }
    } else {
      verticalLine.style.display = "none";
      horizontalLine.style.display = "none";
    }
  });
};
