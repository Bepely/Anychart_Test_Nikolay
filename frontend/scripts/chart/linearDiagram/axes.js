//this file contains functions to draw axes
import { getLine, getText1 } from "../shapes";

export const yAxis = (svg, minY, maxY, h) => {
  // calculate the range and step size
  const yRange = maxY - minY;
  const yStep = yRange / 5;
  const tickHeight = 6;

  // loop through the ticks and draw them
  for (let i = 0; i <= 5; i++) {
    //add "ghost" Y tick
    const yTick = (h - (i * yStep * h) / yRange) * 0.9;

    // draw the tick label
    const tickLabel = getText1();
    tickLabel.setAttribute("x", tickHeight + 30);
    tickLabel.setAttribute("y", yTick);
    tickLabel.setAttribute("font-size", "18");
    tickLabel.setAttribute("fill", "black");
    tickLabel.textContent = (minY + i * yStep).toFixed(1);
    svg.appendChild(tickLabel);
  }
  svg.appendChild(getLine(1024 * 0.1, 0, 1024 * 0.1, h * 0.9));
};

export const xAxis = (svg, data, w, h) => {
  const xRange =
    Math.max(...data.map((d) => d["index"])) -
    Math.min(...data.map((d) => d["index"]));

  for (let i = 0; i < data.length; i++) {
    // add "ghost" first point
    const xGhost = (w * 0.95) / data.length;
    const x = (i * (w * 0.95)) / data.length + xGhost + w * 0.05;

    // draw the tick line
    const tick = getLine(x * 0.9, h * 0.9, x * 0.9, h * 0.9 - 5);
    svg.appendChild(tick);

    // draw the tick label
    const tickLabel = getText1();
    tickLabel.setAttribute("x", x * 0.9);
    tickLabel.setAttribute("y", h - 20);
    tickLabel.setAttribute("font-size", "18");
    tickLabel.setAttribute("fill", "black");
    tickLabel.setAttribute("text-anchor", "middle");
    tickLabel.textContent = data[i]["x"];
    svg.appendChild(tickLabel);
  }
  svg.appendChild(getLine(w * 0.1, h * 0.9, w * 0.9, h * 0.9));
};
