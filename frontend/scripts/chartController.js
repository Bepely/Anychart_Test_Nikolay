import { dataObj } from "./dataController";
import { getRedCircle, getBlueRect } from "./chart/shapes";

export function initRender() {
  //config svg container
  const svg = document.getElementById("svg");
  svg.innerHTML = "";
  if (dataObj.data.dataStatus) {
    svg.appendChild(getRedCircle());
  } else {
    svg.appendChild(getBlueRect());
  }
  //Get data from Data Controller
}
