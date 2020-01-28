const Event = require("../models/event.model");

exports.create_event = function(req, res) {
    let eventName = req.body.title;
    let newEvent = new Event({
        title: eventName
    });

    Event
        .find({title:eventName})
            .then(event => {
            if(event.length == 0) {
                newEvent
                    .save()
                        .then(event => {
                            res.status(200).send("Event created successfully");
                        })
                        .catch(err => {
                            res.status(400).send("Event not created");
                        })
            } else {
                res.status(400).send("An Event wit that name has already been created")
            }
        }).catch(err => {
            console.log("No Event with that name")
        })
};

exports.get_event = function(req, res) {
    Event
        .findById(req.params.id)
            .then(event => {
                res.status(200).json(event);
            })
            .catch(err => {
                res.status(400).send("Could not find event");
            })
};

exports.check_in = function(req, res) {
    let checkInObj = req.body;

    Event
        .findOne({title:checkInObj.title})
            .then(event => {
                if(!event.users.includes(checkInObj.email)) {
                    event.users.push(checkInObj.email)
                    event
                        .save()
                            .then(event => {
                                res.status(200).send("Checked in successfully");
                            }).catch(err => {
                                res.status(400).send("Was not able to check in");
                            })
                } else {
                    res.status(400).send("User already checked in");
                }
            })
            .catch(err => {
                res.status(400).send("Was not able to find event")
            })
};
