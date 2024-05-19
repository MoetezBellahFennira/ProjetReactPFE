const mongoose =require('mongoose');

const EventSchema = mongoose.Schema(
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
      required: true,
      min: 3,

    },
    Date: {
      type: String,
      required: true,
    },

  },
  
);
module.exports = mongoose.model("event",  EventSchema);
