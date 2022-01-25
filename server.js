require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3030

const connect = require("./src/config/db");

const GNScontroller = require("./src/controllers");


app.use(cors());
app.use(express.json());

app.use("/", GNScontroller);



app.listen(port, async () => {

  await connect();
  console.log("Listening on post " + port);

})


module.exports = app;
