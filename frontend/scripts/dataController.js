//This script is getting and setting data
import { initRender } from "./chartController";
//Main state object
export let dataObj = {
  data: {
    serverData: [],
    dataStatus: false,
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
  },
};

export function getInitData() {
  //Init data handler and load status variables

  let apiString = "/api/test";

  //Function, that fetch data from a server.
  const getData = () => {
    dataObj.data.dataStatus = false; //reset data and status
    dataObj.data.serverData = []; //until it wil be loaded

    //Call preconfigured API to get data.
    fetch(apiString)
      .then((res) => res.json())
      .then((data) => dataObj.methods.setData(data))
      .then(() => {
        dataObj.methods.setStatus(true);
      })
      .then(() => {
        initRender();
      })
      .catch((err) => console.error(err));
  };

  //-----EVENT LISTNERS-----\\

  //Get data Button.
  document.getElementById("getDataBtn").addEventListener("click", () => {
    getData();
  });

  //Set API adress

  //
}
