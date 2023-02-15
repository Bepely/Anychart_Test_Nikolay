//This script is getting and setting data
import { initRender } from "./chartController";
//Main state object
export let dataObj = {
  data: {
    serverData: [],
    dataStatus: "000",
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
  //Create variables
  const inputElement = document.getElementById("urlInput");
  let apiString = "/default";

  //Function, that fetch data from a server.
  const getData = () => {
    dataObj.data.dataStatus = false; //reset data and status
    dataObj.data.serverData = []; //until it wil be loaded

    //Call preconfigured API to get data.
    fetch(apiString)
      .then((res) => res.json())
      .then((data) => dataObj.methods.setData(data))
      .then(() => {
        dataObj.methods.setStatus("200");
        initRender();
      })
      .catch((err) => {
        console.error(err);
        dataObj.methods.setStatus("404");
        initRender();
      });
  };

  //Function to update URL string
  const updateUrlString = (value) => {
    apiString = value;
  };

  //-----EVENT LISTNERS-----\\

  //Get data Button.
  document.getElementById("getDataBtn").addEventListener("click", () => {
    getData();
  });
  inputElement.addEventListener("input", (e) => {
    updateUrlString(e.target.value);
  });

  //Set API adress

  //
}
