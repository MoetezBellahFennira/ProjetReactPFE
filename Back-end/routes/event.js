const express = require("express");
const event = require("../models/event");
const router = express.Router();
const {addeventValidation} =require('../validation');

router.get("/", (req, res, next) => {
  event
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

router.post("/addevent", (req, res, next) => {
  const {error}=addeventValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const newevent = new event({
    id: req.body.id,
    nom: req.body.nom,
    type: req.body.type,
    date: req.body.date,

  })
  newevent
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /enfant",
        createevent: result,
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
  event
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

router.put("/updateevent/:id", function (req, res) {
  var CliId = req.params.id;
  event.findOneAndUpdate(
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

router.delete("/deleteevent/:id", (req, res, next) => {
  const id = req.params.id;
  event
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
