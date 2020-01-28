const express = require("express");
const bodyParser = require("body-parser");
const event = require("./routes/event.routes");
const app = express();
const cors = require('cors');


// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://someuser:abcd1234@cancer-project-vpgat.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(cors());
app.use(bodyParser.json());
app.use("/events", event);

let port = 8080;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
