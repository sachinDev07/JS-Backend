const express = require("express");

const app = express();  // create a express server object

const PORT = 10;


const myLogger = (req, res, next) => {
  console.log("loggging from middleware 1")
  return res.json({msg: "returning"});
  next();  // calls the next middleware
}

const extraLogger = (req, res, next) => {
  console.log("loggging from middleware 2")
  next(); 
}

const middleware = [myLogger, extraLogger] // created the array for reusibility..

app.get("/home",middleware, (req, res) => {
  console.log("Last middleware")
  res.json({
    message: "Ok get"
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
