const express = require("express");
const router = express.Router();
const event_controller = require("../controllers/event");

router.post("/create", event_controller.create_event);

router.put("/check-in", event_controller.check_in);

router.get("/get/:id", event_controller.get_event);

module.exports = router;
