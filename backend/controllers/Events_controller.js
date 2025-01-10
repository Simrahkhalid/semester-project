const Event=require('../models/Events');
const {uploadFileToCloudinary}=require("../utils/uploadToCloudnary");

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { title, type, year } = req.body;
        const image = req.files.file;

        const Uploadfile= await uploadFileToCloudinary(image, "auto");
        const picture=Uploadfile.secure_url;

        const newEvent = new Event({
            title,
            picture: picture,
            type,
            year
        });

        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all events
exports.getEventsByType = async (req, res) => {
    try {
        const { type } = req.params;
        const events = await Event.find({ type });
        if (events.length === 0) {
            return res.status(404).json({ message: 'No events found for this type' });
        }
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Delete an event by ID
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.remove();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};