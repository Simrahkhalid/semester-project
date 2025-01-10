const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  picture: {
    type: String,
  },
  type: {
    enum: ['ACES ', 'EFX ',"PEFAA","Charity_Auction"],
  },
  year: {
    type: String,
  },
});



const Event = mongoose.model('Event', eventSchema);

module.exports = Event;