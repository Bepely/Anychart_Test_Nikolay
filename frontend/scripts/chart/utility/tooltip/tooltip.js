import { getText1, getLine, getRect } from "../../shapes";
import { dataObj } from "../../../dataController";

export const createTooltip = (svg, minY, maxY, h) => {
  //make a tooltip config
  let tooltipX, tooltipY, tooltipW, tooltipH;

  //create an instance of a tooltip
  let tooltip = getText1();
  tooltip.setAttribute("x", 100);
  tooltip.setAttribute("y", 100);
  tooltip.setAttribute("font-size", "20");
  tooltip.setAttribute("fill", "black");
  tooltip.textContent = "Shalom";
  tooltip.style.pointerEvents = "none";
  svg.appendChild(tooltip);

  //get a range of values
  let yRange = maxY - minY;
  console.log(yRange);

  //update a tooltip value and position

  //get a triggerbox(plot) values
  const triggerBox = document.getElementById("triggerBox");
  const rectPos = triggerBox.getBoundingClientRect();

  triggerBox.addEventListener("mousemove", (e) => {
    const x = e.clientX - rectPos.left;
    const y = e.clientY - rectPos.top;
    // if the mouse in the area of "plot" - show tooltip
    if (
      x > 10 &&
      x < Math.floor(triggerBox.width.animVal.value) - 10 &&
      y > 10 &&
      y < Math.floor(triggerBox.height.animVal.value) - 10
    ) {
      tooltip.style.display = "block";
      tooltip.setAttribute("y", y);
      //maxY - (crosshairPositionY / yAxisHeight) * yRange;
      tooltip.textContent = (maxY - (y / (h * 0.9)) * yRange).toFixed(1);
    } else {
      tooltip.style.display = "none";
    }
  });
};

export const setTooltip = (tooltip, minY, maxY) => {};

export const getTooltip = () => {};
