import { linearDiagram } from "../linearDiagram/chart";
import { adjusting } from "../linearDiagram/adjusting";
import { getCrosshair } from "../utility/crosshair/crosshair";
import { createTooltip } from "../utility/tooltip/tooltip";
import { setTriggerBox } from "../utility/triggerBox/triggerBox";

import { yAxis, xAxis } from "../linearDiagram/axes";
export const getLinearDiagram = (data) => {
  // Get svg element
  const svg = document.getElementById("svg");

  //generating a Viewport config
  const viewportConfig = adjusting(data, 1024, 512);

  linearDiagram(svg, viewportConfig.coordinates);
  yAxis(svg, viewportConfig.minY, viewportConfig.maxY, 512);
  xAxis(svg, data, 1024, 512);
  setTriggerBox(svg, viewportConfig.minY, viewportConfig.maxY, 512);

  getCrosshair(svg);
  createTooltip(svg, viewportConfig.minY, viewportConfig.maxY, 512);
};
