const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((fruits) => {
      res.json(fruits);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve fruits" });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then(([id]) => {
      res.status(200).json({ data: id, info: req.body });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "issue with db" });
    });
});

module.exports = router;
