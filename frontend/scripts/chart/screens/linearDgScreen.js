import { linearDiagram } from "../linearDiagram/chart";
import { adjusting } from "../linearDiagram/adjusting";

import { yAxis, xAxis } from "../linearDiagram/axes";
export const getLinearDiagram = (data) => {
  // Get svg element
  const svg = document.getElementById("svg");
  svg.setAttribute("fill", "#D9D9D9");

  //generating a Viewport config
  const viewportConfig = adjusting(data, 1024 * 0.9, 512 * 0.9);

  linearDiagram(svg, viewportConfig.coordinates);
  yAxis(svg, viewportConfig.minY, viewportConfig.maxY, 512 * 0.9);
  xAxis(svg, data, 1024, 512);
};
