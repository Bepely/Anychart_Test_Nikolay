import { getLine } from "../shapes";

export const getLinerDiagram = (data) => {
  // Get svg element
  const svg = document.getElementById("svg");
  //create layout elements

  const getXAxis = () => {
    return getLine(32, 480, 992, 480);
  };
  const getYAxis = () => {
    return getLine(32, 32, 32, 480);
  };
  const getLinearDiagram = () => {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    data.forEach((e, i, a) => {
      if (i < a.length - 1) {
        startX = Math.floor(Number((1024 / data.length) * (i + 1)));
        startY = Math.floor(Number((e["value"] / 512) * 100));
        endX = Math.floor(Number(1024 / data.length) * (i + 2));
        endY = Math.floor(Number((a[i + 1]["value"] / 512) * 100));
        console.log(e["value"], i);
        svg.appendChild(getLine(startX, startY, endX, endY));
      }
    });
  };
  console.log(data);
  svg.setAttribute("fill", "#D9D9D9");
  svg.appendChild(getXAxis());
  svg.appendChild(getYAxis());
  getLinearDiagram();
};
