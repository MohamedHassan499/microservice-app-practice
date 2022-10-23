const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:3000/events", event);
  axios.post("http://localhost:3001/events", event);
  axios.post("http://localhost:3002/events", event);
  res.send({ status: 200 });
});

app.listen(3005, () => {
  console.log("Listen on port 3005");
});
