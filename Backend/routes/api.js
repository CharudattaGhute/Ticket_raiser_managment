const express = require("express");
const router = express.Router();

const userModel = require("../controllers/usercontroller");
const ticketModel = require("../controllers/ticketcontroller");

// User data
router.post("/adduser", userModel.adduser);
router.get("/getalluser", userModel.getalluser);
router.delete("/deleteuser/:id", userModel.deleteuser);
router.put("/updateuser/:id", userModel.updateuser);

// Ticket data
router.post("/addticket", ticketModel.addticket);
router.get("/getallticket", ticketModel.getallticket);
router.delete("/deleteticket/:id", ticketModel.deleteticket);
router.put("/updateticket/:id", ticketModel.updateticket);

module.exports = router;
