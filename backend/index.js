let serverData = require("./data");
let setServerData = require("./data");

const express = require("express");
const app = express();
const port = 3232;

setInterval(() => {
  serverData.setServerData();
}, 5000);

//Handling /api/test request.
app.get("/api/test", (req, res) => {
  //Sending an object, mocking sales per month

  res.send(serverData.getServerData());
});

//serving dist build
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
