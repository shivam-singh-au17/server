require("dotenv").config();
const express = require("express");
const connect = require("./src/configs/db");
const router = require("./src/controller");

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000


app.use("/", router) // besause of index.js file 


app.listen(port, async () => {
    await connect();
    console.log("Listening on port port");
});

