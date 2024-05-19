const express = require("express");
const emploi = require("../models/emploi");
const router = express.Router();
const {addemploiValidation} =require('../validation');

router.get("/Allemploi", (req, res, next) => {
  emploi
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

router.post("/addemploi", (req, res, next) => {
  const {error}=addemploiValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const newemploi = new emploi({
    id: req.body.id,
    nomGroupe :req.body.nomGroupe,
  })
  newemploi
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /emploi",
        createdemploi: result,
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
  emploi
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

router.put("/updatemploi/:id", function (req, res) {
  var CliId = req.params.id;
  emploi.findOneAndUpdate(
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

router.delete("/deleteemploi/:id", (req, res, next) => {
  const id = req.params.id;
  emploi
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
