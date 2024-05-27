const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080, () => {
  console.log("8080 서버에서 실행중");
});
