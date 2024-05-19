const express = require("express");
const bodyParser = require('body-Parser');
const connectDB = require('./helpers/db');
const jsonParser = bodyParser.json();
const cors = require('cors');
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 4000;
app.use(morgan("dev"));
app.use(cors());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// creé module
const groupeRoutes = require('./routes/groupe');
const authRouter = require('./routes/users');
const enfantRoutes = require('./routes/enfant');
const emploiRoutes = require('./routes/emploi');
const activityRoutes = require('./routes/activity');
const eventRoutes = require('./routes/event');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Routers setup
app.use("/groupe", jsonParser, groupeRoutes);
app.use('/auth/', jsonParser, authRouter);
app.use("/enfant", jsonParser, enfantRoutes);
app.use("/emploi", jsonParser, emploiRoutes);
app.use("/activity", jsonParser, activityRoutes);
app.use("/event", jsonParser, eventRoutes);

//Start the server
connectDB();

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
module.exports = app;
