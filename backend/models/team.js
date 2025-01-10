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
  year: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
  },
  team: {
    type: String,
  }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;