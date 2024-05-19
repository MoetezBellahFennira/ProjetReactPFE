const express = require("express");
const groupe = require("../models/groupe");
// const groupe = require("../models/groupe");
const router = express.Router();
const { addgroupeValidation } = require("../validation");

router.get("/", (req, res, next) => {
  groupe
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

router.post("/addgroupe", (req, res, next) => {
  const { error } = addgroupeValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newgroupe = new groupe({
    id: req.body.id,
    nom: req.body.nom,
    niveau: req.body.niveau,
  });
  newgroupe
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Handling POST requests to /groupe",
        createdgroupe: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/getWithEnfantInstructor", async (req, res) => {
  let aggregation = [
    {
      $lookup: {
        from: "enfants",
        let: {
          group: "$_id",
        },

        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$groupId", "$$group"],
                  },
                ],
              },
            },
          },
          {
            $project: {
              nom: 1,
              prenom: 1,
              dateNaissance: 1,
              nomParent: 1,
            },
          },
        ],
        as: "enfants",
      },
    },

    {
      $lookup: {
        from: "users",
        let: {
          group: "$_id",
        },

        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ["$groupId", "$$group"],
                  },
                ],
              },
            },
          },
          {
            $project: {
              _id: 0,
              nom: 1,
              prenom: 1,
            },
          },
        ],
        as: "instructor",
      },
    },
    {
      $unwind: {
        path: "$instructor",
      },
    },
  ];

  try {
    // const fullGroupe = await groupe.aggregate(aggregation);
    const fullGroupe = await groupe.aggregate(aggregation);
    res.status(200).json(fullGroupe);
  } catch (error) {
    res.status(500).json({
      message: "error ",
    });
  }
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  groupe
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

router.put("/updategroupe/:id", function (req, res) {
  var CliId = req.params.id;
  groupe.findOneAndUpdate(
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

router.delete("/deletegroupe/:id", (req, res, next) => {
  const id = req.params.id;
  groupe
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
