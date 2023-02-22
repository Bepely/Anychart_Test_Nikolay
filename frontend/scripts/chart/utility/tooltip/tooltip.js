import { getText1, getLine, getRect } from "../../shapes";
import { dataObj } from "../../../dataController";

export const createTooltip = (svg, minY, maxY, h) => {
  //make a tooltip config
  let tooltipX, tooltipY, tooltipW, tooltipH;

  let backTooltip = getRect(0, 0, 1024 * 0.1, 512 * 0.1);
  backTooltip.setAttribute("fill", "aqua");
  backTooltip.style.pointerEvents = "none";
  backTooltip.style.position = "relative";
  backTooltip.style.zIndex = 0;
  backTooltip.style.display = "none";
  svg.appendChild(backTooltip);

  //create an instance of a tooltip
  let tooltip = getText1();
  tooltip.setAttribute("x", 100);
  tooltip.setAttribute("y", 100);
  tooltip.setAttribute("font-size", "20");
  tooltip.setAttribute("fill", "black");
  tooltip.textContent = "Shalom";
  tooltip.style.pointerEvents = "none";
  tooltip.style.position = "relative";
  tooltip.style.zIndex = 1;
  tooltip.style.display = "none";
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
      //show a text of a tooltip
      tooltip.style.display = "block";
      tooltip.setAttribute("y", y + h * 0.1);
      tooltip.setAttribute("x", x + 1024 * 0.1);

      tooltip.textContent = `Y: ${(maxY - (y / (h * 0.9)) * yRange).toFixed(
        1
      )}`;

      //show a background of a tooltip
      backTooltip.style.display = "block";
      backTooltip.setAttribute("y", y + h * 0.3 * 0.1);
      backTooltip.setAttribute("x", x + 1024 * 0.9 * 0.1);
    } else {
      tooltip.style.display = "none";
      backTooltip.style.display = "none";
    }
  });
};
