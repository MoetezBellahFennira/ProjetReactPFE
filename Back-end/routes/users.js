const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const router = express.Router();
const auth = require("../middleswares/auth");
const { RegisterValidation, LoginValidation } = require("../validation");
const users = require("../models/users");
require("dotenv/config");

router.get("/Alluser", (req, res, next) => {
  users
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
router.delete("/deleteuser/:id", (req, res, next) => {
  const id = req.params.id;
  users
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
router.get("/", auth, async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      throw new Error("Authentication failed");
    }
    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
});

router.get("/parents", async (req, res) => {
  try {
    // const fullGroupe = await groupe.aggregate(aggregation);
    const parents = await User.find({ type: "Parent" });
    res.status(200).json(parents);
  } catch (error) {
    res.status(500).json({
      message: "error ",
    });
  }
});

router.post("/register", async (req, res, next) => {
  // message d'erreur (verifier data )
  const { error } = RegisterValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { nom, prenom, motDePasse, email, type, groupId } = req.body;
  if (!nom || !prenom || !motDePasse || !email) {
    return res.status(400).json({ message: "Bad input", success: false });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exits.",
        success: false,
      });
    }
    // hash mot de passe
    bcryptjs.hash(motDePasse, 10, async (hashError, hash) => {
      if (hashError) {
        return res.status(500).json({
          message: hashError.message,
          error: hashError,
        });
      }

      const _user = new User({
        _id: new mongoose.Types.ObjectId(),
        nom,
        prenom,
        email,
        type,
        groupId,
        motDePasse: hash,
      });
      // save user
      await _user.save();
      return res.status(201).json({
        message: "User Created",
        user: _user,
        success: true,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
});

router.post("/login", async (req, res, next) => {
  // message d'erreur (verifier data )
  const { error } = LoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { email, motDePasse } = req.body;
  try {
    // chercher si le user est existe !!
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Email",
        success: false,
      });
    }
    // verifier le mot de passe saisir avec le mot de passe existe sur BD
    const isMatch = await bcryptjs.compare(motDePasse, user.motDePasse);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Mot de passe",
        success: false,
      });
    }

    const payload = {
      user: {
        id: user.id,
        type: user.type,
      },
    };
    // create et assign token
    jwt.sign(payload, process.env.token, (err, token) => {
      if (err) throw err;
      return res.status(200).json({
        message: "Authentication Successful",
        token,
        user,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: error,
    });
  }
});
router.delete("/deleteuser/:id", (req, res, next) => {
  const id = req.params.id;
  users
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
