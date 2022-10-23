const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;
const commentsByPostId = {};

app.post("/posts/:id/comments", (req, res) => {
  const commentId = uuid.v4();
  const { content } = req.body;
  const postId = req.params.id;
  const comments = commentsByPostId[postId] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[postId] = comments;
  res.status(200).send(comments);
});
app.get("/posts/:id/comments", (req, res) => {
  console.log(commentsByPostId);
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
