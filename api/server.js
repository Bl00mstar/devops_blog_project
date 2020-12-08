const express = require("express");
const mongoose = require("mongoose");
//
const cors = require("cors");
const app = express();
const config = require("config");

app.use(express.json());

app.use(cors());
app.options("*", cors());

const db_mongo = config.get("mongoURI");
mongoose
  .connect(db_mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(require("./routes/index"));

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server started on port ${port}`));
