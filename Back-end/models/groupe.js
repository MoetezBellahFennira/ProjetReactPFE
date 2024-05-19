const mongoose =require('mongoose');

const GroupeSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
      min: 3,

    },
    niveau: {
      type: String,
      required: true,
    },

  },
  
);
module.exports = mongoose.model("groupe",  GroupeSchema);
