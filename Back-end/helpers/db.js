const mongoose = require('mongoose');
require('dotenv/config');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pfe:pfe@cluster0.twiii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;