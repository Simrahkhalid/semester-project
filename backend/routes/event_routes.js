const express = require("express");
const eventRouter = express.Router();
const {createEvent,getEventsByType,getEventById,deleteEvent}=require("../controllers/Events_controller");

eventRouter.post("/api/event", createEvent);
eventRouter.get("/api/event/:type", getEventsByType);
eventRouter.get("/api/event/:id", getEventById);
eventRouter.delete("/api/event/:id", deleteEvent);

module.exports = eventRouter;