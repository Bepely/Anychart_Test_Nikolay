import { dataObj } from "../dataController";
import { initRender } from "../chartController";

//This script contains even handlers
export const eventManager = () => {
  //Create Interactable Elements
  const toggleFirst = document.getElementById("cropToggleFirst");
  const toggleLast = document.getElementById("cropToggleLast");
  const enter = document.getElementById("getDataBtn");
  const inputElement = document.getElementById("urlInput");

  //Create Elements event listners

  //Function, that fetch data from a server.
  const getData = () => {
    dataObj.data.dataStatus = false; //reset data and status
    dataObj.data.serverData = []; //until it wil be loaded

    //Call preconfigured API to get data.
    fetch(apiString)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["data"]);
        if (dataObj.data.cropDataFirst) {
          data["data"].shift();
        }
        if (dataObj.data.cropDataLast) {
          data["data"].pop();
        }
        dataObj.methods.setData(data["data"]);
      })
      .then(() => {
        dataObj.methods.setStatus("200");
        console.log(dataObj);
        initRender();
      })
      .catch((err) => {
        console.error(err);
        dataObj.methods.setStatus("404");
        initRender();
      });
  };

  //Input update function
  let apiString = "/default";
  //Function to update URL string
  const updateUrlString = (value) => {
    apiString = value;
  };

  const toggleCropFirst = (e) => {
    dataObj.methods.setCropFirst(e);
  };
  const toggleCropLast = (e) => {
    dataObj.methods.setCropFirst(e);
  };

  //Add Event Listners

  //Enter event
  enter.addEventListener("click", () => {
    getData();
  });

  //Toggle event
  toggleFirst.addEventListener("change", (e) => {
    toggleCropFirst(e.target.checked);
  });
  toggleLast.addEventListener("change", (e) => {
    toggleCropLast(e.target.checked);
  });

  //Input event
  inputElement.addEventListener("input", (e) => {
    updateUrlString(e.target.value);
  });
};
