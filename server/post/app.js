const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.post("/posts", async (req, res) => {
  console.log(req.body);
  const id = uuid.v4(),
    { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:3005/events", {
    type: "postCreated",
    data: {
      id,
      title,
    },
  });

  res.status(200).send(posts[id]);
});

app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.listen(3000);
