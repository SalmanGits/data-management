const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/router");
require("dotenv").config();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.use(router);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  }).catch = (err) => {
  console.log(err.message);
};

app.listen(port, () => {
  console.log("listening on port", port);
});
