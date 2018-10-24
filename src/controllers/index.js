import fs from "fs";
import express from "express";
const router = express.Router();
import d from "../storage/pizzas.json"


router.get("/", (req, res) => {
  /*fs.readFile("../storage/pizzas.json", function (err, data) {
    if (err) throw err;
    res.render("index", data)
  });
  */
 res.render("index", d)

  //res.render("index", { pizzas: [{ name: "test" }, { name: "test2" }] })
});

router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});

export default router;
