//This script is getting and setting data
import { eventManager } from "./data/inputHandler";
//Main state object
export let dataObj = {
  data: {
    serverData: [],
    dataStatus: "000",
    cropDataFirst: false,
    cropDataLast: false,
    crosshair: {
      lineX: false,
      lineY: false,
    },
  },
  methods: {
    getData: () => {
      return [dataObj.data.serverData, dataObj.data.dataStatus];
    },
    setData: (e) => {
      dataObj.data.serverData = e;
    },
    setStatus: (e) => {
      dataObj.data.dataStatus = e;
    },
    setCropFirst: (e) => {
      dataObj.data.cropDataFirst = e;
    },
    setCropLast: (e) => {
      dataObj.data.cropDataLast = e;
    },

    //set crosshair lines toggle setters
    crosshair: {
      setX: () => {
        dataObj.data.crosshair.lineX = !dataObj.data.crosshair.lineX;
      },
      setY: () => {
        dataObj.data.crosshair.lineY = !dataObj.data.crosshair.lineY;
      },
    },
  },
};

export function getInitData() {
  eventManager();
}
