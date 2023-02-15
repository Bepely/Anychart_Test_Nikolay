const express = require("express");
const app = express();
const port = 3232;
//Handling /api/test request.
app.get("/api/test", (req, res) => {
  //Sending an object, mocking sales per month
  res.send([
    { x: "Jan", value: 490 },
    { x: "Feb", value: 540 },
    { x: "Mar", value: 385 },
    { x: "Apr", value: 510 },
    { x: "May", value: 590 },
    { x: "Jun", value: 480 },
    { x: "Jul", value: 485 },
    { x: "Aug", value: 550 },
    { x: "Sep", value: 440 },
    { x: "Oct", value: 370 },
    { x: "Nov", value: 490 },
    { x: "Dec", value: 580 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
