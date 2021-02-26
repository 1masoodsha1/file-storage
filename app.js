require('dotenv').config();

const cors = require("cors");
const mongoose = require("mongoose");

const app = require("express")();
const bodyParser = require("body-parser");

const uploadRoute = require("./routes/upload");

const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);
app.use(cors());
app.use(bodyParser.json({ strict: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(uploadRoute);

mongoose.connection.once("open", () => {
  console.log("Connected to DB!");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connect(process.env.URI_MDB, {
  useCreateIndex: true,
  useNewUrlParser: true, useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`app running on port number ${PORT}`);
});