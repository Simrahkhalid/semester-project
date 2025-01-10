const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  years: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
  }
});

const TeamWie = mongoose.model('TeamWie', teamSchema);

module.exports = TeamWie;