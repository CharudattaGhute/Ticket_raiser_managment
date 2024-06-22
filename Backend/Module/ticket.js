const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  ticketType: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  title: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  dueDate: {
    type: Date,
    require: false,
  },
  allocatedId: {
    type: String,
    require: false,
  },
  remarks: {
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
module.exports = mongoose.model("ticket", ticketSchema);
