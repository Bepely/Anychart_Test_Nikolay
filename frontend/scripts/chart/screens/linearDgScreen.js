import { linearDiagram } from "../linearDiagram/chart";
import { adjusting } from "../linearDiagram/adjusting";
import { getTooltip } from "../tooltip/tooltip";
import { getVerticalLine } from "../linearDiagram/hover";

import { yAxis, xAxis } from "../linearDiagram/axes";
export const getLinearDiagram = (data) => {
  // Get svg element
  const svg = document.getElementById("svg");

  //generating a Viewport config
  const viewportConfig = adjusting(data, 1024, 512);

  linearDiagram(svg, viewportConfig.coordinates);
  yAxis(svg, viewportConfig.minY, viewportConfig.maxY, 512);
  xAxis(svg, data, 1024, 512);

  getTooltip(svg);
};
