const express = require("express");
const mongoose = require("mongoose");
// 
const cors = require("cors");
const app = express();
const config = require("config");
app.use(express.json());

app.use(cors());

//setup mongo
const db_mongo = config.get("mongoURI");
mongoose
  .connect(db_mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//setup pg test
// const db_pg = config.get('postgresURI')
// const client = new Client({db_pg})
// client.connect()
// client.query('SELECT * FROM topics', (err, res) => {
//     console.log(err, res)
//     client.end()
// })
//use routes
app.use(require("./routes/index"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));