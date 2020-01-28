const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user.routes"); // Imports routes for the users

const event = require("./routes/event.routes");
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://someuser:abcd1234@cancer-project-vpgat.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", user);
app.use("/events", user, event);

let port = 8080;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
