const mongoose = require("mongoose");
const userModule = require("../Module/user");

async function adduser(req, res) {
  console.log(req.body);
  try {
    const newuser = userModule(req.body);
    await newuser.save();
    res.status(201).send({ message: "User created Sucessfully", newuser });
  } catch (error) {
    res.status(500).send(error);
  }
}

// http://localhost:5001/api/adduser

/*
{
  "username":"Charudatta Ghute",
  "user_email":"ghutecharudatta@gmail.com",
  "mobile":9511225460,
  "gender":"male",
  "age":21,
  "designation":"user",
  "type":"login credential problem",
  "password":"charu@123",
  "createdBy":"charudatta",
  "modifiedBy":"admin",
  "createdAt":"2024-12-11T18:30:00.000+00:00",
  "modifiedAt":"2024-12-11T18:30:00.000+00:00"
  
}
 */
async function getalluser(req, res) {
  try {
    const newuser = await userModule.find();
    return res.send(newuser);
    res.status(201).send({ message: "User created Sucessfully", newuser });
  } catch (error) {
    return res.status(500).send(error);
  }
}
// http://localhost:5001/api/getalluser

async function deleteuser(req, res) {
  try {
    const userId = req.params.id;
    const deleteuserByid = await userModule.findByIdAndDelete(userId);
    if (!deleteuserByid) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.error("Error deleting User", err);
    res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
}
// http://localhost:5001/api/deleteuser/66743cd11c95a6095c6878f6

async function updateuser(req, res) {
  try {
    const { id } = req.params;
    const { designation } = req.body;

    if (!["User", "Admin"].includes(designation)) {
      return res.status(400).json({ message: "Invalid designation" });
    }
    const updateuser = await userModule.findByIdAndUpdate(id, { designation });
    if (!updateuser) {
      res.status(404).json({ message: "User not found" });
    }
    return res.status(200).send(updateuser);
  } catch (error) {
    console.error("Error updating User", error);
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: "validation error", err: error.message });
    } else if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Invalid user id", err: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", err: error.message });
    }
  }
}
// http://localhost:5001/api/updateuser/667434de993f535a21fad12c

module.exports = {
  adduser,
  getalluser,
  deleteuser,
  updateuser,
};
