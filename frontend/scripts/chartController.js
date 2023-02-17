import { dataObj } from "./dataController";
import { getDefaultScreen } from "./chart/screens/defaultScreen";
import { get404Screen } from "./chart/screens/404Screen";
import { getLinearDiagram } from "./chart/screens/linearDgScreen";

export function initRender() {
  //config svg container
  const svg = document.getElementById("svg");
  svg.setAttribute("viewBox", "0 0 1024 512");
  svg.style.width = "90vw";
  svg.style.height = "40vh";
  svg.innerHTML = "";

  if (dataObj.data.dataStatus === "200") {
    getLinearDiagram(dataObj.data.serverData);
  } else if (dataObj.data.dataStatus === "000") {
    getDefaultScreen();
  } else {
    get404Screen();
  }
  //Get data from Data Controller
}
