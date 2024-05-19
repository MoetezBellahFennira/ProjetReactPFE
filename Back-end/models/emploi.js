const mongoose =require('mongoose');

const EmploiSchema = mongoose.Schema(
  {
    id: {
        type: String,
        required: true,
      },
      nomGroupe: {
        type: String,
        required: true,
      },
  },
  
);
module.exports = mongoose.model("emploi",  EmploiSchema);
