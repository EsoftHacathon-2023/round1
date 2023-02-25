require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./Database/mongodb.js");
const userRoute = require("./routes/user.route");
const serviceRoute = require("./routes/service.route");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use("/user", userRoute);
app.use("/service", userRoute);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env._PORT, () => {
  console.log("server runnning on ", process.env._PORT);
});

app.use(express.json());
