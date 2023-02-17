//This script is getting and setting data
import { eventManager } from "./data/inputHandler";
//Main state object
export let dataObj = {
  data: {
    serverData: [],
    dataStatus: "000",
    cropDataFirst: false,
    cropDataLast: false,
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
    }
  },
};

export function getInitData() {
  eventManager();
}
