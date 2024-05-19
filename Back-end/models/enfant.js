const mongoose = require("mongoose");

const EnfantSchema = mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  nom: {
    type: String,
    required: true,
    min: 3,
  },

  prenom: {
    type: String,
    required: true,
    min: 3,
  },
  dateNaissance: {
    type: String,
    required: true,
    min: 3,
  },
  nomParent: {
    type: String,
    min: 3,
  },
  hasGroup: {
    type: Boolean,
    default: false,
  },
  nomGroupe: {
    type: String,
    min: 3,
  },
  file: {
    type: String,
  },

  genre: {
    type: String,
    enum: ["homme", "femme"],
    default: "Homme",
    required: true,
  },
});
module.exports = mongoose.model("enfant", EnfantSchema);
