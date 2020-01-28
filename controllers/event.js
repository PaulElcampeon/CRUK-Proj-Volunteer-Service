const Event = require("../models/event.model");

exports.create_event = function(req, res, next) {
  let event = new Event({
    title: req.body.title
  });

  event.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("User Created successfully");
  });
};

exports.event_details = function(req, res, next) {
  Event.findById(req.params.id, function(err, event) {
    if (err) return next(err);
    res.send(event);
  });
};

exports.event_update = function(req, res) {
  Event.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    event.save(function(err, event) {
      if (err) return next(err);
      res.send("Event udpated.");
    })
  );
};

exports.check_in = function(req, res, next) {
  let checkIn = {
    title: "london fun run",
    user: {
      email: "Kaltun@email.com",
      name: "Kaltun"
    }
  };

  let eventCollection = db.getCollection(events);
  let event;
  try {
    event = eventCollection.find({ title: checkIn.title });
  } catch (err) {
    console.log(err);
    create_event(checkIn.title);
    event = eventCollection.find({ title: checkIn.title });
  }
  event.users.push(checkIn.user);
  eventCollection.update({ users }, checkIn.user);
};
