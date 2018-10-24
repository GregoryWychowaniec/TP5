import express from "express";
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
  fs.readFile('./pizzas.json', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  

  

  //res.render("index", { pizzas: [{ name: "test" }, { name: "test2" }] });
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

export default router;
