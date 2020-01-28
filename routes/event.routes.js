const express = require("express");
const router = express.Router();

const event_controller = require("../controllers/event");

router.post("/create_event", event_controller.create_event);

router.get("/:id", event_controller.event_details);

router.put("/:id/update", event_controller.event_update);

router.put("/check_in", event_controller.check_in);

module.exports = router;
