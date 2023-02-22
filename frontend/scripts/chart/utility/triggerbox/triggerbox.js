import { getText1, getLine, getRect } from "../../shapes";
import { dataObj } from "../../../dataController";

export const setTriggerBox = (svg) => {
  // create triggerBox
  const triggerBox = getRect(1024 * 0.1, 0, 1024 * 0.8, 512 * 0.9);
  triggerBox.id = "triggerBox";
  triggerBox.style.cursor = "auto";
  svg.appendChild(triggerBox);
};
