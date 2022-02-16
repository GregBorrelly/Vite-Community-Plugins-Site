const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static('dist'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// start express server on port 5000
app.listen(80, () => {
  console.log("server started on port 5000");
});