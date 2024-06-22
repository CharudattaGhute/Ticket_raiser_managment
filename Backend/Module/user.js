const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: false,
  },
  user_email: {
    type: String,
    require: false,
  },
  mobile: {
    type: Number,
    require: false,
  },
  gender: {
    type: String,
    require: false,
  },
  age: {
    type: Number,
    require: false,
  },
  designation: {
    type: String,
    require: false,
  },
  type: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
  createdBy: {
    type: String,
    require: false,
  },
  modifiedBy: {
    type: String,
    require: false,
  },
  createdAt: {
    type: Date,
    require: false,
  },
  modifiedAt: {
    type: Date,
    require: false,
  },
});
module.exports = mongoose.model("user", userSchema);
