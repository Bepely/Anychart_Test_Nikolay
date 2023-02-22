let data = {
  name: "Nikolay Anychart Random Data",
  data: [
    {
      x: "Start",
      value: 230,
    },
    {
      x: "Jan",
      value: 22,
    },
    {
      x: "Feb",
      value: -46,
    },
    {
      x: "Mar",
      value: -91,
    },
    {
      x: "Apr",
      value: 37,
    },
    {
      x: "May",
      value: -21,
    },
    {
      x: "Jun",
      value: 53,
    },
    {
      x: "Jul",
      value: 31,
    },
    {
      x: "Aug",
      value: -15,
    },
    {
      x: "Sep",
      value: 42,
    },
    {
      x: "Oct",
      value: 53,
    },
    {
      x: "Nov",
      value: -15,
    },
    {
      x: "Dec",
      value: 51,
    },
    {
      x: "End",
    },
  ],
  chartType: "waterfall",
  defaults: [
    { key: [["chart"], ["settings"], "title().enabled()"], value: true },
    {
      key: [["chart"], ["settings"], "title().text()"],
      value: "ACME corp. Revenue Flow 2017",
    },
  ],
};

let getServerData = () => {
  return data;
};
let totalSum = 0;
let setServerData = () => {
  totalSum = 0;
  data.data.forEach((e, i) => {
    if (e["x"] != "End") {
      e["value"] = Math.floor(Math.random() * 201) - 100;
      totalSum += e["value"];
    } else {
      e["value"] = data.data[0]["value"] + totalSum;
    }
  });
};

module.exports = { getServerData, setServerData };
