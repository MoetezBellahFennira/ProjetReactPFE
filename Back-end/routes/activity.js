const express = require("express");
const activity = require("../models/activity");
const router = express.Router();
const {addactivityValidation} =require('../validation');

router.get("/", (req, res, next) => {
  activity
    .find()
    .exec()
    .then((items) => {
      console.log(items);
      res.status(200).json(items);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/addactivity", (req, res, next) => {
  const {error}=addactivityValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const newactivity = new activity({
    id: req.body.id,
    nom: req.body.nom,
    type: req.body.type,
    date: req.body.date,

  })
  newactivity
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /activity",
        createdactivity: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  activity
    .find({ _id: id })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/updateactivity/:id", function (req, res) {
  var CliId = req.params.id;
  activity.findOneAndUpdate(
    { _id: CliId },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }

      console.log(doc);
      res.json(doc);
    }
  );
});

router.delete("/deleteactivity/:id", (req, res, next) => {
  const id = req.params.id;
  activity
    .findOneAndRemove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
