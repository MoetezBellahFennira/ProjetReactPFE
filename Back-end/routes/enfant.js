const express = require("express");
const enfant = require("../models/enfant");
const router = express.Router();
const { addenfantValidation } = require("../validation");

router.get("/withParent", async (req, res) => {
  let aggregation = [
    {
      $lookup: {
        from: "groupes",
        let: {
          group: "$groupId",
        },

        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$_id", "$$group"],
                  },
                ],
              },
            },
          },
          {
            $project: {
              nom: 1,
            },
          },
        ],
        as: "group",
      },
    },
    {
      $unwind: {
        path: "$group",
      },
    },
    {
      $lookup: {
        from: "users",
        let: {
          parent: "$parentId",
        },

        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$_id", "$$parent"],
                  },
                ],
              },
            },
          },
          {
            $project: {
              nom: 1,
              prenom: 1,
            },
          },
        ],
        as: "parent",
      },
    },
    {
      $unwind: {
        path: "$parent",
      },
    },
  ];
  try {
    const enfants = await enfant.aggregate(aggregation);
    res.status(200).json(enfants);
  } catch (error) {
    res.status(500).json({ message: `error in with parent ${error.message}` });
  }
});

router.get("/Allenfant", (req, res, next) => {
  enfant
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

router.post("/addenfant", (req, res, next) => {
  const { error } = addenfantValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newenfant = new enfant({
    nom: req.body.nom,
    prenom: req.body.prenom,
    dateNaissance: req.body.dateNaissance,
    genre: req.body.genre,
    nomParent: req.body.nomParent,
    nomGroupe: req.body.nomGroupe,
    hasGroup: req.body.hasGroup,
    groupId: req.body.groupId,
    parentId: req.body.parentId,
    file: req.body.file,
  });
  newenfant
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /enfant",
        createdenfant: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/getone/:id", (req, res, next) => {
  const id = req.params.id;
  enfant
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

router.put("/updateenfant/:id", function (req, res) {
  var CliId = req.params.id;
  enfant.findOneAndUpdate(
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

router.delete("/deleteenfant/:id", (req, res, next) => {
  const id = req.params.id;
  enfant
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
