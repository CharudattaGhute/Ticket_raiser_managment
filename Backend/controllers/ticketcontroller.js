const mongoose = require("mongoose");
const ticketModule = require("../Module/ticket");

async function addticket(req, res) {
  console.log(req.body);
  try {
    const newticket = ticketModule(req.body);
    await newticket.save();
    res.status(201).send({ message: "Ticket created sucessfully", newticket });
  } catch (error) {
    res.status(500).send(error);
  }
}
// http://localhost:5001/api/addticket
// {
//     "ticketType":"login credential problem",
//     "status":"Pending",
//     "title":"administrator error",
//     "description":"technical issue",
//     "dueDate":"2024-07-19T18:30:00.000+00:00",
//     "allocatedId":"123abdrt5",
//     "remarks":"on going",
//     "createdBy":"Pratik gaikwad",
//     "modifiedBy":"Suraj suruwanshi",
//     "createdAt":"2024-07-19T18:30:00.000+00:00",
//     "modifiedAt":"2024-07-20T18:30:00.000+00:00"

//   }

async function getallticket(req, res) {
  try {
    const newticket = await ticketModule.find();
    // return res.send(newticket);
    return res.status(200).send(newticket);
  } catch (error) {
    return res.status(500).send(error);
  }
}
// http://localhost:5001/api/getallticket

async function deleteticket(req, res) {
  try {
    const ticketid = req.params.id;
    const deleteticket = await ticketModule.findByIdAndDelete(ticketid);
    if (!deleteticket) {
      res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json({ message: "Ticket Deleted sucessfully" });
  } catch (error) {
    console.error("Error deleting Ticket", error);
    res
      .status(500)
      .json({ message: "Internal server Error", err: error.message });
  }
}
// http://localhost:5001/api/deleteticket/6675002edbacfd14eb997ee9

async function updateticket(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Accepted", "Rejected"].includes(status)) {
      res.status(400).json({ message: "Invalid status" });
    }
    const updateticket = await ticketModule.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updateticket) {
      res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).send(updateticket);
  } catch (err) {
    console.error("Error while updating ticket:", err);
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: "Validation error", error: err.message });
    } else if (err instanceof mongoose.Error.CastError) {
      res
        .status(400)
        .json({ message: "Invalid ticket id", error: err.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }
}
// http://localhost:5001/api/updateticket/6674fee6c5e263ccebe68f63
module.exports = {
  addticket,
  getallticket,
  deleteticket,
  updateticket,
};
