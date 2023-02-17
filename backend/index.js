// const express = require("express");
// const app = express();
// const port = 3232;
// //Handling /api/test request.
// app.get("/api/test", (req, res) => {
//   //Sending an object, mocking sales per month
//   res.send({
//     data: [
//       { x: "Jan", value: 490 },
//       { x: "Feb", value: 540 },
//       { x: "Mar", value: 385 },
//       { x: "Apr", value: 510 },
//       { x: "May", value: 590 },
//       { x: "Jun", value: 480 },
//       { x: "Jul", value: 485 },
//       { x: "Aug", value: 550 },
//       { x: "Sep", value: 440 },
//       { x: "Oct", value: 370 },
//       { x: "Nov", value: 490 },
//       { x: "Dec", value: 580 },
//     ],
//   });
// });

// //serving dist build
// app.use(express.static("public"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require("express");
const app = express();
const port = 3232;
//Handling /api/test request.
app.get("/api/test", (req, res) => {
  //Sending an object, mocking sales per month
  res.send({
    name: "ACME corp. Revenue Flow 2017",
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
  });
});

//serving dist build
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
