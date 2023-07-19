const express = require("express");

const app = express();  // create a express server object

const PORT = 10;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
