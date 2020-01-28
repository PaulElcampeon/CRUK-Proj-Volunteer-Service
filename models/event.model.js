const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema({
  title: { type: String, required: true },
  users: { type: [] }
});

module.exports = mongoose.model("Event", Event);
