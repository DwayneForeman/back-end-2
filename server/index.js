const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const controller = require("./controller.js");
const { getHouses, createHouse, updateHouse, deleteHouse } = controller;

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:houseID", updateHouse);
app.delete("/api/houses/:houseID", deleteHouse);

app.listen(5500, () => console.log("sever running on port 5500"));
