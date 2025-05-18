const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  day: String,
  temp: String,
  condition: String,
});

module.exports = mongoose.model('Weather', weatherSchema);
