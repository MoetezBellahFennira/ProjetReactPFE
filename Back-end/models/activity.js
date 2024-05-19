const mongoose =require('mongoose');

const ActivitySchema = mongoose.Schema(
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
    type: {
      type: String,
      min: 3,
      enum:["music","sport","sortie"],
      default:"sport",

    },
    date: {
      type: String,
      required: true,
    },
   
  },
  
);
module.exports = mongoose.model("activity",  ActivitySchema);
