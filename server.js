const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5010;
const server = require("http").createServer(app);
const cors = require("cors");

// API MODULES
const cookMaster = require("./apis/cookMasterApi");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/cook_master", cookMaster.create);
app.get("/cook_master", cookMaster.list);
app.post("/cook_master_validate", cookMaster.validate);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
